import { describe, expect, it } from 'vitest'

import { createWrapper, testUser } from './Utils'
import UserCard from '@/components/UserCard.vue'
import { useUserStore } from '@/stores/UserStore'
import type { User } from '@/types/User'
// import { createTestingPinia } from '@pinia/testing'

describe('UserListTable', () => {
	it('renders UserListTable onto the DOM', async () => {
		const wrapper = createWrapper(UserCard)
		const userStore = useUserStore()
		const user: User = testUser
		userStore.selectedUser = user
		await wrapper.vm.$nextTick
		// console.log(wrapper.html())
		expect(wrapper.find('[data-testid="user-card"]')).toBeTruthy()
	})
})
