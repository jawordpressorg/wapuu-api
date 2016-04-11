# Wapuus JSON API
[![Build Status](https://travis-ci.org/jawordpressorg/wapuu-api.svg?branch=master)](https://travis-ci.org/jawordpressorg/wapuu-api)

JSON API for Wapuus in the World.

## Endpoint

https://jawordpressorg.github.io/wapuu-api/v1/wapuu.json

## Schemes

* id: The unique ID of your Wapuu.
* name: The name of your Wapuu.
* github_url: The GitHub repository of your Wapuu.
* wapuu_url: The URL to your Wapuu's image file. Image file should be JPEG or GIF or PNG.
* mimetype: `image/gif` or `image/jpeg` or `image/png`
* author: Your name.
* author_url: Your URL.

## How to Add your Wapuu

1. Fork this repository.
2. Please add your Wapuu's information into [wapuu.csv](https://github.com/jawordpressorg/wapuu-api/blob/master/wapuu.csv).
3. Give us pull-request.

## Build

```
$ npm run build
```
