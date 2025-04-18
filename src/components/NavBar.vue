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
		<Menubar :model="items" />
	</div>
</template>

<style scoped></style>
