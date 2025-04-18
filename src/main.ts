import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
import { DataTable } from 'primevue'
import { Column } from 'primevue'
import { Menubar } from 'primevue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
})

app.mount('#app')

// Disabling eslint here as we need to declare the PrimeVue components that will be used
// throughout the application, and their names conflict with defined rules

/* eslint-disable */
app.component('Button', Button)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Menubar', Menubar)
/* eslint-enable */
