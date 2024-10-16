<template>
    <h2>{{ userWord }}</h2>
    <main class="container">
        <Opacity :opacity="opacity" color="black" @on-change="changeOpacity"/>
        <Loader :loading>
            <select name="extensions" aria-label="extension..." v-model="extSelected">
                <option selected value="">
                    selectionnée votre extension...
                </option>
                <option v-for="ext in extensions" :key="ext">{{ext}}</option>
            </select>
            <div>
                <label for="">Enter user Id</label>
                <input type="number" v-model="indexUser">
                <button v-if="indexUser" @click="scrollToUser"> Scroll to User</button>
                <p v-if="errorMessage" :style="{color: 'red'}"> {{ errorMessage }}</p>
            </div>

            <!-- <div v-for="(user, index) in usersFiltred" :key="user.id" :ref="el => userRefs[index] = el as HTMLElement" -->
            <div v-for="(user, index) in usersFiltred" :key="user.id"        
             ref="userItems">
                <UserCard :user="user" @on-delete="deleteUser">
                    <template #title><h1>Titre</h1></template>
                    <template #default>Contenu par default</template>
                    <template #footer="{name, active}">
                        <p>l'utilisateur {{ name }} est 
                            <span :style="{ color: active ? 'green' : 'red', fontWeight: 'bold'}">{{ active }}</span></p>
                    </template>
                </UserCard>
            </div>
        </Loader>
    </main>
</template>
 
<script setup lang="ts">
import UserCard from './UserCard.vue';
import type { IUser } from '../interfaces/User';
import { computed, inject, onMounted, reactive, ref, useTemplateRef, type ShallowRef } from 'vue';
import Loader from '@/atomics/Loader.vue';
import Opacity from '@/atomics/Opacity.vue';
import { useExtensionFilter } from '@/composables/useExtensionFilter';
import { useFetchUsers } from '@/composables/useFetchUsers';
import type { UserService } from '@/UserService';

const extensions: string[] = ['tv', 'bis', 'io', 'me'];

const users = ref<IUser[]>([]);

const indexUser = ref<number>(0);
const userRefs = useTemplateRef<HTMLElement[]>('userItems');
const errorMessage = ref<string>('');
const scrollToUser = () => {
    const userElement = userRefs.value?.[indexUser.value - 1];
    if (!userElement) {
        errorMessage.value = 'user not found!'
        return
    }
    
    userElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
    errorMessage.value = "";
}

const {extSelected, usersFiltred} = useExtensionFilter(users);

const isUsersEmpty = computed(() => users.value.length == 0);
const userWord = computed(() => 'Utilisateur' + (isUsersEmpty.value ? '' : 's'))

const opacity = ref<number>(0.3);
const changeOpacity = (newOpacity: number) => {
    opacity.value = newOpacity;
}

const userService = inject<UserService>('userService') as UserService;
const deleteUser = async (userId: number) => {
    await userService.delete(userId);
    users.value = users.value.filter(user => user.id !== userId);
}

onMounted(async() => {
    users.value = await getAll()
})

const { loading, getAll} = useFetchUsers();
</script>