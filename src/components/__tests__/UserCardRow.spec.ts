import { expect, it } from 'vitest'
import { describe } from 'vitest'
import { createWrapper } from './Utils'
import UserCardRow from '../UserCardRow.vue'

describe('UserCardRow', () => {
	it('renders UserCardRow onto the DOM', async () => {
		const wrapper = createWrapper(UserCardRow, { dataKey: 'key', dataValue: 'value' })
		expect.soft(wrapper.find('[data-testid = "user-card-row"]')).toBeTruthy()
		expect.soft(wrapper.find('[data-testid = "user-card-row-key"]')).toBeTruthy()
		expect.soft(wrapper.find('[data-testid = "user-card-row-value"]')).toBeTruthy()
	})
	it('displays the key', async () => {
		const wrapper = createWrapper(UserCardRow, { dataKey: 'key', dataValue: 'value' })
		const keyText = wrapper.find('[data-testid = "user-card-row-key"]')
		expect(keyText.text()).toBe('key')
	})
	it('displays the value', async () => {
		const wrapper = createWrapper(UserCardRow, { dataKey: 'key', dataValue: 'value' })
		const valueText = wrapper.find('[data-testid = "user-card-row-value"]')
		expect(valueText.text()).toBe('value')
	})
})
