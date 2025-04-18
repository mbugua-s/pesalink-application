<script setup lang="ts">
import { DataTable } from 'primevue'
import { Column } from 'primevue'
import type { User } from '@/types/User'
import { computed } from 'vue'
import { useUserStore } from '@/stores/UserStore'

const userStore = useUserStore()
const allUsers = computed<User[]>(() => userStore.getAllUsers)

const rowStyle = (data: User) => {
	if (data.company === undefined) {
		return { backgroundColor: 'red' }
	}
}
</script>

<template>
	<DataTable
		:value="allUsers"
		tableStyle="min-width: 50rem"
		:rowStyle="rowStyle"
		paginator
		:rows="10"
	>
		<Column field="name" header="NAME"></Column>
		<Column field="username" header="USERNAME"></Column>
		<Column field="email" header="EMAIL"></Column>
		<Column field="phone" header="PHONE"></Column>
		<Column field="company.name" header="COMPANY"></Column>
	</DataTable>
</template>

<style scoped></style>
