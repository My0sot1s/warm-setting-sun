<template>
	<view class="navigation">
		<view class="list">
			<navigator class="navigator" url="">
				<uni-icons type="home" size="30"></uni-icons>
				<text class="text">首页</text>
			</navigator>
		</view>
		<view class="list active">
			<navigator class="navigator" :url="props.centerUrl">
				<uni-icons type="vip" size="30" class="uni-icons"></uni-icons>
				<text class="text">{{ props.centerText }}</text>
			</navigator>
		</view>
		<view class="list">
			<navigator class="navigator" :url="props.rightUrl">
				<uni-icons :type="rightIcon" size="30"></uni-icons>
				<text class="text">{{ props.rightText }}</text>
			</navigator>
		</view>
		<view class="indicator"> </view>
	</view>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
	centerText: String,
	rightText: String,
	centerUrl: String,
	rightUrl: String
})
console.log(props)
const rightIcon = computed(() => {
	if (props.rightText === '我的') {
		return 'person'
	} else {
		return 'gear'
	}
})
</script>

<style lang="less">
.navigation {
	position: fixed;
	bottom: var(--window-bottom);
	width: 100vw;
	height: 20vw;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid #bbb;
	background-color: white;
	.list {
		position: relative;
		width: 33vw;
		z-index: 1;
		.navigator {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			width: 100%;
			text-align: center;
			font-weight: 500;
			.uni-icons {
				position: relative;
				display: block;
				transition: 0.5s;
			}
			.text {
				font-weight: 400;
				transition: 0.5s;
			}
		}
	}
	.active .navigator {
		.uni-icons {
			transform: translateY(-5vw);
		}
		.text {
			transform: translateY(-1vw);
		}
	}
	.indicator {
		position: absolute;
		top: -30%;
		width: 14vw;
		height: 14vw;
		background-color: orange;
		border-radius: 50%;
		box-shadow: 0px 0px 0px #ffaa00,
			inset 10px 10px 11px rgba(250, 252, 255, 0.48),
			inset -10px -10px 15px rgba(255, 191, 0, 0.2);
	}
}
</style>
