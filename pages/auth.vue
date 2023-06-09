<template>
    <LayoutDefault>
        <div class="m-auto flex-center flex-col">
            <div class="flex-center flex-col" :class="{ '!hidden': user }">
                <!-- login('google') -->
                <button class="btn" @click="auth.signInWithOAuth({ provider: 'github' })">Login with github</button>
                <button class="btn" @click="auth.signInWithOAuth({ provider: 'gitlab' })">Login with gitlab</button>
                <button class="btn" @click="auth.signInWithOAuth({ provider: 'slack' })">Login with slack</button>
                <button class="btn" @click="auth.signInWithOAuth({ provider: 'apple' })">Login with apple</button>
                <button class="btn" @click="auth.signInWithOAuth({ provider: 'zoom' })">Login with zoom</button>

                <form class="row flex-center flex bg-self-7" @submit.prevent="handleLogin">
                    <div class="col-6 form-widget">
                        <h1 class="header">Supabase + Nuxt 3</h1>
                        <p class="description">Sign in via magic link with your email below</p>
                        <div>
                            <input class="inputField" type="email" placeholder="Your email" v-model="email" />
                        </div>
                        <div>
                            <input
                                type="submit"
                                class="button block"
                                :value="loading ? 'Loading' : 'Send magic link'"
                                :disabled="loading"
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div class="flex-center flex-col" :class="{ '!hidden': !user }">
                <div class="text-self-7 mb-2">Вы авторизованы</div>
                <div class="text-self-7">{{ data.email }}</div>
                <!--<div class="text-self-7">{{ data.name }}</div>-->
                <!--<div class="text-self-7">(@{{ data.user_name }})</div>-->
                <button class="btn mt-4" @click="auth.signOut()">Выйти из аккаунта</button>
            </div>
        </div>
    </LayoutDefault>
</template>

<script setup>
const user = useSupabaseUser()
const { auth } = useSupabaseAuthClient()

const meta = user.value?.user_metadata

//console.log(user.value)

const data = {
    //name: meta?.name,
    email: user.value?.email,
    //user_name: meta?.user_name,
}

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
    try {
        loading.value = true
        const { error } = await auth.signInWithOtp({ email: email.value })
        if (error) throw error
        alert('Check your email for the login link!')
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
    }
}
</script>

<style lang="scss" scoped>
.btn {
    @apply bg-white px-4 py-2;
}
</style>
