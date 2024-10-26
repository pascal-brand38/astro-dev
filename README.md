# astro-sprite

**astro-sprite** is a npm package aimed at building a sprite from small images/icons,
to be used with [Astro](https://astro.build/).
The sprite is created as a png, webp, or avif image.

Typically, from single small images/icons (png, webp, avif)
![](https://raw.githubusercontent.com/pascal-brand38/astro-sprite/main/src/data/src/english.png) and
![](https://raw.githubusercontent.com/pascal-brand38/astro-sprite/main/src/data/src/france.png) and
![](https://raw.githubusercontent.com/pascal-brand38/astro-sprite/main/src/data/src/facebook.png) and
![](https://raw.githubusercontent.com/pascal-brand38/astro-sprite/main/src/data/src/youtube.png) and
![](https://raw.githubusercontent.com/pascal-brand38/astro-sprite/main/src/data/src/play_20x20.png),
astro-sprite integration creates the following bigger image
(the sprite), that contains all small icons:

<p align="center">
  <img src="https://raw.githubusercontent.com/pascal-brand38/astro-sprite/main/src/data/dst/astro-sprite.png" />
</p>


as well as a .css file, that used by the html to display a small image from the sprite. Typically, it includes:

```css
.astro-sprite { background-image:url(/img/astro-sprite.png?v=0cfc71);}
.astro-sprite-english { background-position: -0px -0px; width: 32px; height: 32px; }
.astro-sprite-facebook { background-position: -32px -0px; width: 32px; height: 32px; }
.astro-sprite-france { background-position: -64px -0px; width: 32px; height: 32px; }
.astro-sprite-play_20x20 { background-position: -96px -0px; width: 20px; height: 20px; }
.astro-sprite-youtube { background-position: -116px -0px; width: 32px; height: 32px; }
```

It is then rather easy to display the english flag in html, using for example:
```html
<div class="astro-sprite astro-sprite-english">
</div>
```

For more information about sprites and their benefits, here is a link selection:

* [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
* [w3schools](https://www.w3schools.com/css/css_image_sprites.asp)
* [GTMetrix](https://gtmetrix.com/combine-images-using-css-sprites.html)


<br>

# Usage

## Installation

### Quick install

To install astro-sprite, run the following from your project directory and follow the prompts:

* Using NPM: ```npx astro add astro-sprite```
* Using Yarn: ```yarn astro add astro-sprite```
* Using PNPM: ```pnpx astro add astro-sprite```


### Manual install

First, install the astro-sprite package using your package manager. If you're using npm, run this in the terminal:

```bash
npm install astro-sprite
```

Then, apply this integration to your astro.config.mjs file using the integrations property:

```js
import { defineConfig } from 'astro/config';
import sprite from 'astro-sprite'

export default defineConfig({
  integrations: [
    sprite()
  ],
});
```

The default behavior of astro-sprite is the following:
* Look for all ```.png``` images in ```assets/astro-sprite```
located in the astro src directory
* Save the resulting sprite image as ```img/astro-sprite.png```,
in the astro public dir
* Save the resulting css file as ```css/astro-sprite.css```
in the astro src dir
  * the class name containing the ```background-image```
    css property is ```.astro-sprite```
  * each icon in the sprite have a dedicated class name
    that starts with ```.astro-sprite-```, followed by the
    filename base. Typically, ```.astro-sprite-english```
    reference icon in ```english.png```

<br>

## Customizations

```sprite-astro``` can be customized to better fit your need.
Here are the default values that can be customized:

```js
import { defineConfig } from 'astro/config';
import sprite from 'astro-sprite'

export default defineConfig({
  integrations: [
    sprite({
      src: {
        dir: 'img/astro-sprite',
        extension: '.png',
      },
      dst: {
        spriteFile: 'img/astro-sprite.png',
        cssFile: 'css/astro-sprite.css',
        preloadFile: 'components/SpritePreload.astro',
        cssMainClass: '.astro-sprite',
        cssPrefix: '.astro-sprite-',
        cssSelector: '',
      }
    })
  ],
});
```

Customized properties are:
* ```src```: properties related to the source icons:
  * ```dir```: directory where the single icons are located, relative to the astro srcDir.
  * ```extension```: all files in ```src.dir``` with the provided extension will be
    used the sprite. ```.webp``` and ```.avif``` can be used
* ```dst```: properties related to the output of the integration
  * ```spriteFile```: the output sprite filename, relative to the astro publicDir
    A ```.webp``` or ```.avif``` file can be used
  * ```cssFile```: the output css filename, relative to the astro srcDir
  * ```preloadFile```: an astro component, to be use in the head section of the html,
    in order to preload the sprite, not waiting for the css to be loaded.
    Set it to ```undefined``` not to generate this file.
  * ```cssMainClass```: the css class that contains the property ```backgroud: url();```
  * ```cssPrefix```: each icon will be related to a css class, prefixed by this
    property, and suffixed by the icon file name
  * ```cssSelector```: a css selector added to each icon class, such as ```::before```




# Best practices

## Scss

Scss can be used to import the generated sprite css file in your
scss file. Here is the
[astro documentation about scss](https://docs.astro.build/fr/guides/styling/#sass-et-scss).

In your main scss file, you may then add:
```scss
@import "../css/astro-sprite";
```

## Preload

In order not to wait the css to be loaded to load the associated sprite,
an astro component is created. Its name is ```dst.preloadFile```, which equals
```components/SpritePreload.astro``` by default.

In order to preload the sprite, add in the head section this code:

```astro
---
import SpritePreload from "../components/SpritePreload.astro";
---
<head>
   ...
   <SpritePreload/>
   ...
</head>
```

## Span

```span``` is an easy way to add icons inlined your text, such as:

```html
<p>
  <span class="astro-sprite astro-sprite-english"></span> the english flag
</p>
```

To achieve a correct result, ```::before``` selector must be used, as with
```js
export default defineConfig({
  integrations: [
    sprite({
      dst: {
        cssMainClass: '.astro-sprite::before',
        cssSelector: '::before',
      }
    })
  ],
});
```

And add in your main .css / .scss file the following:
```scss
.astro-sprite::before {
  content: "";
  display:inline-block;
  vertical-align:middle;
}
```


## Get rid of ```.astro-sprite``` css class
Instead of using both ```astro-sprite astro-sprite-english``` to specify an
icon, this is possible to specify only ```astro-sprite-english``` by using the following
(```cssMainClass``` applies to any css class containing ```astro-sprite-```):
```js
export default defineConfig({
  integrations: [
    sprite({
      dst: {
        cssMainClass: '[class*="astro-sprite-"]',
      }
    })
  ],
});
```


# TODO
* Add the hash to preload the sprite in the html head?
