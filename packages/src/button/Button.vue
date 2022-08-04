<template>
    <button
        :class="classes(
            
        )"
        >
        <slot></slot>
    </button>
</template>


<script lang="ts">
export default {
    name: 'SimButton'
}
</script>
<script lang="ts" setup>
import {createNamespace} from '../../utils/namespace'
import { defineProps } from 'vue'
defineProps({
    size: {
        type: String,
        default: 'small',
        required: false
    }
})


const {n, classes} = createNamespace('btn')

</script>

<style lang="scss">
@import './button.scss';
</style>