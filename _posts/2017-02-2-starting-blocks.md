---
title: Starting Blocks
layout: post
thumbnail: /images/starting-blocks.jpg
kurzgesagt: Machine learning is a powerful tool changing the way we solve problems. This however, comes at the price of transparency; there is no longer a clear relationship between user input and system output. We need to redesign the human interfaces to machine learning systems so that users can understand and manipulate them.
excerpt: The first week of my PhD has been a mix of fun and frustration. I planned an ambitious start to my research which fizzled out due to some enrolment issues.
---

{% include hero.html src="/images/starting-blocks.jpg" alt="Starting Blocks" %}

The first week of my PhD has been a mix of fun and frustration. I planned an ambitious start to my research which fizzled out due to some enrolment issues (my fault). And by the time it was all sorted, the first day was all but over. 

On day two I discovered that I can’t read nearly as many journal articles in a day as I hoped. Issue one of *Computational Culture* seemed an achievable goal at 9:00am, but  by 5:30 I’d only polished off three of ten articles.

On day three I setup this website which is necessary but not exactly research, and day four (today), I wrote this post. 

In short, this week hasn’t been the running start I was hoping for, but to be honest, it’s just good to be back at uni.

But enough of my narcissistic, gen-Y, life-sharing; this is a research blog and as such I think it would be best that I give my best attempt at a summary of what my research actually is. The reader should be warned however, that I’m still trying to work that out myself.

As it stands, I’m looking at the design problems created as traditionally programmed computational systems are replaced with new-fangled machine learning algorithms. 

“Traditionally programmed” here means using logical and mathematical primitives to outline a decision process. Think “if this, then that”. This method is by no means without its flaws but importantly it is transparent; which is to say another programmer can examine and critique it.

Machine learning is another beast entirely. In machine learning, a programmer does not outline a decision process; instead, she chooses from a set of general algorithms, finds or collects a large enough data source and ‘trains’ the algorithm on the data. 

Machine learning is a powerful tool. These algorithms have proven to be very effective at solving problems we thought only humans could. (See [The Unreasonable Effectiveness of Recurrent Neural Nets](http://karpathy.github.io/2015/05/21/rnn-effectiveness/)).

Crucially though, machine learning is not transparent. A programmer can no longer look to the code to understand how a particular decision has been reached. Nor can she critique that decision.

The elements which govern the system’s decisions are not in the code itself but rather in a web of interlinked coefficients with no discernable connection to a feature or rule. This structure is difficult to visualise and even more difficult to manipulate.

{% include hero.html src="/images/jenga.jpg" alt="Jenga" %}

What we risk with digital services increasingly dominated by machine learning is the techno-mysticism that comes from incomprehensible complexity. To the consumer, a search engine might as well be magic, they have no way to perceive or conceive of its processes. What are the consequences when the programmer too, cannot understand and manipulate the services they create?

What we require for machine learning systems is a design language which reveals the system’s nature to the user and renders it changeable.
 
The elements of traditional computer interfaces are not suitable for this because they are analogous to the controls of a physical machine; buttons, switches, dials. They are functionally skeuomorphic. A button by it’s very nature implies behavioural consistency.

This direct relationship is appropriate for the cogs and circuits in a machine or if-this-then-thats of a traditionally programmed computer.

However to represent the hazier, probabilistic actions and decisions of a machine learning system we will need to create new design abstractions which leverage a user’s associations with other probabilistic systems or entities; or perhaps a clear enough system would need no recourse to skeuomorphism and analogy.


## Reading List

- Blackwell, Alan F. "Interacting with an inferred world: the challenge of machine learning for humane computer interaction." Proceedings of The Fifth Decennial Aarhus Conference on Critical Alternatives. Aarhus University Press, 2015.
- [Jun'ichirō Tanizaki. In praise of shadows. Leete's Island Books, 1977.](http://dcrit.sva.edu/wp-content/uploads/2010/10/In-Praise-of-Shadows-Junichiro-Tanizaki.pdf)
- [Munster, Anna. "Nerves of Data: the neurological Turn in/against Networked Media." Computational Culture 1 (2011).](http://computationalculture.net/article/nerves-of-data)
- [Wheeler, Michael. "Thinking Beyond the Brain: Educating and Building from the Standpoint of Extended Cognition." Computational Culture 1 (2011).](http://computationalculture.net/article/beyond-the-brain/)
