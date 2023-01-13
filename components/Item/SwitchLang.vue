<template>
	<div class="text-light-200 grid grid-cols-2">
		<NuxtLink :to="switchLocalePath('ru')">RU</NuxtLink>
		<NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
	</div>
</template>

<script setup>
	const switchLocalePath = useSwitchLocalePath();
</script>
