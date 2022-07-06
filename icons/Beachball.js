// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { beachballIcon } from '@polkadot/ui-shared';
import { h } from "vue";
/**
 * @name Beachball
 * @description The Beachball identicon
 */
export const Beachball = {
    props: ['address', 'size', 'isAlternative'],

    // eslint-disable-next-line quotes
    render() {
        const {
            address,
            isAlternative,
            size
        } = this.$props;
        const bb = beachballIcon(address, {
            isAlternative,
            size
        });
        return h(Vue.component('VCBeachball', {
            template: bb.outerHTML
        }));
    }

};