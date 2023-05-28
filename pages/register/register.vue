<template>
	<view class="box-bg">
		<uni-nav-bar
			:border="false"
			left-icon="left"
			right-text="服务人员"
			@clickLeft="back"
			@clickRight="toServerRegister"
		/>
	</view>
	<view class="container">
		<view class="panel">
			<text class="title">账号注册</text>
			<view class="input-group">
				<uni-easyinput
					v-model="value"
					focus
					placeholder="请输入手机号"
					@input="input"
				></uni-easyinput>
			</view>
			<view class="input-group">
				<uni-easyinput
					v-model="value"
					focus
					placeholder="请输入验证码"
					suffix-icon="paperplane"
					@input="input"
				></uni-easyinput>
			</view>
			<view class="input-group">
				<uni-easyinput
					type="password"
					v-model="password"
					placeholder="请输入密码(最少8位,字母+数字)"
				></uni-easyinput>
			</view>
			<text></text>
			<navigator
				url="/pages/login/login"
				@click="open"
				hover-class="navigator-hover"
			>
				<SunButton text="注册"></SunButton>
			</navigator>
		</view>
		<view class="footer">
			<text>其他登录方式</text>
			<image src="../../static/loginMethods.png" mode="aspectFit"></image>
			<uni-data-checkbox
				v-model="useless"
				:localdata="protocol"
			></uni-data-checkbox>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
const userName = ref('')
const showPassword = ref(true)
const showClearIcon = ref(false)
const useless = ref('')
const protocol = ref([
	{ text: '阅读并同意暖夕阳的《服务协议》和《个人信息保护指引》', value: 0 }
])
// 输入框样式
/* const styles = {
	color: '#2979FF',
	borderColor: '#000'
} */

function back() {
	uni.navigateBack()
}

function toServerRegister() {
	uni.navigateTo({
		url: '/pages/server/register/register'
	})
}

function clearInput(event) {
	userName.value = event.detail.value
	if (event.detail.value.length > 0) {
		showClearIcon.value = true
	} else {
		showClearIcon.value = false
	}
}
</script>

<style lang="less" scoped>
.container {
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.panel {
	.title {
		margin: 7vw 0;
		text-align: left;
		color: black;
		font-weight: lighter;
		font-size: 8vw;
	}
	.input-group {
		display: flex;
		align-items: center;
		width: 90vw;
		padding: 4vw 0;
		text {
			font-size: 5vw;
			margin-right: 2vw;
		}
		uni-easyinput {
			border: 1px solid black !important;
			border-radius: 10vw;
			height: 10vw;
			padding: 0 4vw;
			.is-focused {
				border: 1px solid red !important;
			}
		}
	}
	> text {
		color: gray;
		display: inline-block;
		width: 90vw;
		text-align: right;
		margin-bottom: 3vw;
	}
}
.footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	text {
		display: inline-block;
		transform: translate(0, 50%);
		width: 100vw;
		color: gray;
		font-size: 4vw;
		text-align: center;
	}
	image {
		height: 20vw;
	}
	uni-data-checkbox {
		padding: 0 6vw 5vw 6vw;
	}
}
</style>
