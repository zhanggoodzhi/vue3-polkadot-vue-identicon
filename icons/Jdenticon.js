// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
import * as jdenticon from 'jdenticon';
import { h } from "vue";
/**
 * @name Jdenticon
 * @description The substrate default via Jdenticon
 */
export const Jdenticon = {
    props: ['publicKey', 'size'],

    // eslint-disable-next-line quotes
    render() {
        const {
            publicKey,
            size
        } = this.$props;
        const cmp = Vue.component('CJdenticon', {
            template: jdenticon.toSvg(publicKey.substring(2), size)
        });
        return h(cmp);
    }

};