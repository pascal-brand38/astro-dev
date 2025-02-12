// Copyright (c) Pascal Brand
// MIT License

import { EVENTS } from "./constants/events.js"
import Splide from "@splidejs/splide";

function splideConnectedCallback(splideId: string|undefined, options: string|undefined) {
  // Read the options from the data attribute of astro-splide.
  const id = splideId || '';
  const opt = JSON.parse(options || '');
  let splide = new Splide('#' + id, opt);

  const attributes: any = splide.root.attributes
  EVENTS.forEach( ( [ event, name ] ) => {
    // Typically:  event=moved   name=onMoved
    const attr = attributes[name]
    if (attr) {
      const value:string = attr.nodeValue
      const handler = Function('return ' + value)
      // Typically, handler is now:
      // function handler() { return (splide, index, prev, dest) => { console.log("splide:", splide); } }
      splide.on(event, (...args: any[]) => handler()(splide, ...args ));
    }
  } );

  return splide
}

export function initSplideExtension(extension: any) {
  // define custom element to get splide options
  class AstroSplideExtension extends HTMLElement {
    connectedCallback() {
      const splide = splideConnectedCallback(this.dataset.splideid, this.dataset.options)
      splide.mount(extension);
    }
  }

  customElements.define("astro-splide-extension", AstroSplideExtension);
}

export function initSplide() {
  // define custom element to get splide options
  class AstroSplide extends HTMLElement {
    connectedCallback() {
      const splide = splideConnectedCallback(this.dataset.splideid, this.dataset.options)
      splide.mount();
    }
  }

  customElements.define("astro-splide", AstroSplide);
}
