<template>
    <div @click="handleClick" :class="[
        ns.b(),
    ]">
        <slot v-if="$slots.default"></slot>
        
    </div>
</template>

<script lang="ts">
export default {

    name: 'SimTab'
}
</script>

<script lang="ts" setup>
import { useNamespace } from '../../utils/namespace';
import SEvent from '../events/events';
import {useSlots} from 'vue'
import props from './props'
const prop = defineProps(props)
const ns = useNamespace('tab')

const instance = SEvent.getInstance()


const slot = useSlots()


const handleClick = () => {
    // console.
    
    instance.setData(prop.name)
    
}





</script>