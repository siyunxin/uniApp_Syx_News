<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height: statusBarHeight +'px'}"></view>
			<view class="navbar-content" :style="{height: navBarHeight+'px', width: windowWidth+'px'}">
				<view class="navbar-search" :style="{height: searchHeight+'px'}">
					<view class="navbar-search-icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search-content">uniapp, vue</view>
				</view>
			</view>
		</view>
		<view :style="{height: statusBarHeight+navBarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				searchHeight: 30,
				windowWidth: 375
			}
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			// 设置状态栏高度
			this.statusBarHeight = info.statusBarHeight
			this.windowWidth = info.windowWidth
			// h5 app mp-alipay
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo);
			// (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏内的高度) = 导航栏的高度
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left;
			this.searchHeight = menuButtonInfo.height;
			// #endif
			
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	.navbar {

		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;
			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				height: 45px;
				box-sizing: border-box;
				.navbar-search {
					display: flex;
					align-items: center;
					padding: 0 5px;
					width: 100%;
					height: 32px;
					border-radius: 30px;
					background-color: #fff;

					.navbar-search-icon {
						margin-left: 10px;
					}

					.navbar-search-content {
						width: 100%;
						font-size: 14px;
						color: #999;
						margin-left: 10px;
					}
				}
			}

		}

	}
</style>
