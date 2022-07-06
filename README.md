# vue3-polkadot-vue-identicon

@polkadot/vue-identicon compatible with vue3, A generic identity icon that can render icons based on an address.

## Usage Examples

To install the component, do `yarn add vue3-polkadot-vue-identicon` and then use it with `import Identicon from 'vue3-polkadot-vue-identicon';`

Inside a Vue component, you can now render any account with the associated icon, with associated props -

- `value` - the address you wish to display
- `size` (optional, defaults to `64`) - the size in pixels
- `theme` (optional, defaults to `substrate`) - the theme to use, one of
  - `polkadot` or
  - `substrate` (equivalent to `jdenticon`) or
  - `beachball` or
  - `empty` (displays nothing)

```
<template>
  <Identicon
    :size="128"
    :theme="'polkadot'"
    :value="'5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'"
  />
</template>

<script>
  import Identicon from 'vue3-polkadot-vue-identicon';

  export default {
    ...
    components: { Identicon }
    ...
  };
</script>
```
