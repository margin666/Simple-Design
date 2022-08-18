<template>
    <div ref="tabs" @click="handleClick" :class="[
        ns.b(),
        ns.m(size)
    ]">
        <slot :size="size"></slot>
        <div :class="[
            ns.em('zz', size),
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
import { Tabs} from '../events/events';
import { useNamespace } from '../../utils/namespace';
import props from './props'
import { onBeforeMount, onMounted, ref, useSlots,nextTick, provide } from 'vue'

const prop = defineProps(props)
const ns = useNamespace('tabs')
const tabs = ref<HTMLDivElement>()

const pLeft = ref<Number>(0)
const pWidth = ref<Number>(0)

const a = new Tabs()
provide<Tabs>('tabs',a )




const emit = defineEmits(['on-click'])
onBeforeMount(() => {
        a.setSize(prop.size)
    
})
const _size = {
    small: [16, 8],
    default: [18, 10],
    large: []
}
nextTick(() => {
    let el: HTMLElement | null = null
    for (let item of a.tabs) {
        if (item[1].name === prop.active) {
            el = item[0]
            break
        }
    }
    if (el) {
        pWidth.value = el.clientWidth + _size[prop.size][0]
        pLeft.value = el.offsetLeft - _size[prop.size][1]
    }
})


const handleClick = (e: MouseEvent) => {
    const target = e.target! as HTMLElement
    if (target === tabs.value) return
    const res = a.tabs.get(target)
    pWidth.value = target.clientWidth + _size[prop.size][0]
    pLeft.value = target.offsetLeft - _size[prop.size][1]
    emit('on-click', res?.name, res?.label, target)
}


</script>