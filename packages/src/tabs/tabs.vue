<template>
    <div ref="tabs" @click="handleClick" :class="[
        ns.b(),
        ns.m(size)
    ]">
        <slot></slot>
        <div :class="[
            ns.e('zz'),
        ]" :style="{width:pWidth + 'px', left: pLeft + 'px'}">&nbsp;</div>
            <!-- <p>{{pro.nam}}</p>
            <slot v-if="$slots.default"></slot> -->

    </div>
</template>

<script lang="ts">
export default {

    name: 'SimTabs'
}
</script>

<script lang="ts" setup>
import SEvent from '../events/events';
import { useNamespace } from '../../utils/namespace';
import props from './props'
import { ref, useSlots} from 'vue'
defineProps(props)
const ns = useNamespace('tabs')
const tabs = ref<HTMLDivElement>()
// const pWidth = computed(() => {
//     return (tabs.value?.querySelectorAll('div')[0].offsetWidth || 0) + 30 + 'px'
// })
// const pLeft = computed(() => {
//     // console.log(tabs.value?.querySelectorAll('div')[0].offsetWidth)// 32 32 16 16
//     return (tabs.value?.querySelectorAll('div')[0].offsetWidth || 0) + 96 + 'px'
// })
const pLeft = ref<Number>(0)
const pWidth = ref<Number>(0)
const instance = SEvent.getInstance()
const emit = defineEmits(['tab-click'])


const slot = useSlots()
const handleClick = (e:MouseEvent) => {
    if(slot.default){
         console.log(slot.default())
    }
    // const target = e.target as HTMLElement
    // if(target === tabs.value)return
    // const data = instance.getData()
    // pWidth.value = target.clientWidth + 32
    // // console.log(getWidth(target))
    // pLeft.value = target.offsetLeft - 16
    // emit('tab-click', ...data, e)
}


</script>