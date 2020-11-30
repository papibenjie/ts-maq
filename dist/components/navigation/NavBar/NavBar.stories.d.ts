declare const _default: {
    title: string;
    argTypes: {
        backgroundColor: {
            control: string;
        };
        justifyContent: {
            control: string;
        };
        height: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
        };
    };
};
export default _default;
export declare const NavBarExample: (args: any) => JSX.Element;
