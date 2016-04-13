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
    "name": "original-wapuupng",
    "wapuu": {
      "name": "Wapuu",
      "url": "https://ja.wordpress.org/",
      "repository": "https://github.com/jawordpressorg/wapuu",
      "src": "https://jawordpressorg.github.io/wapuu/wapuu-archive/original-wapuu.png",
      "mime_type": "image/png"
    },
    "author": {
      "name": "Kazuko Kaneuchi",
      "url": "https://twitter.com/mutsuking"
    },
    "description": "Original Wapuu"
  },
  ...
```

* name - The unique name of your Wapuu. Please input using half-width English numbers and letters and hyphen.
* wapuu.name - The name of Wapuu.
* wapuu.url - The URL to the site. e.g. https://xxx.wordcamp.org/
* wapuu.repository - The repository URL of your Wapuu. In many case, it is GitHub's URL.
* wapuu.src - The image url of the Wapuu. It should be GIF or PNG or JPEG.
* wapuu.mime_type - The mime_type of your Wapuu. It should be image/png or so.
* author.name - Author's name.
* author.url - Author's URL.
* description - The description of your Wapuu.

## How to Add your Wapuu

1. Fork this repository.
2. Please add your Wapuu's information into [wapuu.csv](https://github.com/jawordpressorg/wapuu-api/blob/master/wapuu.csv).
3. Give us pull-request.

## Issue or Question

https://github.com/jawordpressorg/wapuu-api/issues
