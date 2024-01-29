<script setup lang="ts">
import Test from './Test';
const increment = (val: string | number) => {
	console.log('22222222', val);
};
</script>

<template>
	<div>
		SButton
		<s-button> 按钮 </s-button>
		<s-button disabled> 按钮2 </s-button>

		<Test @increment="increment">
			插槽
			<template #title> 22222 </template>
		</Test>
	</div>
</template>

<style scoped></style>
