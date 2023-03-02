# parcel-transformer-papaparse

[![npm](https://img.shields.io/npm/v/parcel-transformer-papaparse)](https://www.npmjs.com/package/parcel-transformer-papaparse) [![types](https://img.shields.io/npm/types/parcel-transformer-papaparse)](https://www.npmjs.com/package/parcel-transformer-papaparse) [![license](https://img.shields.io/npm/l/parcel-transformer-papaparse)](https://www.npmjs.com/package/parcel-transformer-papaparse)

This transformer enables CSV and TSV import in [Parcel](https://parceljs.org/).

With the default Parcel configuration, Parcel does not include any transformers for CSV files.

Thus, this is the dedicated plugin whenever you need to import some CSV data.

## Installation

```shell
npm i -D parcel-transformer-papaparse
```

## Configuration

Add the plugin to your `.parcelrc`:

```jsonc
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{csv,tsv}": ["parcel-transformer-papaparse"]
  }
}
```

To customize the parsing behavior, specify any options listed in the [Papa Parse documentation](https://www.papaparse.com/docs#config) with a `papaparse` property in `package.json` or in a `.papaparserc` file to override the default config listed below:

```jsonc
{
  "dynamicTyping": true,
  "header": true,
  "skipEmptyLines": true
}
```

The config object is then passed directly to the `Papa.parse` function.

For example, to support comments:

```jsonc
{
  "comments": "#" // or "//" or whatever you like
}
```

The following alternative config filenames are also available, and are searched in order (it works similar to [Cosmiconfig](https://www.npmjs.com/package/cosmiconfig), but with `toml` instead of `yaml` support due to Parcel’s limitation):

```
.papaparserc.json
.papaparserc.toml
.papaparserc.js
.papaparserc.cjs
.config/papaparserc
.config/papaparserc.json
.config/papaparserc.toml
.config/papaparserc.js
.config/papaparserc.cjs
papaparse.config.js
papaparse.config.cjs
```
