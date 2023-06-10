<template>
	<view class="cell">
		<image :src="props.cellData.avatar" mode=""></image>
		<view class="detail">
			<view class="group">
				<text class="name">{{ props.cellData.name }}</text>
				<uni-tag :text="props.cellData.area" type="warning" />
			</view>
			<text class="ability">{{ props.cellData.company }}</text>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	cellData: Object
})
function notice() {
	uni.showToast({
		title: '操作成功！',
		duration: 2000
	})
}
console.log(props)
</script>

<style lang="less">
.cell {
	box-sizing: border-box;
	width: 90vw;
	height: 20vw;
	background-color: white;
	border-radius: 4vw;
	margin-bottom: 6vw;
	display: flex;
	align-items: center;
	padding: 0 5vw;
	image {
		width: 15vw;
		height: 15vw;
		margin-right: 4vw;
		border-radius: 50%;
	}
	.detail {
		display: flex;
		flex-direction: column;
		.group {
			display: flex;
			align-items: center;
			.name {
				font-weight: 700;
				margin-right: 6vw;
			}
		}
		.ability {
			font-size: 3vw;
			margin-top: 2vw;
		}
	}
}
</style>
