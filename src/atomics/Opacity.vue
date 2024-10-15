<template>
    <!-- <input type="range" min="0" max="1" step="0.01" :value="opacityValue" @input="updateOpacity"> -->

    <input type="range" min="0" max="1" step="0.01" v-model="opacityValue" @input="emits('on-change', opacityValue)">
   
    <div :style="{width: '50px', height: '50px', backgroundColor: color, opacity: opacityValue}"></div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps<{
    opacity : number;
    color : string;
}>();

const emits = defineEmits<{
    'on-change': [number]
}>();

const opacityValue = ref<number>(props.opacity);

watchEffect(() => {
    opacityValue.value = props.opacity;
})

// const updateOpacity = (event: Event) => {
//     const newValue = parseFloat((event.target as HTMLInputElement).value);
//     opacityValue.value = newValue;
//     emits('on-change', newValue);
// }
</script>
<style>
.preview {
    width: 100px;
    height: 100px;
}
</style>