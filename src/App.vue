<script setup lang="ts">
import { ref } from 'vue';
import Test from './Test';
const increment = (val: string | number) => {
	console.log('22222222', val);
};
const model = ref({
	name: '122222'
});
</script>

<template>
	<div>
		SButton
		<s-button> 按钮 </s-button>
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

<style scoped></style>
