import config from '../../app/frameworks/nuxt/global/uno.config'
export default {
    ...config,
    shortcuts: [
        ...(config.shortcuts as any[])
        //['', '']
    ],
    theme: {
        colors: {
            ...config.theme.colors
        }
    }
} as typeof config
