<template>
    <h1 ref="elTitle">{{ title }}</h1>
    <!-- <Search :name="myName" @on-search="listenSearch"/> -->
    <!-- <Search :name="myName" @on-search="listenSearch($event)"/> -->
    <!-- <button @click="changeName()">Changer le nom</button> -->

    <nav>
        <ul>
            <li><strong>Acme Corp</strong></li>
        </ul>
        <ul>
            <li><router-link to="/">Home</router-link> </li>
            <li><router-link to="/users">Users</router-link></li>
            <li>
                <!-- <router-link to="/login">Login</router-link> -->
                <!-- <router-link :to ="{ name: 'login'}" custom v-slot="router"> -->
                <router-link to ="/login" custom v-slot="router">
                    <button @click="router.navigate">Se connecter</button>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import Search from './Search.vue';

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