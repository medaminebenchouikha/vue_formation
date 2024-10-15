<template>
    <h1 ref="elTitle">{{ title }}</h1>
    <Draw></Draw>
    <Search :name="myName" @on-search="listenSearch"/>
    <!-- <Search :name="myName" @on-search="listenSearch($event)"/> -->
    <button @click="changeName()">Changer le nom</button>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import Search from './Search.vue';
import Draw from './Draw.vue';

let title = ref('My App');
const myName = ref('Med');
const h1 = useTemplateRef('elTitle');

console.log(h1.value);

const changeName = () => {
    myName.value = 'Nouveau titre';
    console.log('test');
 }

const listenSearch = (username: string) => {
    console.log(username);
}
</script>

<!-- <script lang="ts">
export default {
    setup() { 
        const title = 'My App';
        const changeName = () => {
            console.log('test');
        }

        return {
            title,
            changeName
        }
    }
}
</script> -->