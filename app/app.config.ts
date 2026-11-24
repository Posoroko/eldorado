// module augmentation is required for useAppConfig() to know this shape — a generic on defineAppConfig alone doesn't propagate
declare module 'nuxt/schema' {
	interface CustomAppConfig {
		appLayout?: {
			topBarHeight?: string
			showHideOnScroll?: boolean
		}
	}
}

export default defineAppConfig({
	appLayout: {
		topBarHeight: '350px',
		showHideOnScroll: true,
	},
})
