# Installation

```bash
npm install https://github.com/pascal-brand38/webtools-helper.git
```

<br>

# Use scss file

```scss
@import "node_modules/webtools-helper/scss/utility/reset.scss";
```

# Astro

In order to help new astro sites, this is possible to run
```
source ./node_modules/webtools-helper/astro-helper/bin/populate-astro.sh
```
It creates:
* sccs styles, based on webtools scss
* index.astro page
* layouts: main layout, header, nav, and footer

Users may also use webtools-constants.js to know the compilation date,...
