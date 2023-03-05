<template>
    <img
        v-if="getImage() && !bg"
        :src="getImage()"
        :width="widthImg"
        :height="heightImg"
        :alt="alt"
        :title="title"
        :aria-label="title"
        :class="[id, 'img-render']"
        itemprop="image"
    />

    <div v-if="getImage() && bg" :class="[id, 'img-bg-mod']" :title="title" :alt="alt" itemprop="image">
        <slot></slot>
    </div>
</template>

<script setup>
const { src, alt, title, bg } = defineProps({
    src: { required: true, type: String },
    alt: { type: String, default: "img" },
    title: { type: String, default: "img" },
    bg: { type: Boolean, default: false },
})

const { widthImg, heightImg, id } = {
    widthImg: "auto",
    heightImg: "auto",
    id:
        "img_" +
        String(Math.random() * ((Math.random() * 10000000) / 1.0))
            .split(".")
            .join("_"),
}

function getImage() {
    return useAssets(src)
}

if (bg) useHead({ style: [{ type: "text/css", async: true, innerHTML: `.${id} { background-image: url('${getImage()}'); }`, body: true }] })
</script>

<style lang="scss">
.img {
    &-render {
        @apply image-render-edge;
    }
}

.img {
    &-bg {
        &-mod {
            @apply bg-no-repeat w-full;
        }
    }
}
</style>
