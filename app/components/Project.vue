<script setup lang="ts">
defineProps<{
	name: string
	desc: string
	role?: string
	from: string
	to?: string
	link?: string
	techs?: Tech[]
}>()
</script>

<template>
<section m="y-2">
	<div bg="slate-400/15" m="x--2 y-1.5" p="x-2 y-.5" rounded="md">
		<span m="ie-2" font="bold">{{ name }}</span>
		<span float="end">{{ from }} - {{ to ?? '至今' }}</span>
		<span flex="inline" m="ie-2" text="slate-500 @dark:slate">{{ desc }}{{ role ? ` · ${role}` : '' }}</span>
	</div>

	<p text="sm" m="y-1" tracking="normal" class="empty:hidden">
		<InfoLink v-if="link" :to="link" float="end" />

		<span v-for="tech in techs" :key="tech" m="not-last:ie-2" inline-flex items-center text="nowrap" opacity="80">
			<Icon :name="getTechIcon(tech)" un-size="3.5" />
			<span m="is-.5" text="3.2">{{ tech }}</span>
		</span>
	</p>

	<slot />
</section>
</template>
