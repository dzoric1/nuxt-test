<template>
	<div>
		<h1>Welcome to the homepage</h1>
		<AppAlert> This is an auto-imported component </AppAlert>
		<AppAlert>123213123</AppAlert>
		<ul class="qqq">
			<li><NuxtLink to="/posts/1">POST 1</NuxtLink></li>
			<li><NuxtLink to="/posts/2">POST 2</NuxtLink></li>
			<li><NuxtLink to="/posts/3">POST 3</NuxtLink></li>
		</ul>
		<NuxtLink to="/about">ABOUT</NuxtLink>
	</div>
</template>

<style scoped>
.qqq {
	@apply flex gap-5  text-red-300;
}
</style>
