import type { IUser } from "@/interfaces/User";
import { computed, ref, type ComputedRef, type Ref } from "vue";

type ExtensionFilter = {
    extSelected : Ref<string>,
    usersFiltred: ComputedRef<IUser[]>
}

export function useExtensionFilter (users: Ref<IUser[]>)  : ExtensionFilter{
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