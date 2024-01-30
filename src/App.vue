<script setup lang="ts">
import { ref } from 'vue';
import Test from './Test';
// import SBaseModal from './components/modal/src/base-modal';
const increment = (val: string | number) => {
	console.log('22222222', val);
};
const showModal = ref(true);
const model = ref({
	name: '122222'
});
</script>

<template>
	<div>
		<!-- <SBaseModal v-model="showModal">
			<div class="modal">ssssssssssss</div>
		</SBaseModal> -->
		<s-modal v-model="showModal" title="我是title">
			<div class="modal">模台框</div>
			<template #header="{ close }">
				<!-- header插槽 -->
				<s-button type="primary" @click="close">关闭</s-button>
				<s-button type="primary">确定</s-button>
			</template>
			<template #footer>
				<s-button>取消</s-button>
				<s-button type="primary">确定</s-button>
			</template>
		</s-modal>
		SButton
		<s-button @click="showModal = true"> 按钮 </s-button>
		<s-button disabled> 按钮2 </s-button>
		<s-form :model="model" label-size="large" label-align="left">
			<s-form-item label="标签" field="name">
				<s-input v-model:value="model.name" />
			</s-form-item>
		</s-form>
		<Test @increment="increment">
			插槽
			<template #title> 22222 </template>
		</Test>
	</div>
</template>

<style scoped>
.modal {
	width: 200px;
	height: 200px;
	background-color: #fff;
}
</style>
