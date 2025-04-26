import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useUserStore } from '../UserStore'
import { testUser } from '@/components/__tests__/Utils'
import type { CreateUserFormDetails } from '@/types/CreateUserFormDetails'
import axios from 'axios'

vi.mock('axios', async () => {
	const actualAxios = await vi.importActual<typeof import('axios')>('axios')

	return {
		...actualAxios,
		default: {
			...actualAxios.default,
			get: vi.fn(async () => Promise.resolve({ data: [{ id: 1, name: 'Mock User' }] })),
		},
	}
})

describe('User Store', () => {
	beforeEach(() => {
		setActivePinia(createPinia())
	})

	it('sets a selected user', () => {
		const userStore = useUserStore()
		const user = testUser
		userStore.setSelectedUser(user)
		expect(userStore.getSelectedUser).toStrictEqual(user)
	})

	it('adds a user', () => {
		const userStore = useUserStore()
		const userDetails: CreateUserFormDetails = {
			name: 'First Last',
			username: 'Test',
			email: 'a@b.c',
			phone: 'x',
			companyName: 'company',
		}
		userStore.addUser(userDetails)
		expect(userStore.getAllUsers.length).toEqual(1)
	})

	it('fetches users from the correct endpoint', async () => {
		const userStore = useUserStore()
		await userStore.fetchAllUsers()
		expect.soft(axios.get).toHaveBeenCalledOnce()
		expect.soft(axios.get).toBeCalledWith('/')
	})
})
