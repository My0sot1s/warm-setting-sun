<template>
	<view class="box-bg">
		<uni-nav-bar
			shadow
			:border="false"
			title="您的身份: 服务人员"
			left-icon="left"
			@clickLeft="back"
		/>
	</view>
	<view class="main">
		<view class="buttons">
			<view class="" @click="choose(0)">
				<SunButton :class="{ inactive: choices[0] }" text="家政人员" />
			</view>
			<view class="" @click="choose(1)">
				<SunButton :class="{ inactive: choices[1] }" text="陪诊人员" />
			</view>
		</view>
		<view class="user-input">
			<text>真实姓名:</text>
			<uni-easyinput
				:inputBorder="false"
				v-model="value"
				placeholder="请输入姓名"
				@input="input"
			></uni-easyinput>
		</view>
		<view class="user-sex">
			<text>性别:</text>
			<uni-data-checkbox
				v-model="ratioSex"
				:localdata="sex"
			></uni-data-checkbox>
		</view>
		<view class="user-input">
			<text>出生日期:</text>
			<uni-datetime-picker
				type="date"
				:clear-icon="false"
				v-model="single"
				@maskClick="maskClick"
				:border="false"
			/>
		</view>
		<view class="user-input">
			<text>手机号码:</text>
			<uni-easyinput
				:inputBorder="false"
				v-model="value"
				placeholder="请输手机号"
				@input="input"
			></uni-easyinput>
		</view>
		<view class="user-input">
			<text>验证码:</text>
			<uni-easyinput
				:inputBorder="false"
				v-model="value"
				focus
				placeholder="请输入验证码"
				suffix-icon="paperplane"
				@input="input"
			></uni-easyinput>
		</view>
		<view class="user-input">
			<text>密码:</text>
			<uni-easyinput
				:inputBorder="false"
				type="password"
				v-model="password"
				placeholder="请输入密码"
			></uni-easyinput>
		</view>
		<view class="user-input">
			<text>确认密码:</text>
			<uni-easyinput
				:inputBorder="false"
				type="password"
				v-model="password"
				placeholder="请确认密码"
			></uni-easyinput>
		</view>
		<uni-file-picker
			class="user-input"
			limit="3"
			title="认证证书图片"
		></uni-file-picker>
		<view class="promise">
			<uni-data-checkbox
				v-model="useless"
				:localdata="protocol"
			></uni-data-checkbox>
		</view>
		<view class="btn" @click="submit"><SunButton text="提交"></SunButton></view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
// 人员类别
const choices = ref([false, true])
function choose(index) {
	if (index === 0) {
		choices.value[1] = true
		choices.value[0] = false
	} else {
		choices.value[0] = true
		choices.value[1] = false
	}
}

const ratioSex = ref(0)
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

const protocol = ref([{ text: '本人承认以上信息均为真实信息', value: 0 }])

function back() {
	uni.reLaunch({
		url: '/pages/index/index'
	})
}

function submit() {
	uni.reLaunch({
		url: '/pages/index/index'
	})
}
</script>

<style lang="less">
.main {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10vw;
	.buttons {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 25vw;
		view {
			width: 30vw;
			border-radius: 5vw;
		}
		.inactive {
			view {
				background-color: white;
				color: black;
				box-shadow: none;
				border: 1px solid black;
			}
		}
	}
	.user-input {
		box-sizing: border-box;
		width: 100%;
		height: 13vw;
		display: flex;
		align-items: center;
		padding: 1vw 1vw;
		margin: 2vw 0;
		text {
			margin-right: 4vw;
		}
		uni-easyinput {
			box-sizing: border-box;
		}
	}
	.user-sex {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		padding: 1vw 1vw;
		margin: 2vw 0;
		text {
			margin-right: auto;
		}
	}
	.uni-file-picker {
		padding-left: 1vw;
	}
	.promise {
		width: 100%;
		padding: 5vw 0;
		transform: translateX(-2vw);
	}
	.btn {
		width: 90vw;
		padding: 3vw 0 10vw 0;
	}
}
</style>
