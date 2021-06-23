# Wapuu JSON API

[Readme English](README.md)

わぷーアーカイブのための JSON API

[わぷーアーカイブ](http://jawordpressorg.github.io/wapuu/)

## エンドポイント

https://jawordpressorg.github.io/wapuu-api/v1/wapuu.json

## スキーマ

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

1. name - 一意のわぷー ID。数字・アルファベット・ハイフンのみを使用して名前をつけてください。
2. wapuu.name - わぷーの名前。
3. wapuu.url - リンクされるサイトへの URL。 例: https://xxxx.tokyo.wordcamp.org/
4. wapuu.repository - わぷーのレポジトリへのリンク。例: https://github.com/jawordpressorg/wapuu
5. wapuu.src - わぷー画像への URL。 GIF, PNG, JPEG のいずれかを使用してください。
6. wapuu.mime_type - 画像の mime_type (画像タイプ)。 PNG 画像であれば `image/png`, JPEG であれば `image/jpeg` となります。
7. author.name - 作者名。
8. author.url - 作者サイトへの URL。
9. description - わぷーの説明。

## わぷーの追加方法

1. このレポジトリをフォークする。
2. [wapuu.csv](wapuu.csv) 内に追加したいわぷーの情報を入力する (JSON ファイルではなく、CSV ファイルを編集する) 。
3. プルリクエストを送る。

[Wapuu archive](http://jawordpressorg.github.io/wapuu/) のレポジトリに画像を追加するためのプルリクエストを送信する必要はありません。お持ちの GitHub アカウントのレポジトリや gist などに画像を配置し、そちらへの画像 URL を CSV ファイルに記述する URL として使用してください。

## 質問など

https://github.com/jawordpressorg/wapuu-api/issues
