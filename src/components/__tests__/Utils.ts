import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import type { Component } from 'vue'
import { vi } from 'vitest'
import type { User } from '@/types/User'
// import any store you want to interact with in tests

export const createWrapper = (component: Component, options = {}) => {
	return mount(component, {
		global: {
			plugins: [
				createTestingPinia({
					createSpy: vi.fn,
				}),
				// PrimeVue,
			],
			// components: {
			// 	Button,
			// },
		},
		...options,
	})
}

export const testUser: User = {
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
