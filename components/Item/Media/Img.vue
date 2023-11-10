<template>
    <img
        v-if="getImage() && !bg"
        :src="getImage()"
        :width="width"
        :height="height"
        :class="['img-render']"
        :alt="alt"
        :aria-label="title"
        :id="id"
        onabort="aborted()"
        itemprop="image"
    />

    <div
        v-else-if="getImage() && bg"
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
const { src, alt, title, bg } = defineProps({
    src: { required: true, type: String },
    alt: { type: String, default: 'img' },
    title: { type: String, default: 'img' },
    bg: { type: Boolean, default: false },
})

const { width, height, id } = {
    width: 'auto',
    height: 'auto',
    id:
        'img_' +
        String(Math.random() * ((Math.random() * 10000000) / 1.0))
            .split('.')
            .join('_'),
}

if (bg)
    useHead({
        style: [
            {
                type: 'text/css',
                async: true,
                innerHTML: `#${id} { background-image: url('${getImage()}'); }`,
                body: true,
            },
        ],
    })

function getImage() {
    return useAssetsImages(src)
}

function aborted(e) {
    console.log(e)
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
