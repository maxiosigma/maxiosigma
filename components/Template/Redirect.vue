<template>
  <div class="flex-grow flex-center flex-col text-white text-center">
    <div class="font-bold max-w-lg text-3xl uppercase">
      Страница пока не доступна, она разрабатывается
    </div>

    <div class="font-vetka font-light max-w-sm mt-3 text-base inline-flex items-center">
      Через несколько секунд вы будете перенаправлены на список моих предложений, чтобы вы не
      скучали. Контакты можно получить в меню навигации сверху.
      <div class="ml-1 transform rotate-z-25 inline">↑↑↑</div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [{}],
    }
  },
  mounted() {
    setTimeout(() => this.routeLight("programs"), 17500)
  },
}
</script>

<style lang="scss">
</style>>
