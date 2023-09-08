---
layout: work
title: 'Soft Bodies'
year: 2018
tags:
    - new media
materials: 'custom software<br> duration: infinite'
thumbnail: https://storage.googleapis.com/kb_site_files/images/soft-bodies-1.jpg
hover_thumbnail: https://storage.googleapis.com/kb_site_files/images/soft-bodies-2.jpg
hero: https://storage.googleapis.com/kb_site_files/images/soft-bodies-1.jpg
thumbshape: 1/1
subtitle: WebGL Experiment
content_blocks:
    - type: textblock
      content: Soft bodies is a graphics experiment, written for the browser that makes use of OpenGL shaders and the ["ray marching"](https://en.wikipedia.org/wiki/Ray_marching) algorithm.
    - type: textblock
      content: This is a technique that uses distance functions, rather than geometry to produce 3 dimensional imagery. Because no geometry is being manipulated its possible to manipulate the resulting shapes fluidly.
    - type: textblock
      content: What I found while experimenting with this technique is that the resulting imagery can look surprisingly organic. Though clearly abstract, the shifting fleshy forms occasionally have flashes of resemblance to body parts; a knee-cap, shoulder or clavicle.
    - type: gallery
      caption: Screenshots of "soft bodies" at particularly human-like moments.  
      images:
        - https://storage.googleapis.com/kb_site_files/images/soft-bodies-1.jpg
        - https://storage.googleapis.com/kb_site_files/images/soft-bodies-2.jpg
        - https://storage.googleapis.com/kb_site_files/images/soft-bodies-3.jpg
    - type: textblock
      content: The shader that produced these images should be visible below. If it does not appear, try refreshing the page or opening this page on a different device.
    - type: iframe
      src: https://kieranbrowne.com/shader/soft-bodies/

---
