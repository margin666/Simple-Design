<template>
    <div ref="role" @click="handleClick" :class="[
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
import {ref} from 'vue'
import props from './props'
const prop = defineProps(props)
const ns = useNamespace('tab')
const role = ref<HTMLDivElement>()
const ret = () => {
    return prop
}

const handleClick = () => {
    console.log(role.value)
}

defineExpose({
    ret
})


</script>