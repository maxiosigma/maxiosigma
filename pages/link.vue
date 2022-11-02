<template>
	<div></div>
</template>

<script setup>
	const { push } = useRouter();
	const { query } = useRoute();
	const { links } = useNuxtApp().payload.data;

	onMounted(async () => {
		if (Object.keys(query).length !== 0 && !useUtm(query)) {
			const link = links?.filter((ln) => ln.sh == Object.keys(query)?.[0])?.[0]?.ferd;

			if (link) location.href = useUncript(link);
			else push({ path: "/" });
		} else {
			push({ path: "/" });
		}
	});
</script>

<style lang="scss"></style>
