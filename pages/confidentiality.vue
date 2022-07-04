<template>
  <LayoutPage>
    <div class="confidentiality">
      <div class="confidentiality-title">Политика в отношении обработки персональных данных</div>

      <div class="confidentiality-content">
        <ul class="confidentiality-list">
          <li class="confidentiality-subtitle">
            Общие положения
            <ul class="confidentiality-sublist">
              Настоящая политика обработки персональных данных составлена в соответствии с
              требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее
              - Закон о персональных данных) и определяет порядок обработки персональных данных и
              меры по обеспечению безопасности персональных данных, предпринимаемые Семенюк Максим
              Валерьевич (далее – Оператор).

              <li>
                Оператор ставит своей важнейшей целью и условием осуществления своей деятельности
                соблюдение прав и свобод человека и гражданина при обработке его персональных
                данных, в том числе защиты прав на неприкосновенность частной жизни, личную и
                семейную тайну.
              </li>

              <li>
                Настоящая политика Оператора в отношении обработки персональных данных (далее –
                Политика) применяется ко всей информации, которую Оператор может получить о
                посетителях веб-сайта <item-link href="/" />.
              </li>

              <li></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Конфиденциальность",
    }
  },
  //data() {
  //  return {
  //    data: [],
  //  }
  //},
}
</script>

<style lang="scss">
.confidentiality {
  @apply flex-grow flex-center flex-col text-light-400;

  &-content {
    @apply mx-auto max-w-xl text-sm w-full;
  }
  &-title {
    @apply font-black max-w-lg text-center mb-14 text-3xl;
  }
  &-subtitle {
    @apply text-xl;
  }
  &-list {
    @apply list-upper-roman;
  }
  &-sublist {
    @apply list-square  text-sm ml-5;

    & > li,
    & li {
      @apply my-2 text-justify text-sm;
    }
  }
  //&-text {
  //  @apply text-justify text-lg indent-xs;
  //}
}
</style>