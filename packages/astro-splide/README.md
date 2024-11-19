<div align="center" style="background-color: black; padding: 16px;">
  <a href="https://splidejs.com" target="_blank">
      <img width="70" src="images/logo.svg">
  </a>
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  &nbsp;
  <a href="https://astro.build/" target="_blank">
      <img height="70" src="images/astro-logo.svg">
  </a>

  <h1>Astro Splide</h1>

  <p>
    Astro Splide is the native Astro component for the
    <a href="https://github.com/Splidejs/splide">Splide</a> slider/carousel.
  </p>

</div>

# Installation
Get the latest version from NPM:
```
$ npm install astro-splide
```

# Usage

## Components

Import Splide and SplideSlide components:

```jsx
import { Splide, SplideSlide } from '@splidejs/react-splide';
```

...and render them like this:

```jsx
<Splide aria-label="My Favorite Images">
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
```

If you have the visible heading for the carousel,
use ```aria-labelledby``` instead of ```aria-label```.
See [this page](https://splidejs.com/guides/structure/) for more details.


## CSS
Select a CSS file you want to use in frontmatter, and import it:

```jsx
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
```



Import Components:

```jsx
---
import { Splide, SplideSlide } from 'astro-splide';
---
<Splide options={ { rewind: true } }>
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
```


# Support Splide

Please support the project if you like it!
- [Github Star astro-splide](https://github.com/pascal-brand38/astro-dev), a package of astro-dev
- [GitHub Sponsors @splidejs/splide](https://github.com/sponsors/NaotoshiFujita)


## License
Astro Splide and Splide are released under the MIT license.
<br>
© 2024 Pascal Brand
<br>
© 2021 Naotoshi Fujita
