import { expect, it } from 'vitest'
import { describe } from 'vitest'
import { createWrapper } from './Utils'
import CreateUserCard from '@/components/CreateUserCard.vue'

describe('CreateUserCard', () => {
	it('renders CreateUserCard onto the DOM', async () => {
		const wrapper = createWrapper(CreateUserCard)
		expect(wrapper.find('.card-container')).toBeTruthy()
	})
	it('warns the user when details are invalid', async () => {
		const wrapper = createWrapper(CreateUserCard)
		const submitButton = wrapper.find('[data-testid="create-user-card-submit-button"]')
		await submitButton.trigger('click')
		// Using a timeout. nextTick() is a better approach, but I can't get it to work properly
		await new Promise((resolve) => setTimeout(resolve, 100))
		const toast = document.body.querySelector('.p-toast-summary')
		expect(toast?.textContent).toBe('Invalid user details')
	})
})
