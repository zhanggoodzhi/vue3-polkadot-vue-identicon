import Vue from 'vue';
interface Data {
    address: string;
    iconSize: number;
    isAlternative: boolean;
    publicKey: string;
    type: 'beachball' | 'empty' | 'jdenticon' | 'polkadot' | 'substrate';
}
/**
 * @name Identicon
 * @description The main Identicon component, taking a number of properties
 * @example
 * ```html
 * <Identicon :size="128" :theme="polkadot" :value="..." />
 * ```
 */
export declare const Identicon: import("vue/types/vue").ExtendedVue<Vue, Data, {
    createData: () => void;
    recodeAddress: () => void;
}, unknown, Record<"size" | "isAlternative" | "prefix" | "theme" | "value", any>>;
export {};
