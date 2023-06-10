<template>
	<view class="done-deal">
		<view class="box-bg">
			<uni-nav-bar :border="false" left-icon="left" fixed
				><view class="input-view">
					<uni-icons
						class="input-uni-icon"
						type="search"
						size="18"
						color="#999"
					/>
					<input
						confirm-type="search"
						class="nav-bar-input"
						type="text"
						placeholder="陪诊"
						@confirm="confirm"
					/>
				</view>
				<block :slot="right">
					<view class="select">
						<view class="listIcon">
							<view class="line"> </view>
							<view class="line"> </view>
							<view class="line"> </view>
						</view>
						<text>筛选</text>
					</view>
				</block></uni-nav-bar
			>
		</view>
		<view class="applyList">
			<DealCell v-for="cell in listData" :cellData="cell"></DealCell>
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
import DealCell from '/components/DealCell.vue'
import { ref } from 'vue'
const listData = [
	{
		name: '陪同外出',
		time: '2023年6月5日-3小时',
		payment: '30.00',
		area: '洛江区',
		avatar: '/static/outgo.jpg'
	},
	{
		name: '冰箱清洗',
		time: '2023年6月1日-双开门',
		payment: '200.00',
		area: '鲤城区',
		avatar: '/static/foodDeliver.jpg'
	},
	{
		name: '上门助浴',
		time: '2023年5月21日-半护理',
		payment: '200.00',
		area: '丰泽区',
		avatar: '/static/chat.jpg'
	}
]
</script>

<style lang="less">
.box-bg {
	font-weight: 1000;
	.select {
		font-size: 3vw;
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
	padding-bottom: 50vw;
	background-color: rgb(238, 238, 238);
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: lighter;
}

@nav-height: 30px;
.box-bg {
	background-color: #f5f5f5;
	padding: 5px 0;
}

.select {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	// width: 160rpx;
	margin-left: 4px;
	position: absolute;
	top: 50%;
	right: 3vw;
	transform: translate(0, -50%);
}

.input-view {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	// width: 500rpx;
	flex: 1;
	background-color: #f8f8f8;
	height: @nav-height;
	border-radius: 15px;
	padding: 0 15px;
	flex-wrap: nowrap;
	margin: 7px 0;
	line-height: @nav-height;
}

.input-uni-icon {
	line-height: @nav-height;
}

.nav-bar-input {
	height: @nav-height;
	line-height: @nav-height;
	/* #ifdef APP-PLUS-NVUE */
	width: 370rpx;
	/* #endif */
	padding: 0 5px;
	font-size: 12px;
	background-color: #f8f8f8;
}
</style>
