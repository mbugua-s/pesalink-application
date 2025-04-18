import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import UserDetailsView from '@/views/UserDetailsView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// {
		// 	path: '/',
		// 	name: 'home',
		// 	component: HomeView,
		// },
		{
			path: '/',
			name: 'home',
			component: UserDetailsView,
		},
		{
			path: '/user',
			name: 'user',
			component: UserDetailsView,
		},
	],
})

export default router
