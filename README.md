# astro-sprite

**astro-sprite** is a npm package aimed at building a sprite from small images/icons,
to be used with [Astro](https://astro.build/).
The sprite is created as a png or a webp image.

Typically, from single small images/icons (png or webp)
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

TODO: implement ```npx astro add astro-sprite```

### Manual install

First, install the astro-sprite package using your package manager. If you're using npm, run this in the terminal:

```bash
npm install astro-sprite
```

Then, apply this integration to your astro.config.mjs file using the integrations property:

```js
import { defineConfig } from 'astro/config';
import astroSprite from 'astro-sprite'

export default defineConfig({
  integrations: [
    astroSprite({})
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

# TODO

## Add in readme
* import css in scss file
* adding ::before to have spans
* extends to have good inline of flags, as in my website
* main class being with a astro-sprite* selection

## Add in code
* how to add the hash to preload the sprite in the html head?