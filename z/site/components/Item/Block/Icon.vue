<template>
	<div :class="classItem">
		<div :class="classIcon"></div>
		<h3 :class="classTitle">{{ items.title }}</h3>

		<ol :class="classOl">
			<li v-for="(item, i) in items.ol" :key="i">{{ item }}</li>
		</ol>
	</div>
</template>

<script>
export default {
	props: ['classItem', 'classOl', 'classIcon', 'classTitle', 'items'],
}
</script>
