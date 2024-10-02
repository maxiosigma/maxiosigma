import type { PrimeVuePTOptions } from 'primevue/config'

import { definePreset } from '@primevue/themes'
import { palette } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export const presetAura = definePreset(Aura, {
    semantic: {
        //primary: {
        //    50: '{amber.50}',
        //    100: '{amber.100}',
        //    200: '{amber.200}',
        //    300: '{amber.300}',
        //    400: '{amber.400}',
        //    500: '{amber.500}',
        //    600: '{amber.600}',
        //    700: '{amber.700}',
        //    800: '{amber.800}',
        //    900: '{amber.900}',
        //    950: '{amber.950}'
        //},
        //surface: {
        //    0: '#ffffff',
        //    50: '{ocean.50}',
        //    100: '{ocean.100}',
        //    200: '{ocean.200}',
        //    300: '{ocean.300}',
        //    400: '{ocean.400}',
        //    500: '{ocean.500}',
        //    600: '{ocean.600}',
        //    700: '{ocean.700}',
        //    800: '{ocean.800}',
        //    900: '{ocean.900}',
        //    950: '{ocean.950}'
        //},
        colorScheme: {
            light: {
                primary: {
                    color: '#ffffff',
                    inverseColor: '#ffffff',
                    hoverColor: '{amber.900}',
                    activeColor: '{amber.800}'
                },
                highlight: {
                    background: '{amber.950}',
                    focusBackground: '{amber.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                }
            },
            dark: {
                primary: {
                    color: '{amber.50}',
                    inverseColor: '{amber.950}',
                    hoverColor: '{amber.100}',
                    activeColor: '{amber.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                }
            }
        }
    }
})

export const presetPT = {
    //button: {
    //    root: {
    //        class: '!bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-4 rounded border-0 flex gap-2'
    //    },
    //    label: 'text-white font-bold text-xl',
    //    icon: 'text-white text-2xl'
    //},
    //panel: {
    //    header: 'bg-primary text-primary-contrast border-primary',
    //    content: 'border-primary text-lg text-primary-700',
    //    title: 'bg-primary text-primary-contrast text-xl',
    //    toggler: 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast'
    //}
    //panel: {
    //    header: ({ props }) => ({
    //        class: [
    //            'flex items-center justify-between', // flex and alignments
    //            'px-5 pt-5 bg-purple-500 text-white rounded-tl-lg rounded-tr-lg' // borders and color
    //        ]
    //    }),
    //    title: 'leading-none font-bold',
    //    content: {
    //        class: [
    //            'px-5 pb-3 pt-2 bg-purple-500  text-white last:rounded-br-lg last:rounded-bl-lg',
    //            'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
    //        ]
    //    }
    //}
} as PrimeVuePTOptions

export default {}
