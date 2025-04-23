import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import type { Component } from 'vue'
import { vi } from 'vitest'
// import any store you want to interact with in tests

const createWrapper = (component: Component, options = {}) => {
	return mount(component, {
		global: {
			plugins: [
				createTestingPinia({
					createSpy: vi.fn,
				}),
			],
		},
		...options,
	})
}

export default createWrapper
