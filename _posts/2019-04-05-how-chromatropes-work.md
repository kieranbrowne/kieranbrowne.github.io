---
title: 'How chromatropes work'
layout: post
tags: 
    - old media
---

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500" class="slow">
  <defs>
    <mask id="combine-1-a">
      <image xlink:href="/images/chromatrope/combine-1-a.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
    <mask id="combine-1-b">
      <image xlink:href="/images/chromatrope/combine-1-b.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#combine-1-a)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#combine-1-b)" /></g>
</svg>


The chromatrope or "artificial firework" is a mechanical magic lantern slide and early medium for producing moving images. Similar mechanisms were used from the early 19th century by phantasmagoria showmen but the chromatrope was not widely known until the mid 19th century.[^encyclopedia]

Chromatropes used a rackwork mechanism or twisted band to revolve two glass discs in opposite directions.[^magicimages] These discs were usually painted with abstract patterns and were capable of producing astoundingly complex visual effects given their relatively simple form. 

{% include figure.html class="blend-multiply" src="/images/chromatrope-sketch.jpg" %}

Each slide filters the light partially and when designed well, the eye is tricked into percieving the motion not as simple rotation but as a combination of bursts, flashes, translations, and transformations formed by the intersection of the two slides.

With this post I want to demonstrate how simple chromatropic effects are produced and how combinations of these can produce astounding visual effects.[^colour]



DISCLAIMER: *There are many animated elements on this page that may not display correctly on every browser. If animations appear to be broken or are dropping frames try using a modern browser like [firefox](https://www.mozilla.org/en-US/firefox/new/).*

<style>
@keyframes slide-a { 0% { transform:  translateX(250px) translateY(250px) rotate(0deg); } 100% { transform: translateX(250px) translateY(250px) rotate(360deg); } }
.slide-a { 
    animation: slide-a 18s linear infinite;
    transform-origin: top left;
    display: inline-block;
    //mix-blend-mode: multiply;
}
@keyframes slide-b { 0% { transform:  translateX(700px) translateY(250px) rotate(360deg); } 100% { transform: translateX(700px) translateY(250px) rotate(0deg); } }
.slide-b { 
    animation: slide-b 18s linear infinite;
    transform-origin: top left;
    display: inline-block;
    //mix-blend-mode: multiply;
}
.slow .slide-a {
    animation: slide-a 36s linear infinite;
}
.slow .slide-b {
    animation: slide-b 36s linear infinite;
}
svg {
    width: 100%;
    margin-top: 1rem;
}
svg g {
   transition: transform 1.6s ease;
}
svg.pass .g2 {
  transform: translateX(-225px);
}
svg.pass .g1 {
  transform: translateX(225px);
}
</style>

## Basics


Perhaps the simplest effect that can be achieved with a chromatrope can be seen in the following. These slides create a pulsing or flashing effect when the unpainted points line up; because each dot is evenly spaced around the circle this occurs at a regular interval.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="flash-mask">
      <image xlink:href="/images/chromatrope/flash-mask.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#flash-mask)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#flash-mask)" /></g>
</svg>


By moving the position of points out of sync slightly, some interesting cross-rhythms are produced, extending the percieved period of the animation.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="outsynced-flash-mask">
      <image xlink:href="/images/chromatrope/outsynced-flash-mask.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#outsynced-flash-mask)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#outsynced-flash-mask)" /></g>
</svg>

This pulsing effect will work on any shape which is regular between the two slides.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="flashing-line-mask">
      <image xlink:href="/images/chromatrope/flashing-line-mask.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#flashing-line-mask)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#flashing-line-mask)" /></g>
</svg>

The illusion of continuous motion is produced by radially twisting the two outwardly expanding forms (like the lines above) in the direction that they are spinning.
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="moving-points-mask">
      <image xlink:href="/images/chromatrope/moving-points-mask.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
    <mask id="moving-points-mask-b">
      <image xlink:href="/images/chromatrope/moving-points-mask-b.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#moving-points-mask)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#moving-points-mask-b)" /></g>
</svg>


The effect can be reversed by twisting each disc in the opposite direction to their rotation, or simply swapping the discs.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#moving-points-mask-b)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#moving-points-mask)" /></g>
</svg>

By extending these lines all the way to the centre, starlike or floral effects are formed.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="twisted-star-mask">
      <image xlink:href="/images/chromatrope/twisted-star-mask.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
    <mask id="twisted-star-mask-b">
      <image xlink:href="/images/chromatrope/twisted-star-mask-b.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#twisted-star-mask)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#twisted-star-mask-b)" /></g>
</svg>

Alternatively, by tapering these lines towards the centre the effect can be made to fade out.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="tapered-twisted-star-mask">
      <image xlink:href="/images/chromatrope/tapered-twisted-star-mask.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
    <mask id="tapered-twisted-star-mask-b">
      <image xlink:href="/images/chromatrope/tapered-twisted-star-mask-b.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#tapered-twisted-star-mask-b)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#tapered-twisted-star-mask)" /></g>
</svg>

Reciprocal (back/forth) motion can be produced simply by painting one slide with a continuous oscillating pattern and the other with a spoke form.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="inoutaround-mask-a">
      <image xlink:href="/images/chromatrope/inoutaround-mask-a.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
    <mask id="inoutaround-mask-b">
      <image xlink:href="/images/chromatrope/inoutaround-mask-b.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#inoutaround-mask-a)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#inoutaround-mask-b)" /></g>
</svg>

Again by playing with the frequency of the two forms some interesting cross rhythms are produced.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="inoutaround-mask-c">
      <image xlink:href="/images/chromatrope/inoutaround-mask-c.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#inoutaround-mask-a)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#inoutaround-mask-c)" /></g>
</svg>

It is possible to produce reciprocal motion with two continuous oscillating lines, but flashes will appear periodically when the two forms align.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500" class="slow">
  <defs>
    <mask id="pulsing-star-mask">
      <image xlink:href="/images/chromatrope/pulsing-star-mask.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#pulsing-star-mask)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#pulsing-star-mask)" /></g>
</svg>




Two slides each with a spoke pattern will create the dynamic bursting effect for which the chromatrope earns the name "artificial firework".

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <defs>
    <mask id="star-mask">
      <image xlink:href="/images/chromatrope/star-mask.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#star-mask)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#star-mask)" /></g>
</svg>

These can be made more dynamic and explosive by experimenting with the regularity of the two slides.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500">
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#star-mask)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#inoutaround-mask-c)" /></g>
</svg>



## Combinations

Most chromatropes combine many simple features to produce more complex visual effects. This is achieved by dividing the slides into concentric rings. Here are some examples of what can be achieved.

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500" class="slow">
  <defs>
    <mask id="combine-1-a">
      <image xlink:href="/images/chromatrope/combine-1-a.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
    <mask id="combine-1-b">
      <image xlink:href="/images/chromatrope/combine-1-b.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#combine-1-a)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#combine-1-b)" /></g>
</svg>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500" class="slow">
  <defs>
    <mask id="combine-2-a">
      <image xlink:href="/images/chromatrope/combine-2-a.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
    <mask id="combine-2-b">
      <image xlink:href="/images/chromatrope/combine-2-b.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#combine-2-b)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#combine-2-a)" /></g>
</svg>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 950 500" class="slow">
  <defs>
    <mask id="combine-3-a">
      <image xlink:href="/images/chromatrope/combine-3-a.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
    <mask id="combine-3-b">
      <image xlink:href="/images/chromatrope/combine-3-b.jpg"  x="-200" y="-200" width="400px" height="400px" />
    </mask>
  </defs>
  <g class="g1"><circle class="slide-a" cx="0" cy="0" r="200" fill="black" mask="url(#combine-3-b)" /></g>
  <g class="g2"><circle class="slide-b" cx="0" cy="0" r="200" fill="black" mask="url(#combine-3-a)" /></g>
</svg>

It still blows my mind that such a simple mechanism can produce these effects. I can only imagine what it would have been like to see an original chromatrope at the turn of the nineteenth century. 

You can read more about chromatropes at [the Museum of Applied Arts & Sciences blog](https://maas.museum/inside-the-collection/2011/01/04/the-amazing-pre-history-of-cinema/), or see more of my digital chromatropes [here](/research/making-old-media-new).


## Notes

[^encyclopedia]: Robinson, David, Stephen Herbert, and Richard Crangle, eds. *Encyclopaedia of the magic lantern.* Twayne Publishers, 2001. p 67.
[^magicimages]: Crompton, Dennis, David Henry, and Stephen Herbert. Magic images: the art of hand-painted and photographic lantern slides. The Magic Lantern Society of Great Britain, 1990. p 82.
[^colour]: Readers with an eye for etymology may be wondering why the examples above are colourless. Achromatic chromatropes were made, although they were rare. This post presents the building blocks of chromatropic effects in black and white because they are easier to understand. For some examples of coloured chromatropes see [my other page on this](/research/making-old-media-new/).
[^lanternamagica]: Mannoni, Laurent, and Donata Pesenti Campagnoni, eds. *Lanterna magica e film dipinto: 400 anni di cinema.* “Il” Castoro, 2010.

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>

<script>
jQuery(window).scroll(function(){
   $("svg").each(function() {
        var topofDiv = $(this).offset().top; //gets offset of header
        var height = $(this).outerHeight(); //gets height of header

    if($(window).scrollTop() > (topofDiv - 200))
       $(this).addClass("pass");
    else
       $(this).removeClass("pass");
   });

});
</script>

