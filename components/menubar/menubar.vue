<template>
	<view class="menu">
		<scroll-view class="menu-scroll" scroll-x="true">
			<view class="box">
				<view v-for="(item, index) in list" 
				:key="item.id" class="box-item" 
				:class="{'box-item-active': activeIndex===index}"
				 @click="handleMenu(item, index)">
				 {{ item.name }}</view>
			</view>
			
		</scroll-view>
		<view class="menu-icons" @click="open">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			list:{
				type: Array
			}
		},
		data() {
			return {
				activeIndex: 0
			}
		},
		methods: {
			handleMenu(item, index) {
				this.activeIndex = index
				this.$emit('handleMenuItem', {
					data: item,
					index
				})
			},
			open() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.menu {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #f5f5f5;
		.menu-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.box {
				height: 40px;
				display: flex;
				align-items: center;
				.box-item {
					flex-shrink: 0;
					padding: 0 10px;
				}
				.box-item-active {
					color: $mk-base-color;
				}
			}
		}
		.menu-icons {
			position: relative;
			justify-content: center;
			align-items: center;
			width: 40px;
			height: 40px;
			display: flex;
			
			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
		
	}
</style>
