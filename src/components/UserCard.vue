<template>
    <article>
        <slot name="title"></slot>
        <slot></slot>
        <div>
            <label>Activier</label>
            <input type="checkbox" v-model="isActive">
        </div>
        <header>
            <h3>{{ user.name }}</h3>
        </header>
        <div>
            <strong>{{ user.username }}</strong>
            <br>
            {{ user.email }}
            <br>
            {{ user.phone }}
            <hr>
            <small>
                {{ user.address?.street }} {{ user.address?.suite }} 
                <br> {{ user.address?.zipcode }} {{ user.address?.city }} 
            </small>
        </div>
            
        <footer  class="pico-color-zinc-850">
            <slot name="footer" :active="isActive" v-bind="user"></slot>
            <small><a href="#">{{ user.website }}</a></small><br>
            <cite> {{ user.company?.name }}</cite>
        </footer>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { IUser } from '../interfaces/User';

const isActive = ref<boolean>(false);

defineProps<{
    user : IUser;
}>();
</script>