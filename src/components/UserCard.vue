<script setup lang="ts">
import type { User } from '@/types/User'
import { computed, onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/UserStore'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import UserCardRow from '@/components/UserCardRow.vue'

const userStore = useUserStore()
const selectedUser = computed<User>(() => userStore.getSelectedUser)
// const selectedUser = ref()

// onMounted(() => {
// 	selectedUser.value = userStore.getSelectedUser as User
// })
</script>

<template>
	<Card class="card-container">
		<template #title> <h1>User Details</h1> </template>
		<template #content>
			<div v-if="selectedUser" class="user-card" data-testid="user-card">
				<div class="user-card-key-details">
					<img src="/src/assets/person.jfif" alt="profile-photo" />
					<p class="user-details-name">{{ selectedUser.name }}</p>
					<p class="user-details-user-name">"{{ selectedUser.username }}"</p>
				</div>

				<!-- <Divider layout="vertical" /> -->
				<div class="user-card-additional-details">
					<div class="details-section">
						<p class="details-label">General</p>
						<div class="details-group">
							<UserCardRow
								data-key="Email"
								:data-value="selectedUser.email"
								:remove-border-top="true"
							/>
							<UserCardRow data-key="Phone Number" :data-value="selectedUser.phone" />
							<UserCardRow data-key="Website" :data-value="selectedUser.website" />
						</div>
					</div>
					<Divider />
					<div class="details-section">
						<p class="details-label">Address</p>
						<div class="details-group">
							<UserCardRow
								data-key="Street"
								:data-value="selectedUser.address.street"
								:remove-border-top="true"
							/>
							<UserCardRow
								data-key="Suite"
								:data-value="selectedUser.address.suite"
							/>
							<UserCardRow data-key="City" :data-value="selectedUser.address.city" />
							<UserCardRow
								data-key="Zipcode"
								:data-value="selectedUser.address.zipcode"
							/>
							<UserCardRow
								data-key="Geographic Location"
								:data-value="`${selectedUser.address.geo.lat}, ${selectedUser.address.geo.lng}`"
							/>
						</div>
					</div>
					<Divider />
					<div v-if="selectedUser.company" class="details-section">
						<p class="details-label">Company</p>
						<div class="details-group">
							<UserCardRow
								data-key="Name"
								:data-value="selectedUser.company?.name"
								:remove-border-top="true"
							/>
							<UserCardRow
								data-key="Catchphrase"
								:data-value="selectedUser.company?.catchPhrase"
							/>
							<UserCardRow data-key="Bs" :data-value="selectedUser.company?.bs" />
						</div>
					</div>
				</div>
			</div>
			<div v-else>No user selected. Please click on a user from the list and try again</div>
		</template>
	</Card>
</template>

<style scoped>
.card-container {
	max-width: 70vw;
	margin: auto;
}

.user-card {
	display: flex;
	flex: 1;
}

.user-card-key-details {
	display: flex;
	flex-direction: column;
	/* width: 30%; */
	align-items: center;
}

.user-card-additional-details {
	display: flex;
	flex: 1;
	flex-direction: column;
	margin-left: 2vw;
}

img {
	border-radius: 50%;
	width: 15vw;
}

.details-section {
	display: flex;
	flex: 1;
	justify-content: space-between;
	width: 100%;
	padding-left: 2vw;
	padding-right: 2vw;
}

.details-label {
	font-size: 30px;
}

.details-group {
	width: 35vw;
}

.user-details-name {
	/* margin: auto; */
	font-size: 25px;
	font-weight: bold;
}

.user-details-user-name {
	/* margin: auto; */
	font-size: 20px;
	font-style: italic;
}
</style>
