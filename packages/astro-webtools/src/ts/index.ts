// Copyright (c) Pascal Brand
// MIT License

import 'astro/astro-jsx'      // import astroHTML namespace

export namespace webtools {
  const now = new Date()
  const _digits2 = (number: number) => number < 10 ? '0' + number : '' + number

  export const CONSTANTS = {
    SECOND: _digits2(now.getSeconds()),
    MINUTE: _digits2(now.getMinutes()),
    HOUR: _digits2(now.getHours()),
    YEAR: now.getFullYear(),
    MONTH: _digits2(now.getMonth()+1),
    DAY: _digits2(now.getDate()),
  }

  // Create css vars from props
  // PropsToVars is a type, where the value is the correspondance between an astro private prop
  // (typically 'colorR'), and a css variables (typically --wt-neon-R))
  //
  // createVarStyle() creates the style (var(--) added) corresponding to an array of propstovars.
  // typically, propsToVars will be:
  //    const propsToVars: webtoolsPropsToVarsT = [
  //      { var: '--wt-neon-R',      prop: "colorR"},
  //      { var: '--wt-neon-rotate', prop: "rotate"},
  //    ]
  // Note that createVarStyle() removes the found props from 'props' by side-effect

  export type PropsToVars = {var: string, prop:string}[]
  export function createVarStyle(styleProps:string | astroHTML.JSX.CSSProperties | null, props:any, propsToVars:PropsToVars) {
    let style = styleProps;
    propsToVars.forEach((propToVar:any) => {
      if (props[propToVar.prop]) {
        style += `${propToVar.var}:${props[propToVar.prop]};`   // add css variable in style
        delete props[propToVar.prop]                            // rm this prop from all the astro props, so that we do not beg
      }
    })
    return style
  }
}
