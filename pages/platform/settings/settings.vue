<template>
	<view>
		<view class="box-bg">
			<uni-nav-bar :border="false" left-text="管理设置" />
		</view>
		<view class="main">
			<view
				class="setting-cell"
				v-for="item in settingList"
				@click="routeJump(item.route)"
			>
				<text>{{ item.name }}</text></view
			>
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
import { ref } from 'vue'
const settingList = ref([
	{
		name: '运营商管理',
		route: ''
	},
	{
		name: '管理员设置',
		route: ''
	},
	{
		name: '服务品类管理',
		route: ''
	},
	{
		name: '退出登录',
		route: '/pages/index/index'
	}
])
function routeJump(route) {
	if (route === '/pages/index/index') {
		uni.reLaunch({
			url: route
		})
	}
}
</script>

<style lang="less">
/* .uni-navbar-btn-text {
	width: 100vw;
}
.uni-navbar-btn-text text {
	font-size: 6vw !important;
} */
.main {
	box-sizing: border-box;
	background-color: rgb(238, 238, 238);
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10vw 0;
	padding-bottom: 30vw;
	min-height: calc(100vh - 30vw);
	.setting-cell {
		box-sizing: border-box;
		width: 90vw;
		height: 12vw;
		line-height: 12vw;
		margin-bottom: 6vw;
		border-radius: 3vw;
		background-color: white;
		padding: 0 5vw;
		box-shadow: 1px 3px 3px #bbb;
	}
}
</style>
