export default defineNuxtPlugin((nuxtApp) => {
    //nuxtApp.hook('app:mounted', () => {})

    const router = useRouter()
    router.addRoute({ name: 'go-to-mw', path: '/go-to-mw' })
    console.log(router.getRoutes())
})
