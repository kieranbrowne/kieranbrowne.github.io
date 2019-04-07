---
title: "Making old media new"
layout: post
tags: 
    - old media
---

<div class="video yt square">
<iframe src="https://www.youtube-nocookie.com/embed/xeeqgEyjB4w?autoplay=1&mute=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Last year I was approached by Prof Martyn Jolly and Dr Elisa DeCourcy to design a chromatrope for their Australian magic lantern conference, [*Heritage in the Limelight*](http://soad.cass.anu.edu.au/research/heritage-limelight). The conference aimed to shed light on Australia's rich history of magic lantern slides and performances, and to support creative reuse and revival for the medium.

I was introduced to Martyn's collection of mechanical slides, known as chromatropes, which were used to produce moving images as early as the 18th century. Chromatropes use a rackwork mechanism to rotate two circular glass slides in opposite directions. These slides are painted with colourful abstract patterns and produce complex moving images when rotated.  It took a while to wrap my head around the rules of the medium and to be honest, that so much motion is squeezed out of the two static slides still blows my mind.


My early experiments weren't particularly compelling so I won't share them here, but you can find them on [instagram](https://www.instagram.com/_kieranbrowne/). The earliest decent works came after switching from processing to glsl and beginning with very simple forms. The interface below allows you to explore the space of only four features. Even in this small experiment the range of possibilities is surprising.

<div class="video">
<iframe src="https://kieranbrowne.com/chromatrope-builder"></iframe>
</div>

Expanding this process to include colour, I looked for a way to generate the kinds of intricate features that you find in original chromatropes and stumbled across iterated function systems (IFSs), a branch of mathematics used to generate fractals. Early experiments were promising and I found that a very small number of iterations worked better than full on fractal designs. 

<div class="video yt square small">
<iframe src="https://www.youtube-nocookie.com/embed/xeeqgEyjB4w?autoplay=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

As an alternative line of experimentation, and partially just as an excuse to experiment with some recent AI/ML methods I took a detour to experiment with training a machine learning model on chromatropes from Martyn's collection. The model, [pix2pix](https://affinelayer.com/pixsrv/), is trained to predict the following frame from the previous one. Then, this process is run interatively on its own output to create a short film. The results are psychedelic; the hard geometry of the chromatrope quickly gives way to a flow of lights and colours. The model has learned something of the visual phenomena of the chromatrope but is freed from what Martyn Jolly calls its "mechano/optical logic".

<div class="video yt square small">
<iframe src="https://www.youtube-nocookie.com/embed/XnZnq0qZb5g?autoplay=0&mute=1&enablejsapi=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="video yt square small">
<iframe src="https://www.youtube.com/embed/Jy3dm2o5R5k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Returning to the original task, designing a new chromatrope, I was helped by Miheng Dong to fabricate a few of my digital designs for projection through an original magic lantern. This was surprisingly difficult given modern tech, and makes the original chromatropes all the more impressive. Miheng translated my designs for the lazer cutter and built the slides from coloured acetate. The process worked, and although the result was less sharp than the digital design, this gave the result an imperfect charm that is lost on most digital imagery. Unfortunately I don't have any videos of the fabricated chromatrope but I'll try to track some down.

It was a stimulating challenge to work within the chromatrope's restrictive form and a surreal experience to see my 21st century design projected through a 19th century magic lantern. Early chromatrope makers were incredibly creative with their limited means and its fascinating to try to reverse engineer their processes. For those interested, I wrote another post explaining [how chromatropes work](/research/how-chromatropes-work), but no doubt there are still tricks that I have yet to discover and perhaps more that even the original makers did not discover.
