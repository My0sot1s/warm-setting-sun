<template>
	<view class="box-bg">
		<uni-nav-bar
			:border="false"
			left-icon="left"
			right-text="注册"
			@clickRight="toRegister"
		/>
	</view>
	<view class="container">
		<image src="../../static/sun_cloud.png" mode="" class="title-icon"></image>
		<view class="panel">
			<view class="input-group">
				<text>账号：</text>
				<uni-easyinput
					v-model="value"
					focus
					placeholder="手机号/用户名"
					@input="input"
				></uni-easyinput>
			</view>
			<view class="input-group">
				<text>密码：</text>
				<uni-easyinput
					type="password"
					v-model="password"
					placeholder="请输入密码"
				></uni-easyinput>
			</view>
			<text>忘记密码</text>
			<navigator
				url="/pages/choose-service/choose-service"
				hover-class="navigator-hover"
			>
				<SunButton text="登录"></SunButton>
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

function clearInput(event) {
	userName.value = event.detail.value
	if (event.detail.value.length > 0) {
		showClearIcon.value = true
	} else {
		showClearIcon.value = false
	}
}
function toRegister() {
	uni.navigateTo({
		url: '/pages/register/register'
	})
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
.title-icon {
	width: 40vw;
	height: 40vw;
	margin: 10vw 0;
}
.panel {
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
