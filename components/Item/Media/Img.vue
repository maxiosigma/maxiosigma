<template>
    <img v-if="getImage() && !bg" :src="getImage()" :width="width" :height="height" :class="['img-render']" :alt="alt" :aria-label="title" :id="id" itemprop="image" />

    <div v-else-if="getImage() && bg" :id="id" :class="['img-render']" :title="title" :alt="alt" itemprop="image">
        <slot></slot>
    </div>
</template>

<script setup>
// v-bind="$attrs"
// v-bind="$attrs"
// :class="[id, 'img-render']"
// :class="[id, 'img-bg-mod']"
// :title="title"

const { src, alt, title, bg } = defineProps({
    src: { required: true, type: String },
    alt: { type: String, default: "img" },
    title: { type: String, default: "img" },
    bg: { type: Boolean, default: false },
})

const { width, height, id } = {
    width: "auto",
    height: "auto",
    id:
        "img_" +
        String(Math.random() * ((Math.random() * 10000000) / 1.0))
            .split(".")
            .join("_"),
}

function getImage() {
    return useAssets(src)
}

if (bg) useHead({ style: [{ type: "text/css", async: true, innerHTML: `#${id} { background-image: url('${getImage()}'); }`, body: true }] })
</script>

<style lang="scss">
.img {
    &-render {
        @apply image-render-edge pointer-events-none;
    }
}

.img {
    &-bg {
        &-mod {
            @apply bg-no-repeat w-full pointer-events-none;
        }
    }
}
</style>
