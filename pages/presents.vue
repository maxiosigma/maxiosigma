<template>
  <LayoutPage>
    <div class="flex-grow flex-center text-light-200 presents">
      <div :class="[!isSubs ? 'flex-center' : 'hidden']"></div>
      <div :class="[!isSubs ? 'hidden' : 'flex-center']"></div>
    </div>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Подарки",
    }
  },
  data() {
    return {
      isSubs: false,
    }
  },
  mounted() {
    this.isSubs = document.cookie.indexOf("sbjs") !== -1

    if (this.isSubs) {
      setTimeout(
        () =>
          this.$toast.show("Вы подписаны, подарки скоро будут, ожидайте push-уведомления", {
            theme: "outline",
            position: "top-center",
            duration: 10000,
          }),
        1500
      )
    } else {
      setTimeout(
        () =>
          this.$toast.show("Вы не подписаны, поэтому вы не можете получить подарки", {
            theme: "outline",
            position: "top-center",
            duration: 10000,
          }),
        1500
      )
    }
  },
  //methods: {
  //  isSubs() {
  //  this.isSubs =  document.cookie.indexOf("sbjs") !== -1
  //  },
  //},
}
</script>

<style lang="scss">
</style>