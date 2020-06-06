<template>
	<view class="content">
		<navbar></navbar>
		<menubar :list="menuList" @handleMenuItem="menuItem"></menubar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				menuList: []
			}
		},
		onLoad() {

		},
		methods: {
			queryLabel() {
				console.log(this.$api)
				this.$api.get_label().then((res) => {
					this.menuList = res
				})
			},
			
			//menu 传递obj
			menuItem(obj) {
				console.log(obj)
			}
		},
		created() {
			this.queryLabel()
		}
	}
</script>

<style>

</style>
