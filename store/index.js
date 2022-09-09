export const state = () => ({
   visio: 0,
   timeout: 1000,
   strapi: { navbar: [], fotbar: [], socbar: [] },
   nav: { active: [] },
   publics: [],
   reffers: [],
   links: [],
   works: [],
});

export const mutations = {
   setNav(state, key, value) {
      state.nav[key] = value;
   },
   setVisio(state, value) {
      state.visio = value;
   },
   uploadStrapi(state, { key, payload }) {
      state[key] = payload ?? [];
   },
   uploadStrapiTo(state, { key, payload }) {
      state.strapi[key] = payload ?? [];
   },
   setUploadCdn(state) {
      state.uploadCdn = true;
   },
   addSlide(state, prop) {
      state.slides.push(prop);
   },
   setScroll(state, prop) {
      state.scroll = state.scrollBlock ? state.scroll : prop;
      state.scrollBlock = true;
      setTimeout((state.scrollBlock = false), 1250);
   },
   checkMenu(state, prop) {
      if (prop) state.mainMenu = prop;
      else {
         state.mainMenu = state.mainMenu == 0 ? 1 : -state.mainMenu;
         state.mainMenu == 1
            ? (document.body.style.overflow = "hidden")
            : state.mainMenu == -1
            ? setTimeout(() => (document.body.style.overflow = "auto"), 2000)
            : null;
      }
   },
   modalOpen(state, name) {
      state.modal = Object.assign(state.modal, { [name]: true });
      document.querySelector(".wrapper").classList.add("overflow-hidden");
   },
   modalClose(state, name) {
      state.modal = Object.assign(state.modal, { [name]: false });
      document.querySelector(".wrapper").classList.remove("overflow-hidden");
   },
   deactiveAnimateKinesis(state) {
      state.animateKinesis = false;
   },
};

export const actions = {
   async nuxtServerInit(ctx) {
      ["nav-bar", "fot-bar", "soc-bar"].map(async (it) => {
         const query = ctx.state.gql.uiMenu(it);
         const key = `${it.split("-").join("")}`;
         const payload = (await this.$strapi.graphql({ query: query }))?.renderNavigation;

         ctx.commit("uploadStrapiTo", { key, payload });
      });

      //console.log(this.route, this.$payloadURL);

      ctx.commit("uploadStrapi", {
         key: "works",
         payload: (await this.$strapi.graphql({ query: ctx.state.gql.works })).works.data.map((it) => {
            const attr = it.attributes;

            return {
               ...attr,
               assets: {
                  fonts: attr.assets.fonts.data.map((as) => as.attributes.title),
                  models: attr.assets.models.data.map((as) => as.attributes.title),
                  technologies: attr.assets.technologies.data.map((as) => as.attributes.title),
               },
               media: attr.media.data.map((md) => {
                  const alt = md.attributes.alternativeText;
                  delete md.attributes.alternativeText;

                  return { ...md.attributes, alt };
               }),
               //.filter((md) => !md.alternativeText),
            };
         }),
      });

      const publicsQuery = await this.$strapi.graphql({ query: ctx.state.gql.publics });
      const publicsResult = publicsQuery.publicateds.data.map((it) => it.attributes);
      ctx.commit("uploadStrapi", { key: "publics", payload: publicsResult });

      const reffers = (await this.$strapi.graphql({ query: ctx.state.gql.links })).links?.data;
      ctx.commit("uploadStrapi", { key: "reffers", payload: reffers });

      const links = reffers?.reduce((sum, it) => {
         const link = it.attributes;

         if (!!link?.partnership && !!link?.title && !!link?.description && !!link?.short)
            sum.push({
               title: link?.title,
               description: link?.description,
               images: link?.imgs?.data.map((img) => img?.attributes),
               short: link?.short,
               tags: link?.tags?.data?.map((tag) => tag?.attributes?.title)?.sort((a, b) => (a?.length > b?.length ? 1 : -1)),
               top: link?.top,
            });

         return sum;
      }, []);
      ctx.commit("uploadStrapi", { key: "links", payload: links });
   },
};

export const getters = {};

//npx apollo schema:download --endpoint=http://localhost:1337/graphql schema.json
