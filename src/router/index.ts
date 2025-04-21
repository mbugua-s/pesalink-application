import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDetailsView from '@/views/UserDetailsView.vue'
import CreateUserView from '@/views/CreateUserView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/create',
			name: 'create',
			component: CreateUserView,
		},
		{
			path: '/viewUser',
			name: 'viewUser',
			component: UserDetailsView,
		},
	],
})

export default router
