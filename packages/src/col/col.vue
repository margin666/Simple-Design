<template>
    <div
        :class="[
            n.b()
        ]"
        :style="{flexGrow: span}"
    >
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'SimCol'
}
</script>
<script lang="ts" setup>
import {useNamespace} from '../../utils/namespace'
import props from './props'
// import {computed} from 'vue'
const prop = defineProps(props)
// const span = computed(() => {
//     prop
// })
const n = useNamespace('col')
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>