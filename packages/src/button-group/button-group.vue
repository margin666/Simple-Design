<template>
    <div
        :class="[
            ns.b(),  
        ]"
    >
        <slot></slot>
    </div>

</template>

<script lang="ts">
export default {
    name: 'SimButtonGroup'
}
</script>
<script lang="ts" setup>
import props from './props';
import {useNamespace} from '../../utils/namespace';
import {provide, reactive} from 'vue';
const prop = defineProps(props)
provide('ButtonGroupPrors', reactive({
    size: prop.size,
    type: prop.type
}))
const ns = useNamespace('button-group')


</script>
