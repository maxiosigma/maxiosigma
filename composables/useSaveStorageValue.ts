export default function (index: Ref = ref(0), name: String = `${Math.random()}`, other = null) {
    const storage = useLocalStorage(`${name}`, index.value)

    watch(
        () => index.value,
        () => {
            storage.value = other ? index.value ?? other : index.value
        }
    )

    return storage
}
