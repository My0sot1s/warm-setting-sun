<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar :border="false" left-text="家政服务" fixed />
		</view>
		<view class="header">
			<view class="add"><text> 添加服务地址 ></text></view>
			<view class="select">
				<view class="listIcon">
					<view class="line"> </view>
					<view class="line"> </view>
					<view class="line"> </view>
				</view>
				<text>筛选</text>
			</view>
		</view>
		<view class="applyList">
			<TagCell v-for="cell in listData" :cellData="cell"></TagCell>
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
import TagCell from '/components/TagCell.vue'
import { ref } from 'vue'
const listData = [
	{
		name: '打扫居室',
		company: '厦门智宇信息技术有限公司',
		area: '丰泽区',
		avatar: '/static/cleanRoom.jpg'
	},
	{
		name: '打扫卫生',
		company: '泉州市洛江区和康智慧养老产业有限公司',
		area: '洛江区',
		avatar: '/static/cleanUp.jpg'
	},
	{
		name: '冰箱清洗',
		company: '厦门智宇信息技术有限公司',
		area: '鲤城区',
		avatar: '/static/refrigerator.jpg'
	},
	{
		name: '家务整理',
		company: '厦门智宇信息技术有限公司',
		area: '鲤城区',
		avatar: '/static/houseKeeping.jpg'
	},
	{
		name: '玻璃清洗',
		company: '厦门智宇信息技术有限公司',
		area: '晋江市',
		avatar: '/static/glass.jpg'
	}
]
</script>

<style lang="less">
.box-bg {
	font-weight: 1000;
}
.header {
	display: flex;
	justify-content: space-between;
	background-color: rgb(238, 238, 238);
	padding: 2vw 7vw 0vw 7vw;
	font-size: 3vw;
	font-weight: bolder;
	.select {
		border: 1px solid black;
		width: 13vw;
		height: 5vw;
		border-radius: 2.5vw;
		display: flex;
		align-items: center;
		.listIcon {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			box-sizing: border-box;
			padding: 1vw;
			margin-right: 0.3vw;
			.line {
				transform: translateY(0.5vw);
				border-top: 1px solid black;
				width: 3vw;
				height: 0.8vw;
			}
		}
	}
}
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
