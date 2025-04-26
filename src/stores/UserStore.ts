// import { ref, computed } from 'vue'
import type { CreateUserFormDetails } from '@/types/CreateUserFormDetails'
import type { User } from '@/types/User'
import { defineStore } from 'pinia'
import axios from 'axios'

const axios_instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/users',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const useUserStore = defineStore('User', {
	state: () => ({
		allUsers: [] as User[],
		selectedUser: null as unknown,
	}),
	getters: {
		getAllUsers: (state): User[] => state.allUsers,
		getSelectedUser: (state): User => state.selectedUser as User,
	},
	actions: {
		async fetchAllUsers(): Promise<boolean> {
			try {
				const response = await axios_instance.get('/')
				const allUsers: User[] = await response.data
				this.allUsers = allUsers
				return true
				// In a real production app we would log the error using a tool
				// like Sentry. For now, we won't use the error generated, hence
				// disabling eslint here
				/* eslint-disable */
			} catch (error) {
				/* eslint-enable */
				return false
			}
		},
		setSelectedUser(selectedUser: User) {
			this.selectedUser = selectedUser
		},
		addUser(userDetails: CreateUserFormDetails) {
			const addedUser: User = {
				name: userDetails.name,
				username: userDetails.username,
				email: userDetails.email,
				address: {
					street: '',
					suite: '',
					city: '',
					zipcode: '',
					geo: {
						lat: '',
						lng: '',
					},
				},
				phone: userDetails.phone.toString(),
				website: '',
				company: {
					name: userDetails.companyName,
					catchPhrase: '',
					bs: '',
				},
			}

			this.allUsers.push(addedUser)
		},
	},
})
