import 'astro/astro-jsx';
export declare namespace webtools {
    const CONSTANTS: {
        SECOND: string;
        MINUTE: string;
        HOUR: string;
        YEAR: number;
        MONTH: string;
        DAY: string;
    };
    type PropsToVars = {
        var: string;
        prop: string;
    }[];
    function createVarStyle(styleProps: string | astroHTML.JSX.CSSProperties | null, props: any, propsToVars: PropsToVars): string | astroHTML.JSX.CSSProperties | null;
}

// Copyright (c) Pascal Brand
// MIT License

export { default as Neon }  from './components/neon/Neon.astro';
export { default as Polaroid }  from './components/polaroid/Polaroid.astro';
export { default as Postit }  from './components/postit/Postit.astro';
export { default as Garland }  from './components/garland/Garland.astro';
export { default as Nav }  from './components/nav/Nav.astro';
export { default as SvgText }  from './components/svgtext/SvgText.astro';
