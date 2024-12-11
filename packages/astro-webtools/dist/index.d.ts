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
