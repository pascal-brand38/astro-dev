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
```
    <div class="astro-sprite astro-sprite-english">
    </div>
```

For more information about sprites and their benefits, here is a link selection:

* [mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
* [w3schools](https://www.w3schools.com/css/css_image_sprites.asp)
* [GTMetrix](https://gtmetrix.com/combine-images-using-css-sprites.html)
