<template>
	<div class="layout-footer">
		<img alt="Logo" :src="footerImage()" height="100" class="mr-2" />
		<p align-items-center><span class="font-medium ml-2">powered by CCI</span></p>
	</div>
</template>

<script>
	export default {
		name: "AppFooter",
		methods: {
			footerImage() {
				return 'images/pint/banner.png';
			}
		},
		computed: {
			darkTheme() {
				return this.$appState.darkTheme;
			}
		}
	}
</script>