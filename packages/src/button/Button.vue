<template>
    <button :class="[
        ns.b(),
        ns.m(size),
        ns.m(type),
        ns.is('text', text),
        ns.is('round', round),
        ns.is('circle', circle),
        ns.is('disabled', disabled),
    ]" :aria-disabled="disabled" :disabled="disabled">
        <span v-if="$slots.default">
            <slot></slot>
        </span>

    </button>
</template>


<script lang="ts">
export default {
    name: 'SimButton'
}
</script>
<script lang="ts" setup>
import { useNamespace } from '../../utils/namespace'

// import { defineProps } from 'vue'
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
    circle: {
        type: Boolean,
        default: false,
        required: false,
    },
    disabled: {
        type: Boolean,
        default: false,
        required: false
    }
})


const ns = useNamespace('button')


</script>

<style lang="scss" scoped>
@import './button.scss';
</style>