<template>
    <LayoutPage :title="title">
        <div class="flex flex-wrap container gap-10 self-center justify-center py-10">
            <div
                class="grid grid-cols-2 p-5 border-4 border-self-4"
                v-for="(notification, ni) in notifications"
                :key="ni"
            >
                <div>Key:</div>
                <div>{{ notification?.key }}</div>

                <div>Path:</div>
                <div>{{ notification.value?.url }}</div>

                <div>Date:</div>
                <div>{{ notification.value?.date }}</div>

                <div>Page:</div>
                <div>{{ notification.value?.page }}</div>

                <div>Body:</div>
                <div>{{ notification.value?.body }}</div>
            </div>
        </div>
    </LayoutPage>
</template>

<script setup>
const title = ref('Уведомления')
const notifications = useGetNotifications()
</script>

<style lang="scss"></style>
