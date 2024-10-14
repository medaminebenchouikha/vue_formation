<template>
    <article>
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
                {{ user.address.street }} {{ user.address.suite }} 
                <br> {{ user.address.zipcode }} {{ user.address.city }} 
            </small>
        </div>
            
        <footer  class="pico-color-zinc-850">
            <small><a href="#">{{ user.website }}</a></small><br>
            <cite> {{ user.company.name }}</cite>
        </footer>
    </article>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import type { IUser } from '../interfaces/User';

    export default {
        props: {
            user: {
                type: Object as PropType<IUser>,
                required: true,
            }
        },
    }
</script>