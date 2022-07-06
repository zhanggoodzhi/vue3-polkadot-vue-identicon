// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { isHex, isU8a, u8aToHex } from "@polkadot/util";
import { decodeAddress, encodeAddress } from "@polkadot/util-crypto";
import { Beachball, Empty, Jdenticon, Polkadot } from "./icons/index.js";
import { h } from "vue";
const DEFAULT_SIZE = 64;

function encodeAccount(value, prefix) {
    try {
        const address =
            isU8a(value) || isHex(value) ? encodeAddress(value, prefix) : value;
        const publicKey = u8aToHex(decodeAddress(address, false, prefix));
        return {
            address,
            publicKey,
        };
    } catch (error) {
        return {
            address: "",
            publicKey: "0x",
        };
    }
}
/**
 * @name Identicon
 * @description The main Identicon component, taking a number of properties
 * @example
 * ```html
 * <Identicon :size="128" :theme="polkadot" :value="..." />
 * ```
 */

export const Identicon = {
    components: {
        Beachball,
        Empty,
        Jdenticon,
        Polkadot,
    },
    created: function() {
        this.createData();
    },
    data: function() {
        return {
            address: "",
            iconSize: DEFAULT_SIZE,
            isAlternative: false,
            publicKey: "0x",
            type: "empty",
        };
    },
    methods: {
        createData: function() {
            this.iconSize = this.size || DEFAULT_SIZE;
            this.type = this.theme;
            this.recodeAddress();
        },
        recodeAddress: function() {
            const { address, publicKey } = encodeAccount(this.value);
            this.address = address;
            this.publicKey = publicKey;
        },
    },
    props: ["prefix", "isAlternative", "size", "theme", "value"],

    render() {
        const { address, iconSize, isAlternative, publicKey, type } = this.$data;
        if (type === "empty") {
            return h(
                Empty, {
                    key: address,
                    size: iconSize,
                }, []
            );
        } else if (type === "jdenticon") {
            return h(
                Jdenticon, {
                    key: address,
                    publicKey,
                    size: iconSize,
                }, []
            );
        } else if (type === "polkadot") {
            return h(
                Polkadot, {
                    address,
                    isAlternative,
                    key: address,
                    size: iconSize,
                }, []
            );
        } else {
            return h(
                Beachball, {
                    address,
                    isAlternative,
                    key: address,
                    size: iconSize,
                }, []
            );
        }
    },

    watch: {
        value: function() {
            this.recodeAddress();
        },
    },
};