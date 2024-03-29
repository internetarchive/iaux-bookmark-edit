[![Build Status](https://travis-ci.com/internetarchive/iaux-bookmark-edit.svg?branch=master)](https://travis-ci.com/internetarchive/iaux-bookmark-edit)
[![codecov](https://codecov.io/gh/internetarchive/iaux-bookmark-edit/branch/master/graph/badge.svg)](https://codecov.io/gh/internetarchive/iaux-bookmark-edit)

# Deprecated.  See [@internetarchive/bookreader](https://github.com/internetarchive/bookreader)

# \<ia-bookmarks-list>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i @internetarchive/ia-bookmark-edit
```

## Usage
```html
<script type="module">
  import '@internetarchive/ia-bookmark-edit/ia-bookmark-edit.js';
</script>

<ia-bookmark-edit></ia-bookmark-edit>
```

## Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

To automatically fix many linting errors, run
```bash
npm run format
```

## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
