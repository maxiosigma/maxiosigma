<template>
   <!--<div v-if="mimeLength === 0"></div>-->
   <!--|| media.formats.thumbnail.url-->
   <!-- media.formats.small ? media.formats.small.url : media.formats.thumbnail.url -->
   <!-- h-20  mx-1/10  px-20  v-if="lengthData > 1 && lengthSmTh > 1" -->
   <!-- length > 1 && lengthSmTh > 1 &&  -->
   <!-- :class="visible == (i + 1) * 10 ? 'opacity-100' : 'opacity-0'" -->
   <div class="portfolio-project-media flex flex-grow">
      <!-- Посмотреть при сборке -->
      <div :class="['flex-grow w-full transition-all duration-700']">
         <!--<div>{{ data.map((media) => media.mime) }}</div>
         <div>{{ lengthData }}</div>
         <div>{{ data.filter((media) => media.mime == "video/mp4") }}</div>-->

         <VueSlickCarousel
            ref="main"
            class="m-auto flex-grow flex-center"
            v-bind="{ ...slick.common, ...slick.main }"
            v-if="lengthData > 0"
            @beforeChange="syncSliders"
         >
            <ItemMediaStrapiVideoPlayer
               class="rounded-md cursor-pointer"
               v-for="(media, j) in mimeVideo"
               :key="`media-video-${i}${j}`"
               :src="media.url"
            />

            <ItemMediaStrapiBg
               class="portfolio-project-image rounded-md cursor-pointer"
               v-for="(media, j) in mimePhoto"
               :key="`media-photo-${i}${j}`"
               :src="media.url"
               :alt="media.alt"
            />
         </VueSlickCarousel>

         <div class="mt-5 max-w-60 mx-auto relative">
            <VueSlickCarousel
               v-if="lengthData > 1"
               ref="thumbs"
               class=""
               v-bind="{ ...slick.common, ...slick.thumbs }"
               @beforeChange="syncSliders"
            >
               <ItemMedia
                  :class="['portfolio-project-media-thumbs', reverse ? 'bg-white' : 'bg-black']"
                  v-for="(media, j) in mimeVideo"
                  :key="`media-thumbs-video-${i}${j}`"
                  src="portfolio/thumb_video_3.jpg"
                  @click.native.prevent="handleClick(j)"
               ></ItemMedia>

               <ItemMediaStrapiBg
                  :class="['portfolio-project-media-thumbs', reverse ? 'bg-white' : 'bg-cyan-600']"
                  v-for="(media, j) in mimePhoto"
                  :key="`media-thumbs-photo-${i}${j}`"
                  :src="formats(media.formats)"
                  @click.native.prevent="handleClick(mimeVideo.length + j)"
               />
            </VueSlickCarousel>
         </div>

         <!--<div class="text-white">Mime: {{ lengthData }}</div>-->
      </div>
   </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
   props: ["visible", "reverse", "data", "options", "i"],
   data() {
      return {
         lengthData: this.data?.length,
         //&& (media.formats?.small || media.formats?.thumbnail)
         //lengthSmTh: this.data?.filter((media) => media.mime != "video/mp4").length,
         mimeVideo: this.data?.filter((media) => media.mime === "video/mp4"),
         mimePhoto: this.data?.filter((media) => media.mime !== "video/mp4"),
         //mimeLength: this.mimeVideo?.length + this.mimePhoto?.length,
         //mimeVideoLength: this.mimeVideo?.length,
         //mimePhotoLength: this.mimePhoto?.length,

         slick: {
            // infinite
            common: {
               dots: false,
               //infinite: false,
               //accessibility: false,
               //lazyLoad: "ondemand",

               autoplay: true,
               autoplaySpeed: 10000 + Math.random() * 1000,
            },
            main: {
               arrows: false,
               //infinite: false,
               draggable: false,
               slidesToShow: 1,
               slidesToScroll: 1,
               asNavFor: this.$refs.thumbs,
            },
            thumbs: {
               //speed: 2500,

               //variableWidth: true,

               arrows: true,
               //centerMode: true,
               slidesToScroll: 1,
               slidesToShow: 3,
               //centerPadding: "1px",
               asNavFor: this.$refs.main,
               //adaptiveHeight: true,
               //focusOnSelect: true,

               //   centerMode: true,
               //   centerPadding: "5px",
            },
         },
      };
   },
   mounted() {
      //console.log(this.data.filter((media) => media.mime !== "video/mp4" && media.formats).length);
   },
   methods: {
      formats(value) {
         return value?.small ? value?.small?.url || `https://api.lorem.space/image?w=300&h=200&hash=${Math.random()}` : value?.thumbnail?.url;
      },
      handleClick(i) {
         this.$refs.main.goTo(i);
      },
      syncSliders(currentPosition, nextPosition) {
         //this.$refs.main.goTo(nextPosition);
         //this.$refs.main.next();
         //this.$refs.thumbs.next();
      },
   },
   components: { VueSlickCarousel },
};
</script>

<style lang="scss">
.portfolio-project-media {
   &-thumbs {
      //
      @apply w-auto min-w-12 h-12 bg-center bg-cover cursor-pointer rounded-md box-content border-5 border-cyan-600/10;
   }

   & .slick {
      &-track {
         @apply flex;
      }

      &-slide {
         @apply pointer-events-auto #{!important};
         @apply flex-grow m-auto;
      }

      &-active {
         //@apply border-2 border-indigo-500 #{!important};
      }

      &-list {
         //@apply h-auto #{!important};
      }

      //&-arrow {
      //   @apply ;
      //}

      &-track {
         //@apply flex-center;
      }
   }
}
</style>
