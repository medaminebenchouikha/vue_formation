import type { IUser } from "@/interfaces/User";
import { computed, ref, type Ref } from "vue";

export function useExtensionFilter (users: Ref<IUser[]>) {
    const extSelected = ref<string>('');
    const usersFiltred = computed(() => {
        if(!extSelected.value) {
            return users.value
        }
    
        return users.value.filter( user => 
            user.name.toLowerCase().includes(extSelected.value.toLowerCase()) ||
            user.email.toLowerCase().endsWith(extSelected.value.toLowerCase())
        )
    })

    return { extSelected, usersFiltred }
}