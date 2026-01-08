import config, { defineConfig } from '../../global-libs-ts/app/frameworks/nuxt/global/uno.config'
export default {
    ...config,
    shortcuts: [
        ...(config.shortcuts as any[])
        //['', '']
    ]
    //theme: {
    //    //colors: {
    //    //    ...config
    //    //}
    //}
} as typeof config
