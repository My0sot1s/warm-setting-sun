<template>
	<view class="main">
		<uni-nav-bar
			left-icon="person"
			shadow
			:border="false"
			fixed
			right-text="帮助"
		/>
		<view class="title">
			<text>请选择您需要的服务：</text>
		</view>
		<view class="buttons">
			<navigator
				url="/pages/user/house-service/house-service"
				hover-class="navigator-hover"
			>
				<SunButton text="家政服务 >" />
			</navigator>
			<navigator
				url="/pages/user/accompany-service/accompany-service"
				hover-class="navigator-hover"
			>
				<SunButton text="陪诊服务 >" />
			</navigator>
			<navigator
				url="/pages/psycho-care/psycho-care"
				hover-class="navigator-hover"
			>
				<SunButton text="心理关怀 >" />
			</navigator>
			<SunButton text="健康数据 >" />
		</view>
	</view>
	<TabBar
		centerText="服务"
		rightText="我的"
		centerUrl="/pages/user/choose-service/choose-service"
		rightUrl="/pages/user/my/my"
	/>
</template>

<script></script>

<style lang="less">
.main {
	padding-bottom: 30vw;
}
.title {
	font-size: 6vw;
	font-weight: lighter;
	padding: 7vw 0 7vw 10vw;
}
.buttons {
	height: 110vw;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	.sun-button {
		font-size: 6vw;
		width: 70vw;
		height: 15vw;
		border-radius: 5vw;
	}
}
</style>
