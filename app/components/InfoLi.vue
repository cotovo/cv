<script setup lang="ts">
defineProps<{
	icon: string
	label: string
}>()
</script>

<template>
<li flex="~ items-center" leading="normal" m="bs-0">
	<Icon :name="icon" m="e-1" />
	<span flex="shrink-0">{{ label }}：</span>
	<slot />
</li>
</template>
