import { ref, watchEffect, type DefineProps, type Ref } from "vue";

type Props = DefineProps<{
    name: string
}, never>;

type Emits = (event: 'on-search', name: string) => void

type SearchFnReturn = {
    username: Ref<string>,
    firstNames: Ref<string[]>,
    onSearch: () => void
}

export function useSearch(props: Props, emits: Emits) : SearchFnReturn{
    const firstNames = ref(['ana', 'Djin', 'Naroto', 'Luffy'])
    // const firstNames = reactive(['ana', 'Djin', 'Naroto', 'Luffy'])
    // console.log(firstNames); // sans .value
    const username = ref(props.name);
    // console.log(props);

    const onSearch = () => {
        emits('on-search', username.value);
    }

    // watch(() => props.name, (newValue) => {
    //     username.value = newValue
    // })

    watchEffect(() => {
        username.value = props.name
    })

    return {
        username,
        firstNames,
        onSearch
    }
}