<template>
	<view class="container">
		<image
			src="../../static/indexBackGround.png"
			mode=""
			class="background"
		></image>
		<image src="../../static/logo.png" mode="" class="logo"></image>
		<view class="panel">
			<navigator url="/pages/login/login" hover-class="navigator-hover">
				<SunButton text="登录"></SunButton>
			</navigator>
			<navigator url="/pages/register/register" hover-class="navigator-hover">
				<SunButton text="注册"></SunButton>
			</navigator>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="less">
.container {
	box-sizing: border-box;
	height: 100vh;
}
.background {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
}
.logo {
	width: 50vw;
	height: 50vw;
	margin: 20vw 25vw;
}
.panel {
	display: flex;
	justify-content: space-around;
	width: 80vw;
	margin: 0 auto;
	padding: 2vw;
	.sun-button {
		width: 30vw;
		height: 10vw;
		padding: 2vw;
		font-size: 5vw;
	}
}
</style>
