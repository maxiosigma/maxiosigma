export const state = () => ({
   //scroll: 0,
   //scrollBlock: false,
   //mainMenu: 0,
   timeout: 1000,
   //uploadCdn: false,
   //animateKinesis: true,
   //modal: {
   //	discount: false,
   //},
   //slides: [],
   navbar: [],
   footbar: [],
   social: [],
   reffers: [],
   links: [],
});

export const mutations = {
   uploadStrapi(state, { key, payload }) {
      state[key] = payload ?? [];
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
      const navbarQuery = await this.$strapi.graphql({ query: ctx.state.gql.navbar });
      const navbarResult = menu(navbarQuery);
      ctx.commit("uploadStrapi", { key: "navbar", payload: navbarResult });

      const footbarQuery = await this.$strapi.graphql({ query: ctx.state.gql.footbar });
      const footbarResult = menu(footbarQuery);
      ctx.commit("uploadStrapi", { key: "footbar", payload: footbarResult });

      const socialQuery = await this.$strapi.graphql({ query: ctx.state.gql.social });
      const socialResult = menu(socialQuery);
      ctx.commit("uploadStrapi", { key: "social", payload: socialResult });

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

      function menu(obj) {
         return obj?.menusMenu?.data?.attributes?.items?.data
            .map((it) => it?.attributes)
            .filter((it) => !it.hidden)
            .map((it) => {
               return {
                  url: it.url,
                  title: it.title,
                  order: it.order,
                  target: it.target,
                  parent: it.parent.data?.attributes,
                  class: it.class,
                  order: it.order,
                  icon: it.icon,
                  top: it.top,
               };
            })
            ?.sort((a, b) => (a?.order > b?.order ? 1 : -1));
      }
   },
};

export const getters = {};

//npx apollo schema:download --endpoint=http://localhost:1337/graphql schema.json
