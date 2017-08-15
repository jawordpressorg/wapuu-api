# Wapuu JSON API
[![Build Status](https://travis-ci.org/jawordpressorg/wapuu-api.svg?branch=master)](https://travis-ci.org/jawordpressorg/wapuu-api)

JSON API for Wapuu in the World.

[See more about Wapuu.](http://jawordpressorg.github.io/wapuu/)

## Endpoint

https://jawordpressorg.github.io/wapuu-api/v1/wapuu.json

## Schemes

```
[
  {
    "name": "Wapuu-kanpur",
    "wapuu": {
      "name": "Kaapu Bhai",
      "url": "https://2017.kanpur.wordcamp.org/",
      "repository": "https://github.com/shbhmdvd/Wapuu-kanpur",
      "src": "https://github.com/shbhmdvd/wapuu-api/blob/master/Kapuu.png",
      "mime_type": "image/png"
    },
    "author": {
      "name": "Shubham Dwivedi",
      "url": "https://linkbustr17.deviantart.com"
    },
    "description":KAAPU BHAI is the official mascot for WordCamp Kanpur 2K17.

Kaapu Bhai has got his name from kanpur+wapuu, He represents the life and culture of people here in Kanpur(https://en.wikipedia.org/wiki/Kanpur),for which this wapuu was designed. Everything that this wapuu has is somehow an important part of our lives and i just tried to represent it in a funky way.

Announcement link: https://2017.kanpur.wordcamp.org/2017/06/21/meet-kaapu-bhai/

This is the official mascot named "Kaapu bhai" for WordCamp Kanpur 2017."
  },
  ...
```

1. name - The unique name of your Wapuu. Please input using half-width English numbers and letters and hyphen.
2. wapuu.name - The name of Wapuu.
3. wapuu.url - The URL to the site. e.g. https://xxx.wordcamp.org/
4. wapuu.repository - The repository URL of your Wapuu. In many case, it is GitHub's URL.
5. wapuu.src - The image url of the Wapuu. It should be GIF or PNG or JPEG.
6. wapuu.mime_type - The mime_type of your Wapuu. It should be image/png or so.
7. author.name - Author's name.
8. author.url - Author's URL.
9. description - The description of your Wapuu.

## How to Add your Wapuu

1. Fork this repository.
2. Please add your Wapuu's information into [wapuu.csv](https://github.com/jawordpressorg/wapuu-api/blob/master/wapuu.csv).
3. Give us pull-request.

You don't need to send pull-request for your Wapuu image to [Wapuu archive](http://jawordpressorg.github.io/wapuu/) repository.
We are hoping that your Wapuu should be in your own GitHub repository. :smile:

## Issue or Question

https://github.com/jawordpressorg/wapuu-api/issues
