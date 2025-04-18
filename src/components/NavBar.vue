<script setup lang="ts">
import { Menubar } from 'primevue'

import { ref } from 'vue'

const items = ref([
	{
		label: 'List Users',
		icon: 'pi pi-list',
	},
	{
		label: 'Create User',
		icon: 'pi pi-plus',
	},
])
</script>

<template>
	<div class="card">
		<Menubar :model="items" class="navbar" />
	</div>
</template>

<style scoped>
.navbar {
	display: flex;
	flex: 1;
}
</style>
