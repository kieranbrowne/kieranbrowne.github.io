---
layout: work
title: Open Poses
year: 2021
materials: interactive digital installation
thumbnail: https://storage.googleapis.com/kieranbrowne-public-files/images/open_poses_thumbnail2.jpg
hover_thumbnail: https://storage.googleapis.com/kieranbrowne-public-files/images/open_poses_thumbnail.jpg
hero: https://storage.googleapis.com/kieranbrowne-public-files/images/open_poses_1.jpg
thumbshape: 3/2
subtitle: Interactive Digital Art Installation

content_blocks:
- type: textblock
  content: >-
    In 2022 I worked with artist [Amrita Hepi](https://www.amritahepi.com/) to develop an interactive digital installation for the exhibition [Primavera 2022](https://www.mca.com.au/artists-works/exhibitions/primavera-2022-young-australian-artists/) at the Museum of Contemporary Art, Sydney. Amrita's work explores "dance as social function" and her practice is performed in physical performace spaces but also in the digital spaces of new media. 


    Amrita's concept for the work was an interactive digital installation in which gallery goers would attempt to manouver and manipulate their bodies in step with hers. In particular, participants in the installation would mimic the body positions captured in a photographic archive of poses created and performed by the artist.

- type: gallery
  caption: "Open Poses (archive images). Three example images from Amrita Hepi's archive of poses. In each, Hepi kneels or stands in front of a green screen to form a unique body position. © Amrita Hepi."
  images:
    - https://storage.googleapis.com/amrita_artist_poses/amrita2_185.jpg
    - https://storage.googleapis.com/amrita_artist_poses/amrita2_221.jpg
    - https://storage.googleapis.com/amrita_artist_poses/amrita2_319.jpg

- type: textblock
  content: >-
    I joined the project as a creative technologist to prototype the work and to write the code for the final version. 


    The key challenges of the project, from the initial concept, were to find some way to measure the closeness of a participant's pose to those of Amrita's archive of poses, and to find a way to automatically superimpose a photo of the participant over Amrita's image. 


- type: figure
  shape: small
  caption: "An early development experiment estimating Amrita's pose using the machine learning model MoveNet. Here certain key joints of the artist's body are identified by the model and visualised in a red wireframe."
  src: https://storage.googleapis.com/kieranbrowne-public-files/images/open_poses_dev_pose.jpg

- type: textblock
  content: >-
    Pose estimation is actually a generally well solved problem today, though the complexity of poses in Amrita's archive certainly put the technology through its paces. 


    My prototype used the Tensorflow model [MoveNet](https://github.com/tensorflow/tfjs-models/tree/master/pose-detection/src/movenet) to compute the pose data for each photograph in the archive then compare it against the live pose data from my webcam.


- type: figure
  shape: small
  caption: An early prototype of Open Poses. The view compares pose data from Amrita (left) to live pose data from the webcam (right).
  src: https://storage.googleapis.com/kieranbrowne-public-files/images/open_poses_dev.gif

- type: figure
  caption: "Open Poses (detail). A gallery-goer interacts with Open Poses.  © Amrita Hepi. Photograph: Anna Kučera."
  src: https://storage.googleapis.com/kieranbrowne-public-files/images/open_poses_2.jpg

---


