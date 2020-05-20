---
title: HUMN1001
description: 
layout: slide
date: 2019-01-01
reveal_config:
  controls: true
  progress: false
  transition: slide
---

<style>
body {
  font-family: Helvetica;
  font-weight: "Graphic";
  //background: black;
}

.reveal .slides blockquote {
  font-size: 3rem;
  line-height: 3.5rem;
  margin-top: 12rem;
  color: white;
  font-weight: 400;
}
.reveal .slides blockquote span {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.0rem;
  max-width: 30em;
  display: inline-block;
  margin-top: 1.5rem;
}

em {
  font-style: italic !important;
}

.reveal .visual-equation span {
  vertical-align: middle;
}
.reveal .visual-equation {
	padding: 2rem;
	 text-align: center;
  margin-top: 9rem;
  display: block;
  color: white;
  font-size: 5rem;
  font-width: 100;
}

.reveal .visual-equation span.big {
  transform: scale(1,3) translate(0,.0rem);
  display: inline-block;
}
.reveal .visual-equation .dib {
  display: inline-block;
  font-size: 2rem;
  text-align: left;
  color: grey;
}
.reveal .visual-equation .dib span {
  color: white;
}

.imgbox.no-border {
/*box-shadow: none;*/
background-color: white;
}
.imgbox {
width: 200px;
height: 200px;
background-position: center;
background-size: cover;
display: inline-block;
box-shadow: 0 0 0 4px white;
}

.resisting-surveillance {
  color: white;
  margin-left: 18rem !important;
  margin-top: 8rem !important;
}

.resisting-surveillance   tr:last-of-type td:last-of-type {
  background: white;
  color: black;
}
.resisting-surveillance thead:last-of-type td:last-of-type {
  background: none;
  color: white;
}

.resisting-surveillance td {
  font-size: 2rem;
  padding: 3rem 3rem !important;
  text-align: center;
}

.resisting-surveillance tr td:not(:first-of-type) ,
.resisting-surveillance thead td:not(:first-of-type) {
  border-bottom: 1px solid white;
}
.resisting-surveillance tr td {
  border-right: 1px solid white;
}
.resisting-surveillance thead td {
  border-right: none;
}
</style>

{% include slide/title.html background="linear-gradient(to top, #000, #000)" title="" subtitle=""  %}
<h3><span  style="color: white; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 8rem; line-height: 7.2rem; font-weight: 900; margin-top: 15rem; margin-left:-1rem; ">Camera Adversaria</span></h3>
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 3rem; line-height: 3.2rem; font-weight: 200; margin-top: -0.rem; margin-left:0rem; ">Kieran Browne<br> Ben Swift<br> Terhi Nurmikko-Fuller</span></h3>

{% include slide/standard.html background="" style="background-size: 500px; background-position: center; background-repeat: no-repeat; background-blend-mode: normal; background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Panopticon.jpg/1088px-Panopticon.jpg); background-color: white; filter: invert(1);" %}

{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 3rem; line-height: 3.2rem; font-weight: 200; margin-top: -0.rem; margin-left:0rem; border-bottom: 2px solid white;">Surveillance Capitalism</span></h3>

<p style="color: white; font-size: 30px; line-height: 35px;">Surveillance capitalism is not a technology itself, but a logic; one that “imbues technology and commands it into action”.</p>

<blockquote>
<span>
Shoshana Zuboff. <em>The Age of Surveillance Capitalism: The fight for a human future at the new frontier of power.</em> Profile Books (2019).
</span>
</blockquote>

{% include slide/standard.html background="url(https://anatomyof.ai/img/ai-system-map.jpg), black" style="background-size:contain;background-position: center;background-repeat: no-repeat;"  %}


{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<table class="resisting-surveillance">
<thead><td></td><td>State</td><td>Corporate</td></thead>
<tr><td>Automutative</td><td>Camouflage</td><td>Avoidance</td></tr>
<tr><td>Exomutative</td><td>Sabotage</td><td>?</td></tr>
</table>
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 100%; display: block; text-transform: none; font-size: 2rem; line-height: 7.2rem; font-weight: 100; margin-top: 5rem; margin-left:-1rem; text-align: center;">Table 1: Ways of resisting surveillance</span></h3>


{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}

<video width="1280" height="720" controls style="position: absolute; top: 0;">
  <source src="/images/cameraadversaria.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>



{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 3rem; line-height: 3.2rem; font-weight: 200; margin-top: -0.rem; margin-left:0rem; border-bottom: 2px solid white;">Image classification</span></h3>
<span class="visual-equation">
<span>&#402;</span><span class="big">(</span>
<span class="imgbox" style="background-image:url(/images/alex-parkes-Z1XCsJyQwTc-unsplash.jpg);"></span>
<span class="big">)</span>
<span>&rArr;</span>
<span class="dib">.002 house<br>.012 banana<br>...<br><span>.87 bull</span><br>...<br>.01 tennisball</span>
</span>

<a style="margin-left:432px;margin-top:-18px;background-color:#222;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@centralparkes?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Alex Parkes"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Alex Parkes</span></a>

{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 3rem; line-height: 3.2rem; font-weight: 200; margin-top: -0.rem; margin-left:0rem; border-bottom: 2px solid white;">Adversarial Perturbations</span></h3>
<span class="visual-equation">
<span>&#402;</span><span class="big">(</span>
<span class="imgbox" style="background-image:url(/images/alex-parkes-Z1XCsJyQwTc-unsplash.jpg);"></span>
<span>&#x2b;</span>
<span class="imgbox" style="background-image:url(/images/adversaria_noise.png);"></span>
<span class="big">)</span>
<span>&rArr;</span>
<span class="dib">.001 house<br>.009 banana<br>...<br><span>.96 schoolbus</span><br>...<br>.012 tennisball</span>
</span>

<a style="margin-left:282px;margin-top:-18px;background-color:#222;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@centralparkes?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Alex Parkes"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Alex Parkes</span></a>



{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<blockquote style="text-align: center">
<br>
<br>
<br>
Machine vision &ne; human vision
</blockquote>





{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<blockquote>
<br>
<br>
“Universal Adversarial Perturbations”<br> <span>
Seyed-Mohsen Moosavi-Dezfooli, Alhussein Fawzi, Omar Fawzi, and Pascal Frossard. &ldquo;Universal adversarial perturbations.&rdquo; <em>Proceedings of the IEEE conference on computer vision and pattern recognition.</em> 2017.
</span>
</blockquote>


{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<blockquote>
<br>
<br>
“With single noise patterns [we are] able to fool a model on up to 90% of the dataset”<br> <span>
Kenneth T Co, Luis Muñoz-González, and Emil C Lupu. &ldquo;Procedural Noise Adversarial Examples for Black-Box Attacks on Deep Neural Networks.&rdquo; <em>arXiv preprint arXiv:1810.00470</em> 2018.
</span>
</blockquote>



{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<blockquote style="text-align: center;">
<br>
<br>
<br>
<br>
?<br> <span>
</span>
</blockquote>




{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 3rem; line-height: 3.2rem; font-weight: 200; margin-top: -0.rem; margin-left:0rem; border-bottom: 2px solid white;">Value-laden language</span></h3>
<blockquote>
“Machine learning classifiers are known to be vulnerable to inputs maliciously constructed by adversaries to force misclassification”
<br>
<span>
Sandy Huang, Nicolas Papernot, Ian Goodfellow, YanDuan, and Pieter Abbeel. <em>Adversarial Attacks on Neural Network Policies.</em> (2017).</span>
</blockquote>

{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 3rem; line-height: 3.2rem; font-weight: 200; margin-top: -0.rem; margin-left:0rem; border-bottom: 2px solid white;">Value-laden language</span></h3>
<blockquote>
“This linear behavior suggests that cheap, analytical perturbations of a linear model should also damage neural networks”
<br>
<span>
Ian J. Goodfellow, Jonathon Shlens, and Christian Szegedy. <em>Explaining and Harnessing Adversarial Examples.</em> (2014).</span>
</blockquote>


{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 3rem; line-height: 3.2rem; font-weight: 200; margin-top: -0.rem; margin-left:0rem; border-bottom: 2px solid white;">Value-laden language</span></h3>
<blockquote>
“Know your adversary: modeling threats ‘If you know the enemy and know yourself, you need not fear the result of a hundred battles.’ (Sun Tzu, The Art of War, 500 BC)”
<br>
<span>
Battista Biggio and Fabio Roli. Wild Patterns: Ten Years after the Rise of Adversarial <em>Machine Learning.</em> 84 (2018), 317–331.
</span>
</blockquote>

{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<h3><span  style="color: white; text-shadow: 0 0 84px #657; padding: .2em; text-align: left; width: 59%; display: block; text-transform: none; font-size: 3rem; line-height: 3.2rem; font-weight: 200; margin-top: -0.rem; margin-left:0rem; border-bottom: 2px solid white;">Value-laden language</span></h3>
<blockquote>
“It is important to ensure that such algorithms are robust to malicious adversaries”
<br>
<span>
Kenneth T Co, Luis Muñoz-González, and Emil C Lupu. <em>Procedural Noise Adversarial Examples for Black-Box Attacks on Deep Neural Networks.</em> (2018).
</span>
</blockquote>

{% include slide/standard.html background="linear-gradient(to top, #000, #000)" %}
<blockquote>
<br>
<br>
...design is ideological and most design affirms the status quo, reinforcing cultural, social, technical and economic expectations...<br> <span>
Anthony Dunne and Fiona Raby. <em>Design noir: The secret life of electronic objects.</em> Birkhäuser (2001).
</span>
</blockquote>




{% include slide/standard.html background="url(/images/ca-logo.png), black" style="background-size:400px;background-position:center;background-repeat:no-repeat;"  %}
