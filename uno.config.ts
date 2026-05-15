import { defineConfig, presetAttributify, presetWind3 } from 'unocss'

export default defineConfig({
	presets: [
		presetWind3(),
		presetAttributify(),
	],
	theme: {
		colors: {
			primary: '#0055FF',
		},
	},
	shortcuts: {
		'badge': 'px-1.5 py-0.5 text-xs font-medium rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 print:bg-transparent print:border-1 print:border-slate-200',
		'section-title': 'flex items-center gap-2 text-lg font-bold border-b-2 border-slate-200 dark:border-slate-800 pb-1 mb-4 mt-6 print:mt-4 print:mb-2',
	},
})
