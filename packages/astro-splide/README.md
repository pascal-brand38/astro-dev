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
$ npm install astro-splide splidejs/splide
```

# Usage

## Components

Import Splide and SplideSlide components in frontmatter:

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

# Custom Structure
Although ```<Splide>``` renders a track element by default, you can handle them respectively with the hasTrack prop and the ```<SplideTrack>``` component. In a nutshell, following 2 components render the same HTML:

```jsx
---
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
---
<Splide>
  <SplideSlide>...</SplideSlide>
</Splide>

<Splide hasTrack={ false }>
  <SplideTrack>
    <SplideSlide>...</SplideSlide>
  </SplideTrack>
</Splide>
```

Separating ```<SplideTrack>``` from ```<Splide>``` allows you to place arrows, pagination or other controls anywhere outside the track in the similar way of vanilla Splide. For example, Splide renders arrows before a track by default, but you are able to specify the location with a placeholder:

```jsx
<Splide hasTrack={ false } aria-label="...">
  <div class="custom-wrapper">
    <SplideTrack>
      <SplideSlide>...</SplideSlide>
    </SplideTrack>

    <div class="splide__arrows" />
  </div>
</Splide>
```

...or with custom arrows:
```jsx
<Splide hasTrack={ false } aria-label="...">
  <SplideTrack>
    <SplideSlide>...</SplideSlide>
  </SplideTrack>

  <div class="splide__arrows">
    <button class="splide__arrow splide__arrow--prev">Prev</button>
    <button class="splide__arrow splide__arrow--next">Next</button>
  </div>
</Splide>
```

In the same way, you can add an autoplay toggle button and progress bar like so:

```jsx
<Splide hasTrack={ false } aria-label="...">
  <SplideTrack>
    <SplideSlide>...</SplideSlide>
  </SplideTrack>

  <div class="splide__progress">
    <div class="splide__progress__bar" />
  </div>

  <button class="splide__toggle" type="button">
 	  <span class="splide__toggle__play">Play</span>
 	  <span class="splide__toggle__pause">Pause</span>
  </button>
</Splide>
```

...or:

```jsx
<Splide hasTrack={ false } aria-label="...">
  <div class="custom-wrapper">
    <button class="splide__toggle" type="button">
      <span class="splide__toggle__play">Play</span>
      <span class="splide__toggle__pause">Pause</span>
    </button>

    <div class="splide__progress">
      <div class="splide__progress__bar" />
    </div>

    <SplideTrack>
      <SplideSlide>...</SplideSlide>
    </SplideTrack>
  </div>
</Splide>
```

# Props
```<Splide>``` accepts HTMLAttributes that will be assigned to a carousel root element, except for DOMAttributes. For instance, class and 'aria-label' are acceptable:


```jsx
<Splide class="my-carousel" aria-label="My Favorite Images">
</Splide>
```

Additionally, it takes a few more props.

## options
```jsx
options: Options
```

Splide options as an object:

```jsx
<Splide
  options={ {
    rewind: true,
    width : 800,
    gap   : '1rem',
  } }
>
</Splide>
```

## tag
```jsx
tag: 'div' | 'section' | 'header' | 'footer' | 'nav' = 'div'
```

Allows you to specify the tag name used for the root element. Although the default value is div for backward compatibility, 'section' is [recommended](https://splidejs.com/guides/structure/#role).

If you are using header, footer, or nav, you have to provide the most appropriate landmark role together. Otherwise, your accessibility tree will be invalid.

```jsx
<Splide tag="section"></Splide>
```

## hasTrack
```jsx
hasTrack: boolean = true
```

Determines whether to render a track or not.


# Events
You can listen to (all Splide events)[https://splidejs.com/guides/events/]
through the Splide component. The name of the
callback function is generated by the original name with adding an "on" prefix,
converting the format to the camelcase and removing colons. For example,
"arrows:mounted" becomes "onArrowsMounted". The event list is available in
(this file)[https://github.com/pascal-brand38/astro-dev/blob/main/packages/astro-splide/src/js/types/events.ts].

```jsx
<Splide onArrowsMounted={ ( splide, prev, next ) => { console.log( prev, next ) } }>
```

Note that the handler always takes the splide instance as the first argument, and original arguments after it.

# Not implemented
```Transitions``` and ```Extensions``` are not implemented.

# Example
Here is a small example:

```jsx
---
import "@splidejs/splide/css"
import { Splide, SplideSlide } from 'astro-splide';
---
<Splide
  options={ {
    rewind: true,
    gap   : '1rem',
  } }
  aria-label="My Favorite Images"
>
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image3.jpg" alt="Image 3"/>
  </SplideSlide>
</Splide>
```

You can see working examples in [this page](https://github.com/pascal-brand38/astro-dev/tree/main/packages/astro-splide/examples/components) and their sources here:

* [Basic](https://github.com/pascal-brand38/astro-dev/tree/main/packages/astro-splide/examples/components/BasicExample.astro)
* [Autoplay](https://github.com/pascal-brand38/astro-dev/tree/main/packages/astro-splide/examples/components/AutoplayExample.astro)


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
