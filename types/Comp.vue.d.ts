declare const _default: import("vue").DefineComponent<{
    max: {
        type: NumberConstructor;
        default: number;
    };
    count: {
        type: import("vue").PropType<number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:count": (count: number) => void;
    "on-add": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    max: {
        type: NumberConstructor;
        default: number;
    };
    count: {
        type: import("vue").PropType<number>;
    };
}>> & {
    "onOn-add"?: ((...args: any[]) => any) | undefined;
    "onUpdate:count"?: ((count: number) => any) | undefined;
}, {
    max: number;
}, {}>;
export default _default;

//# sourceMappingURL=Comp.vue.d.ts.map