<template>
    <div v-if="loading">
        <article aria-busy="true"></article>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    loading : boolean;
}>();
</script>