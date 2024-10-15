<template>
    <canvas :ref="(el) => elCanvas.push(el)"></canvas>
    <canvas :ref="(el) => elCanvas.push(el)"></canvas>
    <!-- <canvas ref="elCanvas"></canvas> -->
    <button @click="drawRectangle">Dessiner rectangle</button>
</template>

<script setup lang="ts">
import { reactive, useTemplateRef } from 'vue';

const elCanvas = reactive<any[]>([]);

//const elCanvas = useTemplateRef('elCanvas');

const drawRectangle = () => {
    for (let el of elCanvas) {
            const context = el.getContext('2d');
            if (!context) return;
            context.fillStyle = 'blue'
            context.fillRect(0, 0, 100, 100);
        }
    }
    
</script>