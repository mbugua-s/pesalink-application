<script setup lang="ts">
import { DataTable } from 'primevue'
import { Column } from 'primevue'
import type { User } from '@/types/User'
import { computed, onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import type { DataTableRowClickEvent } from 'primevue/datatable'
import { FilterMatchMode } from '@primevue/core/api'
import { InputIcon } from 'primevue'
import { IconField } from 'primevue'
import { InputText } from 'primevue'
import { Avatar } from 'primevue'
import { Toast } from 'primevue'
import { useToast } from 'primevue/usetoast'
import router from '@/router'

const toast = useToast()
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

const filters = ref({
	global: { value: null, matchMode: FilterMatchMode.CONTAINS },
})

const getFirstLetterOfName = (name: string): string => {
	if (name.length < 0) {
		throw new Error(`Invalid string length: ${name.length}`)
	} else {
		const nameAsArray = name.split('')
		return nameAsArray[0].toUpperCase()
	}
}

const isTableLoading = ref(true)

onMounted(async () => {
	// If we already have fetched users, then retrieve them from the store
	// Otherwise the user that was created will be lost
	if (allUsers.value.length === 0) {
		const result: boolean = await userStore.fetchAllUsers()
		isTableLoading.value = false

		if (result) {
			toast.add({ severity: 'success', summary: 'Users fetched successfully', life: 3000 })
		} else {
			toast.add({
				severity: 'error',
				summary: 'Failed to fetch users. Please refresh the page and try again',
				life: 3000,
			})
		}
	} else {
		isTableLoading.value = false
	}
})
</script>

<template>
	<div class="title">
		<h1>All Users</h1>
	</div>
	<DataTable
		:value="allUsers"
		tableStyle="min-width: 50rem"
		:rowStyle="rowStyle"
		paginator
		paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
		currentPageReportTemplate="{first} to {last} of {totalRecords}"
		:rows="5"
		v-model:selection="selectedProduct"
		selectionMode="single"
		dataKey="id"
		:metaKeySelection="false"
		@rowSelect="onRowSelect"
		v-model:filters="filters"
		:globalFilterFields="['name', 'email']"
		data-testid="user-list-table"
		showGridlines
		:loading="isTableLoading"
	>
		<template #header>
			<div class="flex justify-end">
				<IconField>
					<InputIcon>
						<i class="pi pi-search"></i>
					</InputIcon>
					<InputText v-model="filters['global'].value" placeholder="Name or Email" />
				</IconField>
			</div>
		</template>
		<template #empty> No users found. </template>
		<template #loading> Loading users... </template>
		<Column field="name" header="NAME">
			<template #body="{ data }">
				<div class="avatar-name">
					<Avatar :label="getFirstLetterOfName(data.name)" class="mr-2" size="normal" />
					<p class="user-details-name">{{ data.name }}</p>
				</div>
			</template>
		</Column>
		<Column field="username" header="USERNAME"></Column>
		<Column field="email" header="EMAIL"></Column>
		<Column field="phone" header="PHONE"></Column>
		<Column field="company.name" header="COMPANY"></Column>
	</DataTable>
	<Toast />
</template>

<style scoped>
.avatar-name {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.user-details-name {
	margin-left: 1vw;
}

.title {
	display: flex;
	justify-content: center;
	/* margin: auto; */
}
</style>
