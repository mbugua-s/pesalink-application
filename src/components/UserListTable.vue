<script setup lang="ts">
import { DataTable } from 'primevue'
import { Column } from 'primevue'
import type { User } from '@/types/User'
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import type { DataTableRowClickEvent } from 'primevue/datatable'
import router from '@/router'

const userStore = useUserStore()
const allUsers = computed<User[]>(() => userStore.getAllUsers)

const rowStyle = (data: User) => {
	if (data.company === undefined) {
		return { backgroundColor: 'red' }
	}
}
const selectedProduct = ref()
const onRowSelect = (event: DataTableRowClickEvent) => {
	userStore.setSelectedUser(event.data as User)
	router.push('/viewUser')
	// console.log(event.data as User)
}
</script>

<template>
	<DataTable
		:value="allUsers"
		tableStyle="min-width: 50rem"
		:rowStyle="rowStyle"
		paginator
		paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
		currentPageReportTemplate="{first} to {last} of {totalRecords}"
		:rows="10"
		v-model:selection="selectedProduct"
		selectionMode="single"
		dataKey="id"
		:metaKeySelection="false"
		@rowSelect="onRowSelect"
	>
		<Column field="name" header="NAME"></Column>
		<Column field="username" header="USERNAME"></Column>
		<Column field="email" header="EMAIL"></Column>
		<Column field="phone" header="PHONE"></Column>
		<Column field="company.name" header="COMPANY"></Column>
	</DataTable>
</template>

<style scoped></style>
