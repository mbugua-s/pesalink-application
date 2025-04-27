import { beforeAll } from 'vitest'
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import { ToastService } from 'primevue'
import Tooltip from 'primevue/tooltip'
import { config } from '@vue/test-utils'

beforeAll(() => {
	config.global.plugins = [PrimeVue, ToastService]
	config.global.components = {
		Dialog,
		Button,
		Toast,
	}
	config.global.directives = {
		tooltip: Tooltip,
	}
})
