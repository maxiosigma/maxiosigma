<template>
	<img
		:src="getImg"
		:width="widthImg"
		:height="heightImg"
		:alt="alt ? alt : 'img'"
		:title="title"
		:aria-label="title ? title : 'img'"
		:class="[id, 'img-render']"
		v-if="getImg"
		itemprop="image"
	/>
</template>

<script setup>
	//export default {
	//   props: ["src", "alt", "title"],
	//   data() {
	//      return {
	//         widthImg: "auto",
	//         heightImg: "auto",
	//         id:
	//            "img_" +
	//            String(Math.random() * ((Math.random() * 10000000) / 1.0))
	//               .split(".")
	//               .join("_"),
	//      };
	//   },
	//   computed: {
	//      getImg() {
	//         try {
	//            return require(`~/media/${this.src}`);
	//         } catch (error) {
	//            return this.src || false;
	//         }
	//      },
	//   },
	//};
</script>

<style lang="scss">
	.img {
		&-render {
			@apply image-render-edge;
		}
	}
</style>
