<template>
	<image src="../../static/bridge.png" mode="" class="title-bg"></image>
	<view class="main">
		<view class="header">
			<image src="../../static/avatar.png" mode="" class="avatar"></image>
			<view class="info">
				<text class="name">王建华</text>
				<navigator url="/pages/user/information/information"
					><text class="edit">编辑个人资料 ></text></navigator
				>
			</view>
			<image src="../../static/qr.png" mode="" class="qr"></image>
		</view>
		<view class="orders">
			<view class="order-item">
				<image src="../../static/appointment.png" mode=""></image>
				<text>我的预约</text>
			</view>
			<view class="order-item">
				<image
					src="../../static/paidOrder.png"
					mode=""
					class="middle-image"
				></image>
				<text>已支付订单</text>
			</view>
			<view class="order-item">
				<image src="../../static/doneOrder.png" mode=""></image>
				<text>已完成订单</text>
			</view>
		</view>
		<view class="details">
			<div class="detail-item">
				<image src="../../static/wallet.png" mode=""></image>
				<text class="detail-text">消费明细</text>
				<text class="arrow"></text>
			</div>
			<div class="detail-item">
				<image src="../../static/receipt.png" mode=""></image>
				<text class="detail-text">养老账单</text>
				<text class="arrow"></text>
			</div>
			<div class="detail-item">
				<image src="../../static/location.png" mode=""></image>
				<text class="detail-text">地址管理</text>
				<text class="arrow"></text>
			</div>
		</view>
		<view class="logout">
			<image src="../../static/power.png" mode=""></image>
			<navigator url="/pages/index/index"><text>退出登录</text></navigator>
		</view>
	</view>
	<TabBar />
</template>

<script></script>

<style lang="less" scoped>
.title-bg {
	position: absolute;
	width: 100vw;
	height: 45vw;
}
.main {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 25vw;
	padding-bottom: 30vw;
	background-color: rgb(238, 238, 238);
	.header {
		position: relative;
		width: 90vw;
		height: 25vw;
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 5vw;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 5vw;
		.avatar {
			width: 17vw;
			height: 17vw;
			margin-right: 5vw;
		}
		.info {
			display: flex;
			flex-direction: column;
			.name {
				font-size: 5vw;
				font-weight: 500;
			}
			.edit {
				font-size: 3vw;
			}
		}
		.qr {
			position: absolute;
			width: 7vw;
			height: 7vw;
			top: 4vw;
			right: 5vw;
		}
	}
	.orders {
		box-sizing: border-box;
		padding: 3vw 3vw;
		margin-top: 7vw;
		width: 90vw;
		height: 25vw;
		background-color: white;
		border-radius: 5vw;
		display: flex;
		justify-content: space-around;
		.order-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 25vw;
			image {
				width: 10vw;
				height: 10vw;
			}
			text {
				padding-top: 1vw;
				color: rgb(119, 119, 119);
			}
			.middle-image {
				width: 8vw;
			}
		}
	}
	.details {
		position: relative;
		box-sizing: border-box;
		padding: 3vw 7vw;
		margin-top: 7vw;
		width: 90vw;
		height: 60vw;
		background-color: white;
		border-radius: 5vw;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.detail-item {
			display: flex;
			align-items: center;
			image {
				width: 10vw;
				height: 10vw;
				margin-right: 3vw;
			}
			.detail-text {
				padding-top: 1vw;
				color: rgb(119, 119, 119);
			}
		}
	}
	.arrow {
		position: absolute;
		right: 8vw;
		width: 3vw;
		height: 3vw;
		color: rgb(119, 119, 119);
		border-right: 1px solid black;
		border-top: 1px solid black;
		transform: rotate(45deg);
	}
	.logout {
		box-sizing: border-box;
		width: 90vw;
		border-radius: 3vw;
		margin-top: 5vw;
		background-color: white;
		padding: 3vw 7vw;
		display: flex;
		align-items: center;
		image {
			width: 10vw;
			height: 10vw;
			margin-right: 3vw;
		}
		text {
			padding-top: 1vw;
			color: rgb(119, 119, 119);
		}
	}
}
</style>
