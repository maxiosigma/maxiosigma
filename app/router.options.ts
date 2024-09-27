import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    routes: (_routes) => {
        return _routes.filter(
            ({ path }) =>
                !path.includes('defi') &&
                (path === '/' ||
                    path === '/index' ||
                    path.includes('/ru') ||
                    path.includes('/ru-amp'))
        )
    },
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                top: 0
            }
        }
    }
}
