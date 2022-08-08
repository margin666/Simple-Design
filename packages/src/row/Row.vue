<template>
    <div
        :class="[
            n.b()
        ]"
    >
    <slot></slot>
    </div>
</template>
<script lang="ts">
export default {
    name: 'SimRow'
}
</script>
<script lang="ts" setup>
import props from './props'
import {useNamespace} from '../../utils/namespace'

defineProps(props)

const n = useNamespace('row')

</script>

<style lang="scss">
@import './index.scss'
</style>