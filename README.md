# japanpossible

Japan Possible株式会社 コーポレートサイト。静的HTMLのみで、ビルドツールは使いません。

## 構成

```
index.html        トップ
business.html     事業内容
company.html      会社概要・アクセス
contact.html      お問い合わせ
assets/style.css  共通スタイル（4ページ共有）
```

制作方針・禁止事項は `CLAUDE.md` に記載しています。ページを追加・修正する際は先にそちらを読んでください。

## 掲載待ちの情報

- **取扱品目・主な取引国** — `business.html` に「準備中です」と表示されています。ここが具体的になるほどサイトの信頼性が上がるため、決まり次第の記載をおすすめします（該当箇所にHTMLコメントで記入例を入れてあります）
- **資本金・従業員数** — 未掲載。載せる場合は `company.html` の表に行を追加してください

写真（会社写真・代表者写真）はユーザーの判断で掲載しない方針です。詳細は `CLAUDE.md` の「禁止事項」を参照してください。

## 公開方法（GitHub Pages）

1. リポジトリの Settings → Pages を開く
2. Source を「Deploy from a branch」、Branch を `main` / `(root)` に設定して Save
3. 数分後に `https://minami10870007-tech.github.io/japanpossible/` で公開されます

独自ドメインを使う場合は、リポジトリ直下に `CNAME` ファイルを置き、DNS 側で CNAME レコードを設定してください。
