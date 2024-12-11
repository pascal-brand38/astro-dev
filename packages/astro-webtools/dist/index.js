// Copyright (c) Pascal Brand
// MIT License
import 'astro/astro-jsx'; // import astroHTML namespace
export var webtools;
(function (webtools) {
    const now = new Date();
    const _digits2 = (number) => number < 10 ? '0' + number : '' + number;
    webtools.CONSTANTS = {
        SECOND: _digits2(now.getSeconds()),
        MINUTE: _digits2(now.getMinutes()),
        HOUR: _digits2(now.getHours()),
        YEAR: now.getFullYear(),
        MONTH: _digits2(now.getMonth() + 1),
        DAY: _digits2(now.getDate()),
    };
    function createVarStyle(styleProps, props, propsToVars) {
        let style = styleProps;
        propsToVars.forEach((propToVar) => {
            if (props[propToVar.prop]) {
                style += `${propToVar.var}:${props[propToVar.prop]};`; // add css variable in style
                delete props[propToVar.prop]; // rm this prop from all the astro props, so that we do not beg
            }
        });
        return style;
    }
    webtools.createVarStyle = createVarStyle;
})(webtools || (webtools = {}));

// Copyright (c) Pascal Brand
// MIT License

export { default as Neon }  from './components/neon/Neon.astro';
export { default as Polaroid }  from './components/polaroid/Polaroid.astro';
export { default as Postit }  from './components/postit/Postit.astro';
export { default as Garland }  from './components/garland/Garland.astro';
