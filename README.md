# Wapuu JSON API
[![Build Status](https://travis-ci.org/jawordpressorg/wapuu-api.svg?branch=master)](https://travis-ci.org/jawordpressorg/wapuu-api)

[Readme 日本語](README.ja.md)

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
2. Add your Wapuu information into [wapuu.csv](https://github.com/jawordpressorg/wapuu-api/blob/master/wapuu.csv). You don't need to edit the JSON file since the CI automattically creates it from the CSV file.
3. Make a pull request in this repository.

There's no need to send pull request for your Wapuu image to [Wapuu archive](http://jawordpressorg.github.io/wapuu/) repository, you should have your Wapuu image in your own GitHub repository. :smile:

## Issue or Question

https://github.com/jawordpressorg/wapuu-api/issues
