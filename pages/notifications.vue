<template>
    <LayoutPage :title="title">
        <div class="flex flex-wrap container gap-10 self-center justify-center py-10">
            <div
                class="grid grid-cols-3 auto-cols-auto p-5 border-4 border-self-4"
                v-for="(notification, ni) in notifications"
                :key="ni"
            >
                <div>Key:</div>
                <div class="col-span-2">{{ notification?.key }}</div>

                <div>Path:</div>
                <div class="col-span-2">{{ notification.value?.url }}</div>

                <div>Date:</div>
                <div class="col-span-2">{{ notification.value?.date }}</div>

                <div>Page:</div>
                <div class="col-span-2">{{ notification.value?.page }}</div>

                <div>Body:</div>
                <div class="col-span-2">{{ notification.value?.body }}</div>
            </div>
        </div>
    </LayoutPage>
</template>

<script setup>
const title = ref('Уведомления')
const notifications = useGetNotifications()
</script>

<style lang="scss"></style>
