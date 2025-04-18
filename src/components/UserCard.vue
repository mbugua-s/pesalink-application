<script setup lang="ts">
// import { DataTable } from 'primevue'
// import { Column } from 'primevue'
import type { User } from '@/types/User'
import { computed } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import Card from 'primevue/card'

const userStore = useUserStore()
const selectedUser = computed<User>(() => userStore.getSelectedUser)
</script>

<template>
	<Card>
		<template #title> User Details </template>
		<template #content>
			Sample card showing selected user
			{{ selectedUser }}
		</template>
	</Card>
</template>

<style scoped></style>
