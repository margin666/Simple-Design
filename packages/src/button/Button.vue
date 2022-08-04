<template>
    <button :class="[
        ns.b(),
        ns.m(size),
        ns.m(type),
        ns.is('text', text),
        ns.is('round', round),
    ]">
        <slot></slot>
    </button>
</template>


<script lang="ts">
export default {
    name: 'SimButton'
}
</script>
<script lang="ts" setup>
import { createNamespace, useNamespace } from '../../utils/namespace'
import { defineProps } from 'vue'
defineProps({
    size: {
        type: String,
        default: 'default',
        required: false,
    },
    type: {
        type: String,
        default: '',
        required: false
    },
    text: {
        type: Boolean,
        default: false,
        required: false
    },
    round: {
        type: Boolean,
        default: false,
        required: false
    },
})


const { n, classes } = createNamespace('button')
const ns = useNamespace('button')


</script>

<style lang="scss">
@import './button.scss';
</style>