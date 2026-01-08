//export default defineNuxtPlugin({
//    name: 'content-extend-pages',
//    enforce: 'post',
//    setup(nuxtApp) {
//        const router = useRouter()

//        router.addRoute({
//            name: 'go-to-mw___ru',
//            path: '/go-to-mw',
//            component: () => import('/pages/go-to-[slug].vue').then((m) => m?.default)
//        })

//        //console.log(
//        //    await Promise.all(
//        //        router
//        //            .getRoutes()
//        //            .filter((r) => r.path.includes('go'))
//        //            .map((r) => r.components.default())
//        //    )
//        //)
//    },
//    hooks: {
//        'app:created'() {
//            //await navigateTo('/go-to-mw')
//            //await navigateTo('/')
//            //  const nuxtApp = useNuxtApp()
//            //const router = useRouter()
//            //router.addRoute({ name: 'go-to-mw', path: '/go-to-mw' })
//            //router.addRoute({ name: 'go-to-mw', path: '/go-to-mw' }) //, component: () => import('/pages/go-to-[slug].vue')
//            //console.log(router.hasRoute('go-to-mw'))
//            //console.log(router.resolve({ name: 'go-to-mw' }))
//            //router.push({ path: '/go-to-mw' })
//        }
//    }
//})

export default defineNuxtPlugin((nuxtApp) => {
    //if (false) {
    //    navigateTo('/go-to-mw')
    //}
})
