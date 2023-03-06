<template>
    <div class="flex flex-grow w-screen h-screen overflow-hidden">
        <div class="grid grid-cols-2">
            <div class="relative flex-center h-full">
                <ItemMediaImg class="bg-contain h-full w-50vw -mr-1/5 face_2_shadow_1" src="face_1.webp" bg></ItemMediaImg>
                <ItemMediaImg class="absolute mirror-horizonal left-8/10 -mr-1/5 bg-contain h-full w-50vw face_2_shadow_2" src="face_1.webp" bg></ItemMediaImg>
            </div>

            <div class="relative flex-center h-full">
                <ItemMediaImg class="bg-contain h-full w-50vw -ml-1/5 face_1_shadow_1" src="face_2.webp" bg></ItemMediaImg>
                <ItemMediaImg class="absolute mirror-horizonal right-8/10 -ml-1/5 bg-contain h-full w-50vw face_1_shadow_2" src="face_2.webp" bg></ItemMediaImg>
            </div>
        </div>

        <div class="bg pointer-events-none absolute inset-0">
            <ItemMediaImg class="absolute right-0 h-full w-auto" src="wave_3d_1.webp"></ItemMediaImg>
            <ItemMediaImg class="absolute left-0 mirror-horizonal h-full w-auto" src="wave_3d_1.webp"></ItemMediaImg>
            <ItemMediaImg class="absolute bottom-0 w-full h-auto" src="wave_2.webp"></ItemMediaImg>
            <ItemMediaImg class="absolute left-0 h-full w-auto" src="wave_1.webp"></ItemMediaImg>
            <ItemMediaImg class="absolute right-0 mirror-horizonal h-full w-auto" src="wave_1.webp"></ItemMediaImg>
        </div>
    </div>
</template>

<script setup>
const title = ref("Автор")
const description = ref("")
definePageMeta({ layout: "page" })
</script>

<style lang="scss">
.face {
    &_1_shadow {
        &_1 {
            //filter: drop-shadow(10px -10px 10px #003366);
            filter: blur(1px) drop-shadow(10px -10px 10px #003366);
        }

        &_2 {
            filter: blur(250px) drop-shadow(0px 0px 1px #003366);
        }
    }

    &_2_shadow {
        &_1 {
            //filter: drop-shadow(10px -10px 10px #003366);
            filter: blur(1px) drop-shadow(-10px -10px 10px #003366);
        }

        &_2 {
            filter: blur(250px) drop-shadow(0px 0px 1px #003366);
        }
    }
}

.mirror {
    &-horizonal {
        transform: scale(-1, 1);
    }

    &-vertical {
        transform: scale(1, -1);
    }
}
</style>
