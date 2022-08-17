<template>
    <div ref="tabs" @click="handleClick" :class="[
        ns.b(),
        ns.m(size)
    ]">
        <slot></slot>
        <div :class="[
            ns.e('zz'),
        ]" :style="{ width: pWidth + 'px', left: pLeft + 'px' }">&nbsp;</div>
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
import { onMounted, ref, useSlots } from 'vue'
import { computed } from '@vue/reactivity';
const prop = defineProps(props)
const ns = useNamespace('tabs')
const tabs = ref<HTMLDivElement>()

const pLeft = ref<Number>(0)
const pWidth = ref<Number>(0)
const instance = SEvent.getInstance()


onMounted(() => {
    instance.add(prop.event, prop.active)

    const target = instance.getel()
    // console.log(target)
    // pWidth.value = target!.clientWidth + 32
    // pLeft.value = target!.offsetLeft - 16


})

const slot = useSlots()
const handleClick = (e: MouseEvent) => {
    if (e.target === tabs.value) return
    const target = instance.getel()
    pWidth.value = target!.clientWidth + 32
    pLeft.value = target!.offsetLeft - 16
}


</script>