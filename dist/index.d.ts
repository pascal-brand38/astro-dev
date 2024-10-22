import type { AstroIntegration } from 'astro';
interface srcType {
    dir: string;
    dirDev: string;
    extension: string;
}
interface dstType {
    spriteFile: string;
    spriteFileDev: string;
    cssMainClass: string;
    cssFile: string;
    cssFileDev: string;
    cssPrefix: string;
    cssSelector: string;
}
export interface spriteConfigType {
    src: srcType;
    dst: dstType;
}
type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
declare function astroSprite(config: RecursivePartial<spriteConfigType>): AstroIntegration;
export default astroSprite;
