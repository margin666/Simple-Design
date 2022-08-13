<template>
    <div ref="tabs" :class="[
        ns.b(),
        ns.m(size)
    ]">
        <!-- <div :class="[
            ns.e('zz'),
            ns.em('zz', size)
        ]" :style="{ width: pWidth, left: pLeft }"></div> -->

        <slot bs="2"></slot>
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
import { useNamespace } from '../../utils/namespace';
import props from './props'
import { ref, nextTick, computed } from 'vue'
defineProps(props)
const ns = useNamespace('tabs')
const tabs = ref<HTMLDivElement>()
const pWidth = computed(() => {
    return (tabs.value?.querySelectorAll('span')[1].offsetWidth || 0) + 30 + 'px'
})
const pLeft = computed(() => {
    // console.log(tabs.value?.querySelectorAll('span')[0].offsetWidth)// 32 32 16 16
    return (tabs.value?.querySelectorAll('span')[0].offsetWidth || 0) + 96 + 'px'
})
nextTick(() => {
    // console.log(tabs.value?.querySelectorAll('span')[1].offsetWidth)
})
const emit = defineEmits(['table-click'])


const handleClick = (e: MouseEvent) => {
    
    emit('table-click')
    // if(slots === undefined)return
    // const vnodes = slots()
    // const target = e.target as HTMLElement
    // const m = vnodes.find(vnode => {
    //     if('label' in vnode.props!){
    //         return vnode.props.label === target.innerText
    //     }else{
    //         const children = vnode.children!
    //         const text = children.default()[0].children
    //         return text === target.innerText
    //     }
    // })

    // // console.log(slots()[2].children.default())
    // emit('click', m!.props!.name ?? 0 , 2)
}
</script>