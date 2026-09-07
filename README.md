# japanpossible

Japan Possible株式会社 コーポレートサイト（1ページ構成の静的サイト）。

## ファイル

- `index.html` — サイト本体。CSSも同ファイル内に含まれており、ビルド不要でそのまま公開できます。

外部から読み込んでいるのは Google Fonts（Shippori Mincho B1 / Zen Kaku Gothic New / Jost）のみです。

## 公開方法（GitHub Pages）

1. リポジトリの Settings → Pages を開く
2. Source を「Deploy from a branch」、Branch を `main` / `(root)` に設定して Save
3. 数分後に `https://minami10870007-tech.github.io/japanpossible/` で公開されます

独自ドメインを使う場合は、リポジトリ直下に `CNAME` ファイルを置き、DNS 側で CNAME レコードを設定してください。

## 画像フレームの差し替え

写真が入る箇所は、比率と推奨サイズを表示した仮の枠になっています。HTML内の `class="frame ..."` を持つ `<div>` が該当箇所です。

| 箇所 | クラス | 比率 | 推奨サイズ |
| --- | --- | --- | --- |
| メインビジュアル | `kv` | 21:9（スマホ 4:3） | 2400 × 1030 px |
| 理念 | `creed-fig` | 3:4 | 1200 × 1600 px |
| 事業内容 × 3 | `work-fig` | 3:2 | 1600 × 1066 px |
| アクセス | `access-fig` | 16:10 | 1600 × 1000 px |

差し替え方は、枠の `<div>` ごと `<img>` に置き換えるのが簡単です。

```html
<!-- 差し替え前 -->
<div class="frame kv">
  <div class="frame__tag">Key Visual</div>
  <div>
    <div class="frame__label">メインビジュアル</div>
    <div class="frame__spec">21 : 9 / 2400 × 1030 px 推奨</div>
  </div>
</div>

<!-- 差し替え後 -->
<img class="kv" src="images/kv.jpg" alt="" style="object-fit:cover;width:100%;">
```

画像は `images/` ディレクトリを作ってそこに置いてください。

## 未記入の項目

会社概要・お問い合わせ内に、点線付きの「未記入」表記が残っています。以下が確定次第、差し替えてください。

- 設立
- 代表者
- 資本金
- 電話番号
- メールアドレス

事業内容（人材サービス／商品企画・流通／事業コンサルティング）も仮の内容です。
