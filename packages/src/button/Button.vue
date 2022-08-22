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
        @click="handleClick"
    >
        <span v-if="$slots.default">
            <slot>

        </slot>
        </span>
        
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


const emit = defineEmits(['click'])

const handleClick = (e:MouseEvent) => {
    emit('click', e)
}

</script>

