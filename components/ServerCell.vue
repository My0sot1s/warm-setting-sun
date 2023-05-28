<template>
	<view class="cell">
		<image :src="props.cellData.avatar" mode=""></image>
		<view class="detail">
			<text>{{ props.cellData.name }}</text>
			<text class="ability">{{ props.cellData.ability }}</text>
		</view>
		<view class="buttons">
			<SunButton text="派单"></SunButton>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	cellData: Object
})
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
		.ability {
			font-size: 3vw;
			margin-top: 2vw;
		}
	}
	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: auto;
		width: 22vw;
		view {
			height: 4vw;
			margin: 1vw 0;
			border-radius: 10vw;
		}
	}
}
</style>
