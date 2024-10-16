import type { UserService } from "@/UserService";
import type { IUser } from "@/interfaces/User"
import { inject, ref, type Ref } from "vue"

type FetchUsersReturn = {
    loading: Ref<boolean>,
    getAll: () => Promise<IUser[]>   
}

export function useFetchUsers() : FetchUsersReturn {
    const userService = inject<UserService>('userService') as UserService;
    const loading = ref<boolean>(false);
    // setTimeout(async () => {
    //     users.value = await userService.getAll();
    //     loading.value = false;
    // }, 1000);

    async function getAll() {
        try {
            loading.value = true;
            const users = await userService.getAll();
            return users
        }
        catch(err) {
            throw err
        }
        finally {
            loading.value = false;
        }
    }

    return {
        loading,
        getAll
    }
}