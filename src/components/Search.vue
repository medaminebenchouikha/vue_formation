<template>
    <div>
        <input type="text" v-model="username" >
        <button @click="onSearch" v-if="username != ''">Rechercher</button>
    </div>
    <!-- <div v-else-if="username == 'Med'"> Test</div>
    <div v-else>Plus de bouton</div> -->
    <ul>
        <!-- <li v-for="name in firstNames" :key="name">
            {{  name  }}
        </li> -->
        <!-- <li v-for="(val, key) in myObj" :key="name">
            {{  key }} - {{  val  }}
        </li> -->
        <li v-for="(name, index) in firstNames" :key="name">
            {{  index }} - {{  name  }}
        </li>
    </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue';

export default {
    // props: ['name'],
    props: {
        name: {
            type: String as PropType<string>,
            required: true
        }
    },
    emits: ['on-search'],
    data() {
        return {
            username: this.name,
            firstNames: ['ana', 'Djin', 'Naroto', 'Luffy']
        }
    },
    methods: {
        onSearch() {
            this.$emit('on-search', this.username)
        }
    },
    watch: {
        name(newVal: string) {
            this.username = newVal;
        }
    }
}
</script>