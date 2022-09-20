<template>
   <div class="portfolio-project-media flex flex-grow">
      <!-- :class="visible == (i + 1) * 10 ? 'opacity-100' : 'opacity-0'" -->
      <div :class="['flex-grow w-full transition-all duration-700']">
         <VueSlickCarousel
            ref="main"
            class="m-auto flex-grow flex-center"
            v-bind="{ ...slick.common, ...slick.main }"
            @beforeChange="syncSliders"
         >
            <LazyItemMediaStrapiVideoPlayer
               class="rounded-md cursor-pointer"
               v-for="(media, j) in data.filter((media) => media.mime === 'video/mp4')"
               :key="`media-video-${i}${j}`"
               :src="media.url"
            />
            <LazyItemMediaStrapiBg
               class="portfolio-project-image rounded-md cursor-pointer"
               v-for="(media, j) in data.filter((media) => media.mime !== 'video/mp4')"
               :key="`media-photo-${i}${j}`"
               :src="media.url"
               :alt="media.alt"
            />

            <!--  :title="it.title" -->
         </VueSlickCarousel>

         <!-- h-20  mx-1/10  px-20 -->
         <div
            v-if="
               data.length > 1 &&
               data.filter((media) => media.mime !== 'video/mp4' && (media.formats.small || media.formats.thumbnail)).length > 1
            "
            class="mt-5 max-w-60 mx-auto relative"
         >
            <VueSlickCarousel ref="thumbs" class="" v-bind="{ ...slick.common, ...slick.thumbs }" @beforeChange="syncSliders">
               <LazyItemMedia
                  :class="['portfolio-project-media-thumbs', reverse ? 'bg-white' : 'bg-black']"
                  v-for="(media, j) in data.filter((media) => media.mime === 'video/mp4')"
                  :key="`media-thumbs-video-${i}${j}`"
                  src="portfolio/thumb_video_3.jpg"
                  @click.native="handleClick(j)"
               ></LazyItemMedia>

               <!--|| media.formats.thumbnail.url-->
               <ItemMediaStrapiBg
                  :class="['portfolio-project-media-thumbs', reverse ? 'bg-white' : 'bg-cyan-600']"
                  v-for="(media, j) in data.filter((media) => media.mime !== 'video/mp4')"
                  :key="`media-thumbs-photo-${i}${j}`"
                  :src="media.formats.small ? media.formats.small.url : media.formats.thumbnail.url"
                  @click.native="handleClick(data.filter((media) => media.mime === 'video/mp4').length + j)"
               />
            </VueSlickCarousel>
         </div>
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
         slick: {
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
