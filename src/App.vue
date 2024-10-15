<template>
    <Navbar/>
    <Opacity :opacity="opacity" color="black" @on-change="changeOpacity"/>
    <Users/>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Opacity from "./atomics/Opacity.vue";
import Navbar from "./components/Navbar.vue";
import Users from "./components/Users.vue";

const opacity = ref<number>(0.3);

const changeOpacity = (newOpacity: number) => {
    opacity.value = newOpacity;
}
</script>

<style>

</style>