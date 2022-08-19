<template>
   <Layout :title="title" :description="description">
      <!--<template v-slot:head>
      <TemplateHead />
    </template>-->

      <div class="flex-grow flex-center opacity-5">
         <h1>{{ title }}</h1>
         <h2>{{ title }}</h2>
         <h3>{{ title }}</h3>
         <h4>{{ title }}</h4>
         <h5>{{ title }}</h5>
         <h6>{{ title }}</h6>

         <p>{{ description }}</p>

         <ItemLink href="about">Автор</ItemLink>
      </div>
   </Layout>
</template>

<script>
export default {
   nuxtI18n: false,
   head() {
      return {
         title: !this.link?.title ? this.title : this.link?.title,
         description: !this.link?.description ? this.description : this.link?.description,
         titleTemplate: this.headTemplate(!!this.link && this.query ? "%s" : undefined),
      };
   },
   data() {
      return {
         link: undefined,
         qhash: undefined,
         title: "Добро пожаловать",
         description: "Общедоступная платформа Макса для предложений и всецелого получения полезностей",
         findutm: undefined,
         findgtm: undefined,
      };
   },
   beforeMount() {
      this.loadLink();
   },
   mounted() {
      this.Routed();
   },
   methods: {
      Redirected() {
         this.title = this.link?.title;
         this.description = this.link?.description;

         location.href = this.link?.href;
         setTimeout(() => (location.href = this.link?.alt), 3500);
      },
      Routed() {
         // https://172.27.240.1:3000?mw
         // https://172.27.240.1:3000#mw

         this.query && !this.findutm && !this.findgtm
            ? this.Redirected()
            : this.hash
            ? this.Redirected()
            : (() => {
                 if (!this.LCG("about")) this.routeLight("about");
                 else this.routeLight("sentences/1");
              })();
      },
      loadLink() {
         this.query = Object.keys(this.$route.query)?.[0];
         this.hash = this.$route.hash?.replace("#", "");

         this.findutm = this.query?.indexOf("utm") !== -1;
         this.findgtm = this.query?.indexOf("gtm") !== -1;

         this.link = this.$store.state.reffers?.filter(
            (ln) => ln?.attributes?.short == this.query || ln?.attributes?.short == this.hash
         )?.[0]?.attributes;
      },
   },
};

//if (!this.qhash) {
//  setTimeout(() => {
//    if (!this.LCG("about")) this.routeLight("about")
//    else this.routeLight("sentences/1")
//  }, 500)
//} else {
//  this.link = this.$store.state?.reffers?.filter((ln) => {
//    const short = ln?.attributes?.short
//    return short == this.query || short == this.hash
//  })?.[0]?.attributes

//  this.title = this.link?.title
//  this.description = this.link?.description

//  if (this.link?.href) setTimeout(() => (location.href = this.link?.href), 1500)
//  if (this.link?.alt) setTimeout(() => (location.href = this.link?.alt), 3000)

//  if (!this.link) {
//    //setTimeout(() => window.open("#mw"), 1500)
//    setTimeout(() => this.routeLight("about"), 3000)
//  }
//}

//this.qhash = (this.query && !anti_utm) || this.hash

//isRedirect() {
//  return !!this.link && this.qhash
//},
</script>

<style lang="scss">
.index {
   @apply bg-black flex-grow inset-0 fixed;
}
</style>
