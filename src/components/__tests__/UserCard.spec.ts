import { describe, expect, it } from 'vitest'

import createWrapper from './Utils'
import UserCard from '@/components/UserCard.vue'
import { useUserStore } from '@/stores/UserStore'
import type { User } from '@/types/User'
// import { createTestingPinia } from '@pinia/testing'

describe('UserListTable', () => {
	it('renders UserListTable onto the DOM', async () => {
		const wrapper = createWrapper(UserCard)
		const userStore = useUserStore()
		const testUser: User = {
			name: 'Leanne Graham',
			username: 'Bret',
			email: 'Sincere@april.biz',
			address: {
				street: 'Kulas Light',
				suite: 'Apt. 556',
				city: 'Gwenborough',
				zipcode: '92998-3874',
				geo: {
					lat: '-37.3159',
					lng: '81.1496',
				},
			},
			phone: '1-770-736-8031 x56442',
			website: 'hildegard.org',
			company: {
				name: 'Romaguera-Crona',
				catchPhrase: 'Multi-layered client-server neural-net',
				bs: 'harness real-time e-markets',
			},
		}
		userStore.selectedUser = testUser
		await wrapper.vm.$nextTick
		// console.log(wrapper.html())
		expect(wrapper.find('[data-testid="user-card"]')).toBeTruthy()
	})
})
