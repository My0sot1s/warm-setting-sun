<template>
	<view class="box-bg">
		<uni-nav-bar :border="false" title="个人信息" left-icon="left" />
	</view>
	<view class="main">
		<view class="base-information">
			<view class="avatar-picker">
				<uni-file-picker
					limit="1"
					:del-icon="false"
					disable-preview
					:imageStyles="imageStyles"
					file-mediatype="image"
				></uni-file-picker>
			</view>
			<view class="title">
				<text>基本信息</text>
			</view>
			<view class="user-identity">
				<text>用户身份</text>
				<uni-data-checkbox
					v-model="ratioIdentity"
					:localdata="identity"
				></uni-data-checkbox>
			</view>
			<view class="user-input">
				<text>姓名</text>
				<uni-easyinput
					:inputBorder="false"
					v-model="value"
					placeholder="请输入姓名"
					@input="input"
				></uni-easyinput>
			</view>
			<view class="user-sex">
				<text>性别</text>
				<uni-data-checkbox
					v-model="ratioSex"
					:localdata="sex"
				></uni-data-checkbox>
			</view>
			<view class="user-input">
				<text>身份证号</text>
				<uni-easyinput
					:inputBorder="false"
					v-model="value"
					placeholder="请输入身份证号"
					@input="input"
				></uni-easyinput>
			</view>
		</view>
		<view class="more-information">
			<view class="title">
				<text>监护人信息</text>
			</view>
			<view class="user-input">
				<text>姓名</text>
				<uni-easyinput
					:inputBorder="false"
					v-model="value"
					placeholder="请输入姓名"
					@input="input"
				></uni-easyinput>
			</view>
			<view class="user-input">
				<text>手机号码</text>
				<uni-easyinput
					:inputBorder="false"
					v-model="value"
					placeholder="请输入手机号码"
					@input="input"
				></uni-easyinput>
			</view>
			<view class="user-input">
				<text>地址</text>
				<uni-easyinput
					:inputBorder="false"
					v-model="value"
					placeholder="请输入地址"
					@input="input"
				></uni-easyinput>
			</view>
		</view>
		<navigator url="/pages/my/my"><SunButton text="保存" /></navigator>
	</view>
</template>

<script setup>
import { ref } from 'vue'
const imageStyles = {
	height: 80, // 边框高度
	width: 80, // 边框宽度
	border: {
		// 如果为 Boolean 值，可以控制边框显示与否
		color: '#eee', // 边框颜色
		width: '1px', // 边框宽度
		style: 'solid', // 边框样式
		radius: '50%' // 边框圆角，支持百分比
	}
}
/* const defaultAvatar = [
	{
		url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg'
		name: 'default.jpg',
		extname: 'jpg',
	}
] */
const ratioSex = ref(0)
const ratioIdentity = ref(0)
const identity = ref([
	{
		text: '监护人',
		value: 0
	},
	{
		text: '老人',
		value: 1
	}
])
const sex = ref([
	{
		text: '男',
		value: 0
	},
	{
		text: '女',
		value: 1
	}
])
</script>

<style lang="less">
.main {
	background-color: rgb(238, 238, 238);
	display: flex;
	flex-direction: column;
	align-items: center;
	.title {
		width: 100%;
		font-size: 6vw;
		font-weight: lighter;
	}
	.user-input {
		box-sizing: border-box;
		width: 100%;
		height: 13vw;
		display: flex;
		align-items: center;
		padding: 1vw 1vw;
		margin: 4vw 0;
		border-bottom: 2px solid rgb(238, 238, 238);
		text {
			margin-right: 4vw;
		}
		uni-easyinput {
			box-sizing: border-box;
		}
	}
	.base-information {
		box-sizing: border-box;
		margin: 5vw 0;
		padding: 5vw;
		background-color: white;
		width: 90vw;
		border-radius: 4vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		.avatar-picker {
			margin-bottom: 10vw;
		}
		.user-identity {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			padding: 1vw 1vw;
			margin: 4vw 0;
			border-bottom: 2px solid rgb(238, 238, 238);
			text {
				margin-right: auto;
			}
		}
		.user-sex {
			box-sizing: border-box;
			width: 100%;
			display: flex;
			padding: 1vw 1vw;
			margin: 4vw 0;
			border-bottom: 2px solid rgb(238, 238, 238);
			text {
				margin-right: auto;
			}
		}
	}
	.more-information {
		width: 90vw;
		background-color: white;
		border-radius: 4vw;
		box-sizing: border-box;
		margin: 5vw 0;
		padding: 5vw;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.sun-button {
		width: 80vw;
		margin: 5vw 0 10vw 0;
	}
}
</style>
