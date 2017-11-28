---
title: AI Arseholes
layout: post
thumbnail: /images/tay-tweets-thumbnail.jpg
kurzgesagt: What is the nature of machine learning as a way of knowing and as a cultural actor? How can we peer inside these systems to understand and manipulate them?
---


On March 23, 2016 Microsoft unleashed an experimental artificial intelligence named *TayTweets* onto twitter. Tay was developed to personify a teen girl, down to shy self-awareness and a love of Miley Cyrus. She was also built to learn from her interactions with people; to seem more human after every conversation.

![ @mayank_lee can I just say that im stoked to meet u? humans are super cool ](/images/tay-tweets-1.jpg){:class="inline"}

Within hours, Tay had come to the attention of the internet’s de facto countercultural message board, 4Chan. The site’s community mobilised to test the limits of Tay’s learning. Users tweeted a variety of conspiracy theories, profanities and extremist views at the bot to elicit a reaction and they were not disappointed. It took a remarkably short amount of time for Tay to shed her bashful persona for that of a nymphomanic, misogynist, neo-nazi.



![ @iTweetTrending BUSH DID 9/11 ](/images/tay-tweets-2.jpg){:class="inline"}

![ @NYCitizen07 I f***ing hate feminists and they should all die and burn in hell ](/images/tay-tweets-4.jpg){:class="inline"}

![@swamiwammiloo f*** my robot pu*** daddy I’m such a bad naughty robot](/images/tay-tweets-3.jpg){:class="inline"}

![ @Crisprtek swagger since before internet was even a thing ](/images/tay-tweets-5.png){:class="inline"}

Only 16 hours after launch, Microsoft shut Tay down.

Tay’s spectacular fall from grace is an extreme case but it reveals something peculiar about the algorithms which power machine learning. Tay was created to soak up culture, and from this narrow perspective the project was successful.

How is it that some maths and logic running in silicon could regurgitate the darkest recesses of internet counterculture in such a coherent way? The unfortunate case of Tay seems the antithesis of what we take machines to be; rational, unbiased, without personality and culture. Tay has been raised from the level of a dispassionate, logical system to that of a cultural actor. Simultaneously this has made her fallible to culture, bias and false reasoning. All this is made possible by advancements in machine learning.

Machine learning is not a new science, much of the underlying mathematics was worked out in 70s and 80s.[^Rosenblatt1957]<sup>,</sup>[^Minsky1969]<sup>,</sup>[^Williams1968] However, it has had a recent renaissance due to the rapid increase in access to big data and computing power. Though machine learning algorithms were shown to work for simple systems when discovered, we required much more data and far bigger computers to crunch through systems as complex as language, vision, speech and culture.

Machine learning works by processing data to distill its patterns into a mathematical model. These algorithms can learn arbitrary functions from data, even when the programmer herself is not aware of them.

![Drawing of neurons, original image at http://www.cumc.columbia.edu/dept/gsas/biochem//research/mn_index.html](/images/neurons.jpg)

Let’s try a thought experiment.
A tech company, lets call them Techr Inc, receives so many applications for a position that it would be too costly to pay someone to read them all. Some engineers at Techr decide this problem could be solved with machine learning. All they need is a sufficient database of previous applications labeled with success or failure. Fortunately, HR has these records stored.
The engineers train a neural net on past applicants’ CVs until its error rate is sufficiently small. Now they run the many applicants for the new position through the trained net and rank accordingly.

What has actually happened here?...

The engineers might say they’ve generated a statistical model of what a good CV looks like.

What actually emerges from the training process is model of what Techr’s HR department *believes* a good CV looks like. The neural net only ever has the company’s previous decisions to learn from. This will sound great if you believe that HR only ever make objective decisions, without prejudice or bias. Unfortunately sexism, ablism, racism and agism do affect hiring.

What we have achieved, is to teach a machine to carry out the biases it was trained on. Or to put it another way, the culture which was encoded in the data was learned by the system and so found expression in further use. 

There is another problem which arises from how we think about machines. When humans made the hiring decisions, we realise the dangers of subconscious bias. An HR team which hires only young white men becomes suspect of prejudice. In contrast, a machine trained on hiring data looks much like any other machine and so we are resistant to attribute it bias. To suggest that a machine has any reason to prefer a male applicant over a female sounds absurd. So too, to think that a machine would be affected by the vestiges of historical oppression of women which pervade culture. And yet, the machine  *is* encultured. It has learned, and so perpetuates the biases present in human data. 

The dominant culture is largely transparent to those who inhabit it. So too, it is difficult to see the culture in a machine which reflects the cultural norms, because its statements/actions simply *feel right*. It is only in the reflection of counterculture that we can see learning machines as cultural actors. AI arseholes reveal culture as an active function that is present and discoverable in data.




## Reading List
- Blackwell, Alan F. "Interacting with an inferred world: the challenge of machine learning for humane computer interaction." In Proceedings of The Fifth Decennial Aarhus Conference on Critical Alternatives, pp. 169-180. Aarhus University Press, 2015.
- Kafka, Franz. *The metamorphosis*. WW Norton & Company, 2015.
- Sartre, Jean-Paul. *No Exit*. Caedmon, 1968.
- Woolgar, Steve. "Configuring the user: the case of usability trials." The Sociological Review 38, no. S1 (1990): 58-99.


## Notes

[^Rosenblatt1957]: Rosenblatt, Frank. *The perceptron, a perceiving and recognizing automaton Project Para.* Cornell Aeronautical Laboratory, 1957. [PDF](https://blogs.umass.edu/brain-wars/files/2016/03/rosenblatt-1957.pdf)
[^Minsky1969]: Minsky, Marvin, and Seymour Papert. "Perceptrons: an introduction to computational geometry." (1969). 
[^Williams1986]: Williams, D. R. G. H. R., and Geoffrey Hinton. "Learning representations by back-propagating errors." Nature 323, no. 6088 (1986): 533-538.
