<template>
	<view class="sun-button"
		><text>{{ props.text }}</text></view
	>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['text'])
</script>

<style lang="less" scoped>
view {
	padding: 2vw;
	border-radius: 3vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: orange;
	color: white;
	box-shadow: 0px 0px 0px #ffaa00,
		inset 10px 10px 11px rgba(250, 252, 255, 0.48),
		inset -10px -10px 15px rgba(46, 129, 255, 0.22);
}
</style>
