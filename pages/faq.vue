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
</script>

<template>
	<div class="container">
		<BreadCrumbs :list="breadcrumbs" />
		<h1 class="questions-title">Часто задаваемые вопросы</h1>
		<div class="questions-blocks">
			<a href="/" class="questions-block">
				<div class="questions-block__name">Условия доставки</div>
			</a>
			<a href="/" class="questions-block">
				<div class="questions-block__name">Условия доставки</div>
			</a>
			<a href="/" class="questions-block">
				<div class="questions-block__name">Условия доставки</div>
			</a>
			<a href="/" class="questions-block">
				<div class="questions-block__name">Условия доставки</div>
			</a>
		</div>
		<div class="questions-help">
			<div class="questions-title">Справка</div>
			<div class="questions-help__links">
				<div class="questions-help__link">
					<a href="/">Возвраты</a>
				</div>
				<div class="questions-help__link">
					<a href="/">Доставка</a>
				</div>
				<div class="questions-help__link">
					<a href="/">Самовывоз</a>
				</div>
				<div class="questions-help__link">
					<a href="/">Оплата</a>
				</div>
				<div class="questions-help__link">
					<a href="/">Школа покупателя</a>
				</div>
				<div class="questions-help__link">
					<a href="/">Вакансии</a>
				</div>
				<div class="questions-help__link">
					<a href="/">Правовая информация</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>
