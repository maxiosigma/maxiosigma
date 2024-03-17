<template>
    <LayoutPage :title="title">
        <div class="flex flex-wrap container gap-10 self-center justify-center py-10">
            <div class="p-5 border-4 border-self-4" v-for="(notification, ni) in notifications" :key="ni">
                <div>{{ notification?.key }}</div>
                <div>Date: {{ notification.value?.date }}</div>
                <div>Page: {{ notification.value?.page }}</div>
                <div>Body: {{ notification.value?.body }}</div>
            </div>
        </div>
    </LayoutPage>
</template>

<script setup>
const title = ref('Уведомления')
const notifications = ref([])
const visible = ref(false)

//console.log(useLocalStorage('*').value)

onMounted(() => {
    //setTimeout(() => (visible.value = false), 5000)

    try {
        notifications.value = Object.entries(localStorage)
            .filter(([key]) => key.includes('notification'))
            .map(([key, val]) => ({ key, value: JSON.parse(val || '{}') }))
    } catch (error) {
        console.log(error)
    }
})
</script>

<style lang="scss"></style>
