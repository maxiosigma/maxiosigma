export default () => {
    const notifications: any = ref([])

    onMounted(() => {
        try {
            notifications.value = Object.entries(localStorage)
                ?.filter(([key]) => key.includes('notification'))
                ?.map(([key, val]) => ({ key, value: JSON.parse(val || '{}') }))
        } catch (error) {
            console.log(error)
        }
    })

    return notifications
}
