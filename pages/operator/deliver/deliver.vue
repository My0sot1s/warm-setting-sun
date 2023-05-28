<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar :border="false" left-text="服务者列表" fixed />
		</view>
		<view class="applyList">
			<ServerCell v-for="cell in listData" :cellData="cell"></ServerCell>
		</view>
		<TabBar
			centerText="派单"
			rightText="管理"
			centerUrl="/pages/operator/deliver/deliver"
			rightUrl="/pages/operator/audit/audit"
		/>
	</view>
</template>

<script setup>
import ServerCell from '/components/ServerCell.vue'
import { ref } from 'vue'
const listData = [
	{
		name: '王XX',
		ability: '家政',
		avatar: '/static/qiju.png'
	},
	{
		name: '吴XX',
		ability: '聊天',
		avatar: '/static/liaotian.png'
	},
	{
		name: '陈XX',
		ability: '家政',
		avatar: '/static/lifa.png'
	},
	{
		name: '赵XX',
		ability: '助浴',
		avatar: '/static/zhuyu.png'
	},
	{
		name: '李XX',
		ability: '陪诊',
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
