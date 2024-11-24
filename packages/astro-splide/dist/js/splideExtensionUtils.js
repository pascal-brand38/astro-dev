// Copyright (c) Pascal Brand
// MIT License
import { EVENTS } from "./constants/events.js";
import Splide from "@splidejs/splide";
export function splideConnectedCallback(splideId, options) {
    // Read the options from the data attribute of astro-splide.
    const id = splideId || '';
    const opt = JSON.parse(options || '');
    let splide = new Splide('#' + id, opt);
    const attributes = splide.root.attributes;
    EVENTS.forEach(([event, name]) => {
        // Typically:  event=moved   name=onMoved
        const attr = attributes[name];
        if (attr) {
            const value = attr.nodeValue;
            const handler = Function('return ' + value);
            // Typically, handler is now:
            // function handler() { return (splide, index, prev, dest) => { console.log("splide:", splide); } }
            splide.on(event, (...args) => handler()(splide, ...args));
        }
    });
    return splide;
}
