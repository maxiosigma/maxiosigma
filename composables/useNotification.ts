import { useTitle } from '@vueuse/core'

export default ({
    name = Math.random().toString(),
    afterCallback = () => {},
    preCallback = () => {},
    visible = ref(false),
    summary = undefined,
    detail = undefined,
    life = undefined || 0,
    infinity = false
}) => {
    const nameToast = ref(`notification-${name.toLowerCase()}`)
    const saveToast = useLocalStorage(nameToast.value, {})
    const now = useNow({ interval: 0 })
    const pageTitle = useTitle()
    const toast = useToast()
    const route = useRoute()

    onMounted(() => {
        preCallback()

        if (!saveToast.value?.date || infinity)
            if (visible.value === true) {
                life !== undefined ? (life >= 20000 ? (life = 20000) : null) : null
                toast.add({ summary, detail, life })
                saveToast.value = { date: now, page: pageTitle, url: route.path, title: summary, body: detail }
            } else {
                toast.remove({ life: 3000 })
            }

        afterCallback()
    })

    return { nameToast, saveToast, pageTitle, now }
}
