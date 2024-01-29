import { defineComponent, ref, withModifiers } from 'vue';

export default defineComponent({
	emits: ['increment'],
	setup(props, { slots, emit }) {
		const count = ref(0);
		const increment = () => {
			count.value++;
			emit('increment', count.value);
		};
		return () => {
			return (
				//withModifiers 包装修饰符
				<div onClick={withModifiers(increment, ['self'])}>
					count: {count.value}
					<input type="text" v-model={count.value} />
					<div class="sssssss">
						{slots.default ? slots.default() : 'no slot'}
					</div>
					<div class="slots-title">
						{slots.title ? slots.title() : 'no slot'}
					</div>
				</div>
			);
		};
	}
});
