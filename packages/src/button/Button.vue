<template>
    <button 
        :class="[
            ns.b(),
            ns.m(size),
            ns.m(type),
            ns.is('disabled',disabled),
        ]"
        :disabled="disabled"
        :aria-disabled="disabled"
    >
        <slot v-if="$slots.default">

        </slot>
    </button>

</template>

<script lang="ts">
    export default {
        name: 'SimButton'
    }
</script>

<script lang="ts" setup>
import props from './props';
import {useNamespace} from "../../utils/namespace";

defineProps(props)
const ns = useNamespace('button')
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>