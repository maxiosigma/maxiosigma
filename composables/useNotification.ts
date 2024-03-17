import { useTitle } from '@vueuse/core'

//    position = 'top-center',

export default ({
    name = Math.random().toString(),
    afterCallback = () => {},
    preCallback = () => {},
    visible = ref(false),
    summary = undefined,
    detail = undefined,
    life = undefined
}) => {
    const nameToast = ref(`notification-${name.toLowerCase()}`)
    const saveToast = useLocalStorage(nameToast.value, {})
    const now = useNow({ interval: 0 })
    const pageTitle = useTitle()
    const toast = useToast()
    const route = useRoute()

    onMounted(() => {
        preCallback()

        if (visible.value === true) {
            toast.add({ summary, detail, life })
            saveToast.value = { date: now, page: pageTitle, url: route.path, title: summary, body: detail }
        } else {
            toast.remove({ life: 3000 })
        }

        afterCallback()
    })

    return { nameToast, saveToast, pageTitle, now }
}
