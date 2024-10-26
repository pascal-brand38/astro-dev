import type { AstroIntegration } from 'astro';
export interface spriteConfigType {
    src: {
        dir: string;
        extension: string;
    };
    dst: {
        spriteFile: string;
        cssMainClass: string;
        cssFile: string;
        cssPrefix: string;
        cssSelector: string;
        preloadFile: string | undefined;
    };
}
type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
declare function sprite(config?: RecursivePartial<spriteConfigType>): AstroIntegration;
export default sprite;
