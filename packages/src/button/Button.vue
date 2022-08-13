<template>
    <button 
        :class="[
            ns.b(),
            ns.m(_size),
            ns.m(_type),
            ns.is('disabled',disabled),
        ]"
        :disabled="disabled"
        :aria-disabled="disabled"
    >
        <slot v-if="$slots.default">

        </slot>
    </button>
    

</template>

<script lang="ts">
    export default {
        name: 'SimButton'
    }

</script>

<script lang="ts" setup>
import props from './props';
import {useNamespace} from "../../utils/namespace";
import {inject, computed} from 'vue'
const ButtonGroupPrors = inject<{type: string, size: string} | undefined>('ButtonGroupPrors', void 0)
const prop = defineProps(props)
const ns = useNamespace('button')
const _type = computed(() => prop.type || ButtonGroupPrors?.type || '')
const _size = computed(() => prop.size || ButtonGroupPrors?.size || 'default')

</script>

