---
title: Running TensorFlow in Clojure
layout: post
thumbnail: /images/clojure-tensorflow-thumb.jpg
kurzgesagt:
tags: [code, clojure, tensorflow, java, interop, machine learning]
---

TensorFlow is a library for running matrix computation very fast. This makes it perfect for data science and in particular, machine learning.

The power of TensorFlow comes from a bunch of optimised C code under the hood. TensorFlow can also be compiled to run on the GPU, which can allow for enormous speedups. This is important because the machine learning is becoming more reliant on big data and big networks which take a lot of computing power.

At the beginning of the year TensorFlow began work on a Java api, and that means Clojure gets one for free.

For now, the Java api is still in active development and is very sparse. But don't let that stop you getting your hands dirty. The Java api already
provides everything we need to work with TensorFlow. With just java interop and a couple of helper functions we can start writing idiomatic clojure code.

This post will cover:
 - [How to install TensorFlow with lein](#how-to-install-tensorflow-with-lein)
 - [How to think in TensorFlow](#thinking-in-tensorflow)
 - [How to directly interop with the Java api](#direct-interop-with-the-java-api)
 - [How we can still write nice code without a Clojure api](#writing-idiomatic-clojure-for-tensorflow)

## How to install TensorFlow with lein

To use TensorFlow with lein just add `[org.tensorflow/tensorflow "1.1.0-rc1"]` to your dependencies in `project.clj`.


We can test our installation by firing up a repl and running the version 
method on the TensorFlow class.

```clojure
(. org.tensorflow.TensorFlow version)
;; => "1.x.x-rc2"
```

### troubleshooting

If you get any errors first make sure your are running Java 8. 

```clojure
(System/getProperty "java.version")
;; => "1.8.0_101"
```

Your can force lein to use Java 8 by adding `:java-cmd "/path/to/java"` to your `project.clj`.

If you're still getting errors after that follow the instructions [here](https://github.com/kieranbrowne/clojure-tensorflow-interop#method-2-build-from-source) to build from source.


## Thinking in TensorFlow

Before we get started with the actual code, there are a few concepts
I need to explain otherwise none of this is going to make sense.

The main object of computation in TensorFlow is the *tensor*.
A Tensor is just a typed multi-dimensional array. Nothing scary here.

When we write code for TensorFlow, we're not actually running
computations. Instead we're composing a data structure which
describes the flow of data. In TensorFlow this is called a *graph*.
The graph will describe the flow of our data through a series of
operations (*ops* for short). Nothing will actually be computed
until we launch our graph in a *session*. The session handles the
execution of our graph on the CPU or GPU and returns the resulting
tensors.

In short, our clojure code will assemble a graph and fire off commands
to the C code using a Session object.

## Direct interop with the Java api

To get started I'm going to use only direct interop with the Java api.
It ain't pretty, but it should give you a sense for what is actually happening under the hood, and hopefully make it a bit easier to understand the abstractions we user later on.

First we need to initialise a new Graph object.
```clojure
(def graph (new Graph))
```

Next we're going to need some example tensors to work with.
Because the computation isn't running in clojure we can't just define
our values. Instead we're defining an operation node in the graph
that generates a constant.
First I'm creating a tensor object using the class' `.create` method.
Because we're interopping with the Java class we first need to turn
our clojure persistant vector into an array of 32bit Integers.
Using the arrow macro for clarity, we call the `.opBuilder` method on
our graph. The first argument is the binary operation which will be added to the graph. In this case its "Const" (which is short for constant (obviously)). 
This is one of a big set of possible binary ops which TensorFlow have 
implemented in native code and which we reference when building our graph.
The second argument is a unique name for the operation.
I went with
"tensor-1" for simplicity, but "Joaquin Phoenix" would
have also worked. The only requirement is that it is unique to
the graph. Next we set the value and datatype attributes
that are required for the Const operation. Finally we build our
operation based on the attributes and use the output method to return
it. It is this returned operation that gets saved in clojure.

```clojure
(def tensor-1
  (let [tensor
        (Tensor/create
         (int-array
          [360 909 216 108 777 132 256 174 999 228 324 800 264]
          ))]
    (-> graph
     (.opBuilder "Const" "tensor-1")
     (.setAttr "dtype" (.dataType tensor))
     (.setAttr "value" tensor)
     .build
     (.output 0))))

(def tensor-2
  (let [tensor
        (Tensor/create
         (int-array [5 9 2 1 7 3 8 2 9 2 3 8 8]))]
    (-> graph
        (.opBuilder "Const" "tensor-2")
        (.setAttr "dtype" (.dataType tensor))
        (.setAttr "value" tensor)
        .build
        (.output 0))))
```

Now lets add a more exciting operation to our graph.
Again we will call the `.opBuilder` method on our graph object.
I'm going to use the "Div" (division) operation this time.
Next we call the `.addInput` method to add our two example tensors
as input to the operation.
Again we build and output our operation object, saving it as "divide" in clojure land.

```clojure
(def divide
  (->
   (.opBuilder graph "Div" "my-dividing-operation")
   (.addInput tensor-1)
   (.addInput tensor-2)
   .build
   (.output 0)
   ))
```


To run our newly built operations, we need to create a session object
based on our graph.

```clojure
(def session (new Session graph))
```


We'll call the `.runner` method on our session to get the engine running.
We use the `.fetch` method to retrieve the divide operation by name;
in this case we want to pass it the name we gave to the divide
operation just before ("my-dividing-operation"). The `.get` method
gets our result from the returned array, this gives us a Tensor object
which has all the data but cannot be read easily, so finally to
read our results, we call the `.copyTo` method on the Tensor to
copy the contents to an integer array.

```clojure
(def result
  (-> session
      .runner
      (.fetch "my-dividing-operation")
      .run
      (.get 0)
      (.copyTo (int-array 13))
      ))
```

Finally we can read our results.
```clojure
(apply str (map char result))
;; => "Hello, World!"
```

## Writing idiomatic Clojure for TensorFlow

So we have successfully run a basic TensorFlow graph, which is cool, 
but the code made my eyes bleed. This is partially because the TensorFlow 
Java api is so new and doesn't have the multitudes of helper functions 
that python has yet. But I think the main reason is that writing methods 
isn't why I came to clojure.

TensorFlow's Java api is still extremely barebones, but it already 
provides everything that we need to do useful things.

Better yet, when we're writing for TensorFlow we're really only building operations and running them; thus we really only need a couple of helper function to cover all bases. We can get by without an api altogether.


Lets actually do some machine learning.
For simplicity's sake, I'm going to write a very shallow neural network.
From here on, I'm going to start using a very light layer on top of the interop that I defined in [helpers.clj](https://github.com/kieranbrowne/clojure-tensorflow-interop/blob/master/src/clojure_tensorflow_interop/helpers.clj).

First, we'll need some training data.
```clojure
(def training-data
  ;; input => output
  [ [0. 0. 1.]   [0.]
    [0. 1. 1.]   [1.]
    [1. 1. 1.]   [1.]
    [1. 0. 1.]   [0.] ])
```

We can split out training data into inputs and outputs like so.
Note the use of `tf/constant`. This simply wraps the operationBuilder
and takes care of adding the Const operation to the default graph.

```clojure
(def inputs (tf/constant (take-nth 2 training-data)))
(def outputs (tf/constant (take-nth 2 (rest training-data))))
```

We want to initialise our weights as a random value between -1 and 1.
Because training our network means changing the state of our weights,
we use `tf/variable` which creates a variable node on the graph.

```clojure
(def weights
  (tf/variable
   (repeatedly 3 (fn [] (repeatedly 1 #(dec (rand 2)))))))
```

Even though we're defining nodes for the TensorFlow graph, we can still define our flow with functions. This is great because it feels just like we're writing clojure code.

```clojure
(defn network [x]
  (tf/sigmoid (tf/matmul x weights)))
```

For our network to learn we need to measure the difference between
the training outputs and our network's outputs. Most of the complexity here comes from the neural network itself so if the next few functions don't make sense don't worry. For an explanation of basic neural network code checkout [this post](/research/neural-networks-carbon-and-code).
```clojure
(defn error [network-output]
  (tf/div 
    (tf/pow 
      (tf/sub outputs network-output) 
        (tf/constant 2.)) 
      (tf/constant 2.)))
```

For back-propagation, we need use derivative of our error and sigmoid
functions. Note here, the use of `tf/assign` to set the variable weights to their new value. Also notice how we can abstract our TensorFlow operations just like clojure code, so that all the complexity of derivatives and deltas is wrapped up in the `train-network` operation.
```clojure
(defn error' [network-output]
  (tf/sub network-output outputs))

(defn sigmoid' [x]
  (tf/mult x (tf/sub (tf/constant 1.) x)))

(defn deltas [network-output]
  (tf/matmul
   (tf/transpose inputs)
   (tf/mult
    (error' (network inputs))
    (sigmoid' (network inputs)))))

(def train-network
  (tf/assign weights (tf/sub weights (deltas (network inputs)))))
```

So far we seem to have used a whole bunch of functions to build our
operations. But really we've only been using one.
The function `op-builder` which is defined in [helpers.clj](https://github.com/kieranbrowne/clojure-tensorflow-interop/blob/master/src/clojure_tensorflow_interop/helpers.clj) simply
wraps up all the messy object-oriented code from the Java api to add
operations to the graph. All the other tf scoped functions we have used, just
pass arguments to `op-builder`. This is why we can safely wrap so much
functionality without worrying that the Java api will change on us.

### Running our Operations

The other thing that our `helpers.clj` file defines is a couple of
functions to make running operations a bit easier.

The `tf/session-run` helper function takes care of setting up a session and running a list of operations.
`tf/session-run` returns the results of the last operation in the list.
In this case the it will return the results of the network without training.
```clojure
(tf/session-run
 [(tf/global-variables-initializer)
  (network inputs)])
```

Note also the use of `tf/global-variables-initializer`. This is needed
when we are using one or more variables in our graph. There are other
ways of approaching the variable initialisation problem for TensorFlow
graphs, but for now I've just gone with the standard solution from
the python TensorFlow api. Despite the "global" in the function name
the variable initialisation is scoped to the `tf/session-run` function 
and won't affect other sessions. You can think of it like a `let` function.

The pattern above is great for testing small parts of your graph or
a couple of operations here and there. But when we train our network
we want its trained weights to be preserved so we can actually use
the trained network to get shit done.

For this we want to create a session object that we can hold on to.
```clojure
(def sess (tf/session))
```
We can make a partial of the `session-run` function
to get the best of both worlds.
```clojure
(def sess-run (partial tf/session-run tf/default-graph sess))
```

Now we can break up our operations steps into logical breaks
initialise variables and run the untrained network
```clojure
(sess-run [(tf/initialise-global-variables)])
```

Run the train-network operation 10000 times and then check the error.
```clojure
(sess-run
 [(repeat 10000 train-network)
  (tf/mean (error (network inputs)))])
```

Run the network on a new example
```clojure
(sess-run [(network (tf/constant [[1. 1. 1.]]))])
;; => [[0.99740285]]
```

And that's about it.
We've converted our eyesore object-oriented interop code to something
perfectly readable with just a couple of functions. The code base is
tiny enough to allow immediate changes if the Java api changes on us
and the system is flexible enough that we don't need to wait for the
Java api to get fleshed out to jump in and get our hands dirty.

## Final Thoughts

Machine learning is shaping up to be the most important class of algorithms of this decade. It's important that Clojure has a good story for ML if we want it to be around for a long time. [Cortex](https://github.com/thinktopic/cortex) is definitely making important progress on this front and as it approaches its 1.0.0 release I fully expect it to become Clojure's go to library for this sort of thing.
But TensorFlow is the biggest name in ML, and with Google's backing that isn't going to change anytime soon. 
The fact that we can so easily extend Java's api and write clearer code with than in Java itself 
(don't believe me? [read the example code](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/java/src/main/java/org/tensorflow/examples/LabelImage.java)) is a pretty incredible display of what makes Clojure a great language to write.

\*\*\*

The full code for this post is available [here](https://github.com/kieranbrowne/clojure-tensorflow-interop).

I've made a library to contain the helper functions used in this post. This is not intended to become a TensorFlow api for clojure and will remain as a very light layer over the interop. If you would like to use or contribute, you can find it [here](https://github.com/kieranbrowne/clojure-tensorflow).
