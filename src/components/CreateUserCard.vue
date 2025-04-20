<script setup lang="ts">
import Card from 'primevue/card'
import { InputNumber } from 'primevue'
import { InputText } from 'primevue'
import { Message } from 'primevue'
import { ref } from 'vue'

import { zodResolver } from '@primevue/forms/resolvers/zod'
import { Form } from '@primevue/forms'
import { useToast } from 'primevue/usetoast'
import { Toast } from 'primevue'
import { z } from 'zod'

const toast = useToast()
const initialValues = ref({
	username: '',
	email: '',
})

const resolver = ref(
	zodResolver(
		z.object({
			username: z.string().min(1, { message: 'Username is required.' }),
			email: z
				.string()
				.min(1, { message: 'Email is required.' })
				.email({ message: 'Invalid email address.' }),
		}),
	),
)

const onFormSubmit = ({ valid }: { valid: boolean }) => {
	if (valid) {
		toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 })
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
						<InputText name="fullnanme" type="text" placeholder="Full Name" />
						<Message
							v-if="$form.username?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.username.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<InputText name="username" type="text" placeholder="Username" />
						<Message
							v-if="$form.username?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.username.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<InputText name="email" type="text" placeholder="Email" />
						<Message
							v-if="$form.email?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.email.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<InputNumber name="phone" type="text" placeholder="Phone Number" />
						<Message
							v-if="$form.email?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.email.error?.message }}</Message
						>
					</div>
					<div class="form-input">
						<InputText name="company_name" type="text" placeholder="Company Name" />
						<Message
							v-if="$form.username?.invalid"
							severity="error"
							size="small"
							variant="simple"
							>{{ $form.username.error?.message }}</Message
						>
					</div>
					<Button
						type="submit"
						severity="primary"
						label="Submit"
						class="submit-button"
					></Button>
				</Form>
			</div>
			<Toast />
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
	margin: 1vh 1vw;
	/* width: 40vw; */
}

.submit-button {
	display: flex;
	margin: auto;
}
</style>
