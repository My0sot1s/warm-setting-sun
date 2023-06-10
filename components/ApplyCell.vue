<template>
	<view class="cell">
		<image :src="props.cellData.avatar" mode=""></image>
		<view class="detail">
			<text>{{ props.cellData.task }}</text>
			<view class="time-cell">
				<uni-icons type="calendar" size="5vw"></uni-icons>
				<text>{{ props.cellData.time }}</text>
			</view>
		</view>
		<view class="buttons">
			<view @click="notice">
				<SunButton text="通过"></SunButton>
			</view>
			<view @click="notice">
				<SunButton text="驳回"></SunButton>
			</view>
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
	}
	.detail {
		display: flex;
		flex-direction: column;
		.time-cell {
			uni-icons {
				margin-right: 1vw;
			}
			margin-top: 2vw;
			font-size: 4vw;
		}
	}
	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: auto;
		width: 22vw;
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
