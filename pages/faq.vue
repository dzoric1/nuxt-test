<script setup>
const breadcrumbs = [
	{
		title: 'Главная',
		to: '/',
	},
	{
		title: 'Помощь',
		to: '/',
	},
];

const blocks = [
	'Условие доставки',
	'Условие доставки',
	'Условие доставки',
	'Условие доставки',
];

const helpLinks = [
	'Возвраты',
	'Доставка',
	'Самовывоз',
	'Оплата',
	'Школа покупателя',
	'Вакансии',
	'Правовая информация',
];
</script>

<template>
	<div class="container">
		<BreadCrumbs :list="breadcrumbs" />

		<h1 class="questions-title">Часто задаваемые вопросы</h1>
		<div class="questions-blocks">
			<NuxtLink
				v-for="(block, i) in blocks"
				:key="i"
				href="/"
				class="questions-block"
			>
				<div class="questions-block__name">{{ block }}</div>
			</NuxtLink>
		</div>
		<div class="questions-help">
			<div class="questions-title">Справка</div>
			<div class="questions-help__links">
				<div
					v-for="(link, i) in helpLinks"
					:key="i"
					class="questions-help__link"
				>
					<NuxtLink href="/">{{ link }}</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.questions-title {
	@apply text-[32px] font-medium text-center pb-6;
}
.questions-blocks {
	@apply flex gap-x-10 mb-[60px] md:flex-wrap md:gap-5;
}
.questions-block {
	@apply shadow-[1px_4px_8px_0px_rgba(0,0,0,0.12)] w-3/12 p-5 rounded-xl md:flex-shrink-0 md:flex-grow-0 md:basis-[150px];
}
.questions-block__name {
	@apply text-lg font-medium pb-[108px];
}
.questions-help__links {
	@apply flex flex-col items-center gap-y-3;
}
.questions-help__link {
	@apply box-border md:w-full;
}
.questions-help__link a {
	@apply text-[$text-primary] no-underline text-lg font-medium w-[670px] shadow-[0px_4px_17.2px_0px_rgba(0,0,0,0.08)] inline-flex p-5 rounded-xl md:w-full md:block md:box-border;
}
</style>
