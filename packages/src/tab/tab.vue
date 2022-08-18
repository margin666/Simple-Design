<template>
    <div ref="tab" :class="[
        ns.b(),
        ns.m(m.size),
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
import {Tabs} from '../events/events'
import { onMounted, useSlots, ref, inject } from 'vue'
import props from './props'
const prop = defineProps(props)
const ns = useNamespace('tab')
const slot = useSlots()
const tab = ref<HTMLDivElement>()

const m = inject<Tabs>('tabs')!


onMounted(() => {
    m.add(tab.value!, {
        name: prop.name,
        label: prop.label
    })

})

</script>