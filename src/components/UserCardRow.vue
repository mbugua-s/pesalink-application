<script setup lang="ts">
interface Props {
	dataKey: string
	dataValue: string
	removeBorderTop?: boolean
}

const { dataKey, dataValue, removeBorderTop = false } = defineProps<Props>()
</script>

<template>
	<div class="row-container" :style="removeBorderTop && 'border-top: none'">
		<p class="row-key">{{ dataKey }}</p>
		<p>{{ dataValue }}</p>
	</div>
</template>

<style scoped>
.row-container {
	display: flex;
	flex: 1;
	justify-content: space-between;
	/* max-width: 35vw; */
	border-top: 1px solid var(--p-divider-border-color);
}

.row-key {
	font-weight: bold;
	font-style: italic;
}
</style>
