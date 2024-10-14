<template>
    <h1>Navbar</h1>
    <Search :name="myName" @on-search="listenSearch"/>
    <!-- <Search :name="myName" @on-search="listenSearch($event)"/> -->
    <button @click="changeName">Changer le nom</button>
</template>

<script lang="ts">
import Search from './Search.vue';

export default {
    data() {
        return {
            myName : 'Med',
        }
    },
    methods: {
        listenSearch(username: string) {
            console.log(username);   
        },
        changeName() {
            this.myName = 'Djin';
        }
    },
    components: {
        Search
    }
}
</script>