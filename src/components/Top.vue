<template>
	<div class="top">
		<div class="left">
			<div class="title">组件编辑器</div>
			<div class="version">{{ version }}</div>
		</div>
		<div class="right">
			<LineOutlined class="control-btn" @click="sendMessage('minimize')"></LineOutlined>
			<BorderOutlined class="control-btn" @click="sendMessage('maximize')"></BorderOutlined>
			<CloseOutlined class="control-btn" @click="sendMessage('close')"></CloseOutlined>
		</div>
	</div>
</template>

<script setup>
import {ipcRenderer} from 'electron'
import {LineOutlined, BorderOutlined, CloseOutlined} from '@ant-design/icons-vue'
import {version} from '@/../package.json';

const sendMessage = type => ipcRenderer.send(type)

</script>

<style scoped lang="scss">
.top {
	height: 50px;
	background: #202020;
	color: white;
	-webkit-app-region: drag;
	position: relative;
	& * {
		-webkit-app-region: no-drag;
	}
	.left {
		position:absolute;
		left: 0;
		top: 0;
		height: 100%;
		padding-left: 20px;
		display: flex;
		align-items: center;
		.version {
			font-size: 12px;
			padding: 4px 10px;
			border: 1px solid white(.2);
			border-radius: 4px;
			transform: scale(.8) translateY(3px);
		}
	}
	.right {
		display: flex;
		position: absolute;
		right: 0;
		height: 100%;
		.control-btn {
			height: 100%;
			padding: 0 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			&:hover {
				color: #A2E8FC;
				background: #383E49;
				cursor: pointer;
			}
			&:last-child {
				margin-right: 20px;
			}
		}
	}
}
</style>
