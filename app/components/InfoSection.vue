<script setup lang="ts">
defineProps<{
	title: string
}>()
</script>

<template>
<section>
	<h2
		m="x--2 bs-4 be-2"
		p="x-2 y-1"
		b-b="2 solid slate-400/25"
		text="5"
	>
		{{ title }}
	</h2>
	<slot />
</section>
</template>
