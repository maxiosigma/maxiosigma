//<!--<NuxtLayout name="page">-->
//<!--</NuxtLayout>-->

//import gqlWorks from "~/assets/gql/works.gql";

//const { x, y } = useMouse();
//const isDark = usePreferredDark();
//console.log(isDark.value);

//onMounted(async () => {});

//const graphql = useStrapiGraphQL();
//const works = await graphql(gqlWorks);
//console.log(works);

//const appConfig = useAppConfig();
//console.log(appConfig.title);

//<Teleport to="body"> <div v-if="open" class="modal">
//    <p>Hello from the modal!</p>
//    <button @click="open = false">Close</button>
//  </div></Teleport>

//useSchemaOrg([
//	// @todo Select Identity: https://vue-schema-org.netlify.app/guide/guides/identity
//	defineWebSite({
//		name: "My Awesome Website",
//	}),
//	defineWebPage(),
//]);
//const { idle, lastActive } = useIdle(5 * 60 * 1000) // 5 min
//const title = useTitle('New Title')

//const isLeft = usePageLeave(); // Подожди не уходи ...

//runtimeConfig: частные или общедоступные токены, которые необходимо указать после сборки с использованием переменных среды.

//app.config: общедоступные токены, которые определяются во время сборки, конфигурация веб-сайта, такая как вариант темы, заголовок и любая конфигурация проекта, которые не являются конфиденциальными.

//const appConfig = useAppConfig();
//const runtimeConfig = useRuntimeConfig();
//const route = useRoute();
//// When accessing /posts/1, route.params.id will be 1
//console.log(route.params.id);

//definePageMeta({
//	middleware: "auth",
//});

//const user = useStrapiUser()
//const { findOne, count  } = useStrapi()
//const { update } = useStrapi4()
//const total = await count('restaurants')

//const graphql = useStrapiGraphQL()

//	const restaurant = await graphql(`
//  query {
//    restaurant(id: ${route.params.id}) {
//      data {
//        id
//        attributes {
//          name
//        }
//      }
//    }
//  }
//`);

//const restaurant = await graphql(query, { id: route.params.id });
//const url = useStrapiUrl()
//const token = useStrapiToken()
//const version = useStrapiVersion()

//const { data: count } = await useFetch('/api/count')
//Page visits: {{ count }}

//const { pending, data: posts } = useLazyFetch('/api/posts')
//watch(posts, (newPosts) => {
//  // Because posts starts out null, you will not have access
//  // to its contents immediately, but you can watch it.
//})

//"@nuxt/types", "@types/node", "@nuxtjs/axios"

//"compilerOptions": {
//	"types": []
//},
//"vueCompilerOptions": {
//	"plugins": ["@volar/vue-language-plugin-pug"]
//}

//const { data } = await useAsyncData('count', () => $fetch('/api/count'))
//Page visits: {{ data }}

//const { pending, data: count } = useLazyAsyncData('count', () => $fetch('/api/count'))
//watch(count, (newCount) => {
//  // Because count starts out null, you won't have access
//  // to its contents immediately, but you can watch it.
//})
//{{ pending ? 'Loading' : count }}
