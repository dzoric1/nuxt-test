<script setup>
const props = defineProps({
	list: Array,
});
</script>

<template>
	<ul class="breadcrumbs">
		<li v-for="li in list" :key="li">
			<NuxtLink to="/">{{ li.title }}</NuxtLink>
		</li>
	</ul>
</template>

<style scoped>
.breadcrumbs {
	@apply pt-[30px] pb-10 px-0 text-gray text-sm flex;
}

.breadcrumb li {
	@apply inline text-sm;
}

.breadcrumb a {
	@apply no-underline;
}

.breadcrumbs li + li::before {
	@apply inline-block content-[''] w-[5px] h-[9px] mx-3 my-0;
	background: url('@/assets/icons/crumb.svg') no-repeat center;
}
</style>
