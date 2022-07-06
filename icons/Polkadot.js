// Copyright 2017-2022 @polkadot/vue-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { polkadotIcon } from '@polkadot/ui-shared';
import { h } from "vue";
/**
 * @name Polkadot
 * @description The Polkadot default identicon
 */
export const Polkadot = {
    props: ['address', 'isAlternative', 'size'],

    // eslint-disable-next-line quotes
    render() {
        const {
            address,
            isAlternative,
            size
        } = this.$props;
        const circles = polkadotIcon(address, {
            isAlternative: isAlternative || false
        }).map(({
            cx,
            cy,
            fill,
            r
        }) => {
            return h('circle', {
                cx,
                cy,
                fill,
                r
            }, []);
        });
        return h('svg', {
            height: size,
            viewBox: '0 0 64 64',
            width: size
        }, circles);
    }

};