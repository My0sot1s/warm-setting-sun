<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar :border="false" left-text="申请列表" fixed />
		</view>
		<view class="applyList">
			<ApplyCell v-for="cell in listData" :cellData="cell"></ApplyCell>
		</view>
		<TabBar
			centerText="审核"
			rightText="设置"
			centerUrl="/pages/platform/audit/audit"
			rightUrl="/pages/platform/settings/settings"
		/>
	</view>
</template>

<script setup>
import ApplyCell from '/components/ApplyCell.vue'
import { ref } from 'vue'
const listData = [
	{
		task: '起居照料',
		time: '2023-5-1',
		avatar: '/static/qiju.png'
	},
	{
		task: '聊天',
		time: '2023-5-1',
		avatar: '/static/liaotian.png'
	},
	{
		task: '理发',
		time: '2023-5-3',
		avatar: '/static/lifa.png'
	},
	{
		task: '助浴',
		time: '2023-5-5',
		avatar: '/static/zhuyu.png'
	},
	{
		task: '健康检查',
		time: '2023-5-6',
		avatar: '/static/jiankang.png'
	}
]
</script>

<style lang="less">
.applyList {
	padding: 5vw 0;
	padding-bottom: 30vw;
	background-color: rgb(238, 238, 238);
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: lighter;
}
</style>
