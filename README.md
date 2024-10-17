# Astro Proto creation

## Initialization
Create repo ```astro-proto``` on github, without any files in it.

Then to initialize the astro site:
```bash
npm create astro@latest -- --template basics
cd astro-proto
npm install
git remote add origin git@github.com:pascal-brand38/astro-proto.git
git remote -v
git push origin main
```

Run ```npm run dev``` to see the site on live.

Run ```npm run build``` to get the final files in ```dist```, that can be exported

## Initial setup

### Scss

```bash
npm sass
```

### Webtools and Scss
```bash
npm install sass
npm install https://github.com/pascal-brand38/webtools-helper.git
source ./node_modules/webtools-helper/astro-helper/bin/populate-astro.sh
```

It imports from webtools:
* styles
* layouts
* index page using webtools
