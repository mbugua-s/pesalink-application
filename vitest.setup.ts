// vitest.setup.ts
import { config } from '@vue/test-utils'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

// Register PrimeVue globally for test components
config.global.plugins = [[PrimeVue]]
config.global.components = {
	Dialog,
	Button,
	// Add other PrimeVue components as needed
}
