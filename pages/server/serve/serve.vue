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
			<text>您已接单，请尽快赶到服务地点</text>
		</view>
		<view class="buttons">
			<SunButton text="服务地点导航" />
			<SunButton text="服务过程监管" />
			<SunButton text="医疗明细上传" />
			<SunButton text="申诉窗口" />
		</view>
	</view>
	<TabBar
		centerText="服务"
		rightText="我的"
		centerUrl=""
		rightUrl="/pages/server/my/my"
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
	padding: 8vw 0 5vw 0;
	text-align: center;
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
