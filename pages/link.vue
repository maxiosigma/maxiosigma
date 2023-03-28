<template>
    <div></div>
</template>

<script setup>
const { push } = useRouter()
const { hash, query } = useRoute()
const { links } = useNuxtApp().payload.data

push({ hash: '', query })

console.log(links)

//onMounted(() => {
//	if (Object.keys(query).length !== 0 && !useUtm(query)) {
//		const link = links?.filter((ln) => ln.sh == Object.keys(query)?.[0])?.[0]?.ferd;
//		const uns = useUncript(link);

//		if (link && uns) location.href = uns;
//		else push({ path: "/" });
//	} else {
//		push({ path: "/" });
//	}
//});

//const { hash, query } = useRoute();
//const { push } = useRouter();

//useNuxtApp().payload.data = {};

//if (hash && !useUtm(query)) push({ path: "/link", query: { [hash.replace("#", "")]: true } });
//if (useQueryLength() !== 0 && !useUtm(query)) push({ path: "/link", query });

//
// const double = computed(() => count.value * 2)
</script>

<style lang="scss"></style>
