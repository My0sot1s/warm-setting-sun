<template>
	<view class="cell">
		<image :src="props.cellData.avatar" mode=""></image>
		<view class="detail">
			<view class="group">
				<text class="name">{{ props.cellData.name }}</text>
				<uni-tag :text="props.cellData.area" type="warning" />
			</view>
			<text class="time">{{ props.cellData.time }}</text>
			<text class="ability">实付款：{{ props.cellData.payment }}</text>
		</view>
		<view class="buttons">
			<view @click="notice">
				<SunButton text="评价"></SunButton>
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	cellData: Object
})
function notice() {
	/* uni.showToast({
		title: '操作成功！',
		duration: 2000
	}) */
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
		.time {
			font-size: 3vw;
			color: gray;
			margin-top: 1.5vw;
		}
		.ability {
			font-size: 3vw;
			margin-top: 1vw;
			font-weight: bolder;
		}
	}
	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: auto;
		width: 18vw;
		view {
			view {
				height: 4vw;
				margin: 1vw 0;
				border-radius: 10vw;
			}
		}
	}
}
</style>