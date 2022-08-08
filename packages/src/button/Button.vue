<template>
    <button :class="[
        ns.b(),
        ns.m(size),
        ns.m(type),
        ns.is('text', text),
        ns.is('round', round),
        ns.is('circle', circle),
        ns.is('disabled', disabled),
    ]" :aria-disabled="disabled" :disabled="disabled" @click="handleClick">
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

import { props } from './props'
defineProps(props)
const emit = defineEmits(['click'])

const ns = useNamespace('button')
const handleClick = (event:Event) => {
    emit('click', event)
}


</script>

<style lang="scss" scoped>
@import './button.scss';
</style>