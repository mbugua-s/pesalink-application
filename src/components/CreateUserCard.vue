<script setup lang="ts">
import Card from 'primevue/card'
import { InputText } from 'primevue'
import { Message } from 'primevue'
import FloatLabel from 'primevue/floatlabel'
import { ref } from 'vue'

import { zodResolver } from '@primevue/forms/resolvers/zod'
import { Form, type FormSubmitEvent } from '@primevue/forms'
import { useToast } from 'primevue/usetoast'
import { Toast } from 'primevue'
import { z } from 'zod'
import router from '@/router'
import { useUserStore } from '@/stores/UserStore'
import type { CreateUserFormDetails } from '@/types/CreateUserFormDetails'

const toast = useToast()
const userStore = useUserStore()

// Using actual values for the initial values for the purposes of testing

// const initialValues = ref({
// 	firstName: 'First',
// 	lastName: 'Last',
// 	username: 'user-name',
// 	email: 'username@test.com',
// 	phoneNumber: '+254740538943',
// 	companyName: 'Company Name',
// })

const initialValues = ref({
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	phoneNumber: '',
	companyName: '',
})

const resolver = ref(
	zodResolver(
		z.object({
			firstName: z.string().trim().min(1, { message: 'First Name is required.' }),
			lastName: z.string().trim().min(1, { message: 'Last Name is required.' }),
			username: z.string().trim().min(1, { message: 'Username is required.' }),
			email: z
				.string()
				.min(1, { message: 'Email is required.' })
				.email({ message: 'Invalid email address.' }),
			phoneNumber: z
				.string()
				.trim()
				.regex(
					/^(\+?\d{1,3})?[\s.-]?(\(?\d{3}\)?)[\s.-]?(\d{3})[\s.-]?(\d{4})$/,
					'Invalid phone number',
				),
			companyName: z.string().trim().min(1, { message: 'Company name is required.' }),
		}),
	),
)

const onFormSubmit = ({ valid, values }: FormSubmitEvent) => {
	if (valid) {
		toast.add({ severity: 'success', summary: 'User details captured', life: 2000 })
		const createdUserDetails: CreateUserFormDetails = {
			name: `${values.firstName} ${values.lastName}`,
			username: values.username,
			email: values.email,
			phone: values.phoneNumber,
			companyName: values.companyName,
		}
		// console.log(createdUserDetails)
		userStore.addUser(createdUserDetails)
		router.replace('/')
	} else {
		toast.add({ severity: 'error', summary: 'Invalid user details', life: 3000 })
	}
}
</script>

<template>
	<Card class="card-container">
		<template #title> <h1 class="card-title">Create A New User</h1> </template>
		<template #content>
			<div class="user-card">
				<Form
					v-slot="$form"
					:resolver="resolver"
					:initialValues="initialValues"
					@submit="onFormSubmit"
					class="form-container"
				>
					<div class="form-input">
						<FloatLabel variant="in">
							<InputText
								class="input-field"
								name="firstName"
								type="text"
								autocomplete="off"
							/>
							<label for="firstName">First Name</label>
						</FloatLabel>
						<Message
							v-if="$form.firstName?.invalid"
							severity="error"
							size="small"
							variant="simple"
							data-testid="create-user-form-first-name-message"
							>{{ $form.firstName.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<FloatLabel variant="in">
							<InputText
								class="input-field"
								name="lastName"
								type="text"
								autocomplete="off"
							/>
							<label for="lastName">Last Name</label>
						</FloatLabel>
						<Message
							v-if="$form.lastName?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.lastName.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<FloatLabel variant="in">
							<InputText class="input-field" name="username" type="text" />
							<label for="username">User Name</label>
						</FloatLabel>
						<Message
							v-if="$form.username?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.username.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<FloatLabel variant="in">
							<InputText class="input-field" name="email" type="text" />
							<label for="email">Email Address</label>
						</FloatLabel>
						<Message
							v-if="$form.email?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.email.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<FloatLabel variant="in">
							<InputText class="input-field" name="phoneNumber" type="text" />
							<label for="phoneNumber">Phone Number</label>
						</FloatLabel>
						<Message
							v-if="$form.phoneNumber?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.phoneNumber.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<FloatLabel variant="in">
							<InputText class="input-field" name="companyName" type="text" />
							<label for="companyName">Company Name</label>
						</FloatLabel>
						<Message
							v-if="$form.companyName?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.companyName.error?.message }}</Message
						>
					</div>
					<Button
						type="submit"
						severity="primary"
						label="Submit"
						class="submit-button"
						data-testid="create-user-card-submit-button"
					></Button>
				</Form>
			</div>
			<Toast data-testid="create-user-card-toast" />
		</template>
	</Card>
</template>

<style scoped>
.card-container {
	max-width: 70vw;
	margin: auto;
}

.card-title {
	display: flex;
	justify-content: center;
}

.user-card {
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
}

.form-container {
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.form-input {
	display: flex;
	flex-direction: column;
	margin: 1vh 1vw;
	width: 40vw;
	justify-content: center;
	align-items: center;
}

.submit-button {
	display: flex;
	margin: auto;
	width: 20vw;
}

.input-field {
	min-width: 20vw;
}
</style>
