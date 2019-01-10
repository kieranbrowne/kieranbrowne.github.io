---
title: Winter
description: Winter inst
layout: slide
date: 2019-01-01
reveal_config:
  controls: true
  progress: false
  transition: slide
---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

{% include slide/title.html title="Myopic histories and AI's culture of hyperbole" subtitle="&nbsp;" %}
<h3>Kieran Browne</h3>
<h3>Interdisciplinary and Cross-Cultural Research</h3>
<h3>Australian National University</h3>

{% include slide/large-quote.html quote="\"The Navy revealed the embryo of an electronic computer today that it expects will be able to walk, talk, see, write, reproduce itself and be conscious of its existence.\"" author="The New York Times, JULY 8, 1958" %}

{% include slide/citation.html citation="\"NEW NAVY DEVICE LEARNS BY DOING; Psychologist Shows Embryo of Computer Designed to Read and Grow Wiser.\" The New York Times. July 08, 1958." url="https://www.nytimes.com/1958/07/08/archives/new-navy-device-learns-by-doing-psychologist-shows-embryo-of.html" %}


{% include slide/large-quote.html quote="\"Today we are close to creating a human brain inside a computer — an entirely new species.\"" author="The New York Times, DECEMBER 7, 2018" %}

{% include slide/citation.html citation="\"The Deadly Soul of a New Machine.\" The New York Times. December 07, 2018." url="https://www.nytimes.com/2018/12/07/opinion/artificial-intelligence-machines.html" %}

{% include slide/standard.html title="Histories" %}

<ul>
  <li>Schmidhuber, Jürgen. "Deep learning in neural networks: An overview." Neural networks 61 (2015): 85-117.</li>
  <li>Bishop, J. Mark. "History and philosophy of neural networks." in Computational Intelligence (2015): 22-96.</li>
  <li>McCorduck, Pamela. "Meat Machines" in Machines who think: A personal inquiry into the history and prospects of artificial intelligence. AK Peters/CRC Press, (2009).</li>
  <li>Olazaran, Mikel. "A sociological study of the official history of the perceptrons controversy." Social Studies of Science 26, no. 3 (1996): 611-659.</li>
  <br>

  <li>Many more unofficial histories precede textbooks, review papers and blog posts</li>
</ul>


{% include slide/timeline.html drawingid="step1" title="Standard Timeline" startyear="1943" endyear="1996" data='[{year:1943, discovery:"McCulloch-Pitts Neuron"}, {year:1958, discovery:"Rosenblatt creates perceptron", notime: false}, {year:1969, discovery:"Minsky & Papert publish Perceptrons", notime: false}, {year:1980, discovery:"Logistic function introduced", uncertain: true}, {year:1986, discovery:"Backpropagation popularised"} ]' paths='[]' %}

{% include slide/standard.html title="Schmidhuber's overview" %}
<p>Begins section on early neural networks with McCulloch and Pitts in the 1940s but gives passing reference to history of methods;</p>
<p><b>"In a sense [neural networks] have been around even longer, since early supervised NNs were essentially variants
of linear regression methods going back at least to the early 1800s (e.g., Legendre, 1805; Gauss, 1809,
1821)"</b></p>
<p>Allows Schmidhuber to admit the origin of methods but maintain the simulation of the brain as the central narrative</p>
{% include slide/citation.html citation="Schmidhuber, Jürgen. \"Deep learning in neural networks: An overview.\" Neural networks 61 (2015): 85-117." %}

{% include slide/standard.html title="The McCulloch-Pitts neuron" %}
<p>The McCulloch-Pitts neuron followed from a number of axioms derived from the existing theories of neurophysiology and empirical evidence.</p>
<ul>
  <li>The activity of the neuron is an 'all-or-none' process.</li>
  <li>A certain fixed number of synapses must be excited withing the period of alatent addition in order to excite a neuron at any time, and this number is independent of previous activity and position of the neuron.</li>
  <li>The only significant delay within the nervous system is synaptic delay.</li>
  <li>The activity of any inhibitory synapse absolutely prevents excitation of the neuron at that time.</li>
  <li>The structure of the net does not change with time.</li>
</ul>


{% include slide/timeline.html drawingid="step2" title="Revised Timeline" startyear="1805" endyear="1996" 
data='[ {year:1605, discovery:"Leibniz Chain Rule", color: "#ffc"}, {year:1805, discovery:"Method of Least Squares", color: "#f00"}, {year:1943, discovery:"McCulloch-Pitts Neuron"}, {year:1958, discovery:"Rosenblatt creates perceptron", notime: false}, {year:1969, discovery:"Minsky & Papert publish Perceptrons", notime: true}, {year:1980, discovery:"Logistic function introduced", uncertain: true, notime: true}, {year:1986, discovery:"Backpropagation popularised"} ]' 
paths='[{a: 1805, b: 1958, color: "#f00"}]' %}

{% include slide/timeline.html drawingid="step3" title="Revised Timeline" startyear="1676" endyear="1996" 
data='[ {year:1676, discovery:"Leibniz Chain Rule", color: "#f00"}, {year:1805, discovery:"Method of Least Squares", color: "#f00"}, {year:1943, discovery:"McCulloch-Pitts Neuron"}, {year:1958, discovery:"Rosenblatt creates perceptron", notime: true}, {year:1969, discovery:"Minsky & Papert publish Perceptrons", notime: true}, {year:1980, discovery:"Logistic function introduced", uncertain: true, notime: true}, {year:1986, discovery:"Backpropagation popularised"} ]' 
paths='[{a: 1805, b: 1958, color: "#f00"}, {a: 1676, b:1986, color: "#f00"}]' %}

{% include slide/timeline.html drawingid="step4" title="Revised Timeline" startyear="1676" endyear="1996" 
data='[ {year:1676, discovery:"Leibniz Chain Rule", color: "#f00"}, {year:1805, discovery:"Method of Least Squares", color: "#f00"}, {year:1875, discovery:"Logistic Function", color: "#f00"}, {year:1943, discovery:"McCulloch-Pitts Neuron"}, {year:1958, discovery:"Rosenblatt creates perceptron", notime: true}, {year:1969, discovery:"Minsky & Papert publish Perceptrons", notime: true}, {year:1980, discovery:"Logistic function introduced", uncertain: true, notime: true}, {year:1986, discovery:"Backpropagation popularised"} ]' 
paths='[{a: 1805, b: 1958, color: "#f00"}, {a: 1676, b:1986, color: "#f00"}, {a: 1875, b:1980, color: "#f00"}]' %}

{% include slide/background.html image="/images/time.png" title="" bgsize="contain" %}

{% include slide/background.html image="https://pbs.twimg.com/media/DARmL4KXYAAj0td.jpg" title="" style="text-align: center;" %}

{% include slide/citation.html citation="\"Frank Rosenblatt's Perceptron AKA Mark 1, Cornell Aeronautical Laboratory, c. 1960." url="https://twitter.com/jcheudin/status/865929398649843712" style="text-shadow: 0 0 6px black;" %}
