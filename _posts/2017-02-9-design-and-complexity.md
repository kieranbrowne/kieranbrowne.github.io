---
title: Design and Complexity
layout: post
thumbnail: /images/dieter-rams-inspired-radio.jpg
kurzgesagt: What design problems are posed by neural nets as a software product. Particularly, is the complexity of NNs a barrier to a user’s ability to understand and, in consequence, to control them.
excerpt: Simplicity, essentiality and openness are three words used by the influential german designer Dieter Rams to summarise his work. Rams was revolutionary in his resolve to simplify everyday objects through industrial design.
---

## “simplicity, essentiality and openness.”

{% include figure.html src="/images/dieter-rams-inspired-radio.jpg" alt="Radio inspired by Dieter Rams" %}

Simplicity, essentiality and openness are three words used by the influential german designer Dieter Rams to summarise his work. Rams was revolutionary in his resolve to simplify everyday objects through industrial design. He designed a number of technical devices (stereos, radios, calculators) with the aim of simplifying the interface to the end user without removing useful functions.

Rams developed ten design principles by which to test his own work. His philosophy of design has remained relevant despite changes in fashion across half a century. His musings on what makes design good, are an interesting, if subjective yardstick to poke at interface design for neural nets.

The two ideas of his that I want to focus on is in this post are; good design should *make a product understandable* and *make a product useful*.

The first problem we arrive at here is that neural networks are extremely difficult to understand even for the programmers who build and train them. (here I mean the way in which a trained neural net’s decisions are formed, not the algorithms which allow training to take place, (although those are pretty complicated to).)

A neural net’s decision process is governed by a web of interdependent coefficients. These commonly have no clear connection to features in the data and cannot be individually manipulated. 

There exists a term for this in traditional programming. 

“Spaghetti code” is used to deride code-bases which cannot be easily understood or changed without breaking. This is the last thing you want to hear about your codebase. So why then do we excuse neural nets of the same sins? Because they’re just so gosh darn effective. 

Neural nets have inherent complexity, like a radio or an iPhone.
The question thus becomes, what complexity do we need to reveal to the user in order for her to use it successfully.

The favoured design solution for neural networks seems to be, *pretend it’s not there*.

Google for example, in the many years since its early forms, has developed its algorithm exhaustively. Personal data is now used to serve more relevant result. Data points like a user’s age, location, gender, previous searches, the searches of those around them, the emails they wrote their grandma last Christmas etc. could all be used in the rankings, however in all this time, the design of results page, and a user’s interactions with it have barely changed at all. What effect does my location have on my search for “celebrity chef”? my gender? that email I sent gran about Heston? What if I don’t want my location to be considered?

Google is not alone in this, of the many ways that machine learning is creeping into our lives, few are visible to the end user. 

The other common solution for interactions with machine learning  is training by example. For example, Facebook’s “I don’t want to see this” option has a direct, visible effect on the selected post but will also be used to improve the algorithm which generates the feed. This too is hard to conceive of for the end user who is unable to directly compare the effect of this change in their future feed.

{% include figure.html src="/images/dieter-rams.jpg" alt="Simplistic sketch of Dieter Rams" %}

So, are we making good design? 
We’ve concealed the complexity of neural nets that’s for sure. And we get the functionality and power of machine learning without any unsightly neurons and synapses. But, at the risk of overstretching my analogy, what remains is a radio without any controls.

*Good design makes a product understandable.* By exposing nothing of the neural net to the user we render it a ghost of the system. We see effects and may attribute these to a network or some action we took but cannot pin it down or reason about it.

*Good design makes a product useful.* It’s clear that neural nets can be useful whether the end user can directly manipulate them or not. But when a user can neither understand nor manipulate the system with which they interact, are they really using or simply receiving it?

## Reading List
- [Campbell-Dollaghan, Kelsey. "Skeuomorphism Will Never Go Away, And That's a Good Thing". Gizmodo](http://gizmodo.com/skeuomorphism-will-never-go-away-and-thats-a-good-thin-1642089313)
- ["Gilles Deleuze." Stanford Encyclopedia of Philosophy. (Accessed 10 Feb 2017)](https://plato.stanford.edu/entries/deleuze/)
- [Hui, Yuk. "The Plane of Obscurity — Simulation and Philosophy." Computational Culture 1, no. 1 (2011)](http://computationalculture.net/review/the-plane-of-obscurity-%E2%80%94-simulation-and-philosophy)
- Kulesza, Todd, Weng-Keen Wong, Simone Stumpf, Stephen Perona, Rachel White, Margaret M. Burnett, Ian Oberst, and Andrew J. Ko. "Fixing the program my computer learned: Barriers for end users, challenges for the machine." In Proceedings of the 14th international conference on Intelligent user interfaces, pp. 187-196. ACM, 2009.
- [Lippert, Ingmar. "Extended carbon cognition as a machine." Computational Culture 1, no. 1 (2011): 1-15.](http://computationalculture.net/article/extended-carbon-cognition)
- [Nielsen, Michael A. "Neural networks and deep learning." Chapter 1](http://neuralnetworksanddeeplearning.com/chap1.html)
- [Parisi, Luciana, and Stamatia Portanova. "Soft thought (in architecture and choreography)." Computational Culture, no .1 (2011).](http://computationalculture.net/article/soft-thought)
