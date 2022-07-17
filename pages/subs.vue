<template>
  <LayoutPage>
    <div class="subs">
      <!--<script
        src="//web.webformscr.com/apps/fc3/build/loader.js"
        sp-form-id="60ee992dc90ad2cba4e870779b6fdc4a052729011c13e6d2bb3c81444d92838d"
      ></script>-->
    </div>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Подписка",
      //script: [
      //  {
      //    hid: "sps",
      //    charset: "UTF-8",
      //    src: "//web.webformscr.com/apps/fc3/build/loader.js",
      //    "sp-form-id": "60ee992dc90ad2cba4e870779b6fdc4a052729011c13e6d2bb3c81444d92838d",
      //    async: false,
      //  },
      //],
    }
  },
  mounted() {
    //localStorage.getItem('subs-push') ? this.routeLight('community/programs') : localStorage.setItem('subs-push', true)
    ////ANCHOR
    //document.getElementById('sp-9286be14-1cec-44f8-bff4-b1e53b0e96d3').addEventListener('click', function (e) {
    //	//	e = e || window.event
    //	//	var target = e.target || e.srcElement
    //	//	if (target.id == 'btn') alert('Клик по дочернему!')
    //})
  },
}
</script>

<style lang="scss">
.subs {
  //bg-light-600 fixed opacity-75 pointer-events-none
  @apply flex-grow flex-center w-screen px-5 pt-5 pb-10;

  //&-back {
  //  @apply pl-2 inline-flex items-center;
  //}
}

a.sp-link {
  @apply hidden #{!important};
}

.sp-form-outer {
  //@apply border-none flex-grow flex-center h-full min-h-full bg-15r bg-gray-900 bg-hero-i-like-food-skyblue-15 border-0 inset-0 z-0 overflow-x-hidden overflow-y-auto relative;

  & > div.sp-form {
    //@apply border-none max-h-full border-0 rounded-2xl my-20 mx-4 w-full w-sm  #{!important};
    //@apply md:(w-md);

    & > .sp-form-fields-wrapper > .sp-link-wrapper > .sp-link {
      @apply hidden #{!important};
    }

    & > div {
      @apply border-none #{!important};
    }
  }
}
</style>