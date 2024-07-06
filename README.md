# textlint-rule-table-align

textlint rule that check table align.

By default, no alignment at table.

```
[OK]

| foo | bar |
| --- | --- |
| 111 | 222 |

[NG]

| foo | bar |
| :-- | --: |
| 111 | 222 |
```

## Install

```
npm install textlint-rule-table-align
```

## Usage

```json
{
  "rules": {
    "table-align": true
  }
}
```

## Options

```jsonc
{
  // Prefer alignment. (default is no alignment)
  // You can configure `'left'`, `'right'`, `'center'` or `null`.
  "align": null,
}
```

## License

[MIT License](/LICENSE)
