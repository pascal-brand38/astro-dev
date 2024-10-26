import type { AstroIntegration } from 'astro';
interface srcType {
    dir: string;
    extension: string;
}
interface dstType {
    spriteFile: string;
    cssMainClass: string;
    cssFile: string;
    cssPrefix: string;
    cssSelector: string;
    preloadFile: string | undefined;
}
export interface spriteConfigType {
    src: srcType;
    dst: dstType;
}
type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
declare function sprite(config?: RecursivePartial<spriteConfigType>): AstroIntegration;
export default sprite;
