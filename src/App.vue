<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import { Toast } from 'primevue'
</script>

<template>
	<header>
		<NavBar class="navbar" />
	</header>
	<Toast />
	<RouterView />
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
		/* flex: 1; */
	}
}
</style>
