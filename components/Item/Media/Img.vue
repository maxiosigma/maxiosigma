<template>
    <img
        v-if="getImage && !bg"
        :src="getImage"
        :width="width"
        :height="height"
        :class="['img-render']"
        :alt="alt"
        :aria-label="title"
        onabort="aborted()"
        itemprop="image"
    />

    <div
        v-else-if="getImage && bg"
        :id="id"
        :class="['img-bg-mod']"
        :title="title"
        :alt="alt"
        itemprop="image"
        onabort="aborted()"
    >
        <slot></slot>
    </div>
</template>

<script setup>
const {
    payload: {
        data: { uploadImages }
    }
} = useNuxtApp()

console.log(uploadImages)

const { src, alt, title, bg } = defineProps({
    src: { required: true, type: String },
    alt: { type: String, default: 'img' },
    title: { type: String, default: 'img' },
    bg: { type: Boolean, default: false }
})

const getImage = ref(uploadImages?.[src])
const id = ref(
    'img_' +
        String(Math.random() * ((Math.random() * 10000000) / 1.0))
            .split('.')
            .join('_')
)

//console.log(uploadImages)

const { width, height } = {
    width: 'auto',
    height: 'auto'
}

if (bg && getImage.value && id.value) {
    useHead({
        style: [
            {
                type: 'text/css',
                async: true,
                innerHTML: `#${id.value} { background-image: url('${getImage.value}'); }`,
                body: true
            }
        ]
    })
}
</script>

<style lang="scss">
.img {
    &-render {
        @apply image-render-edge pointer-events-none;
    }

    &-bg {
        &-mod {
            @apply bg-no-repeat pointer-events-none;
        }
    }
}
</style>
