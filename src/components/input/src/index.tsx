import { defineComponent, inject } from 'vue';
import { inputProps, InputProps } from './input-type';
import { FormItemContext } from '../../form/src/form-item-type';
export default defineComponent({
	name: 'SInput',
	props: inputProps,
	emits: ['update:value'],
	setup(props: InputProps, { emit }) {
		const formItem = inject('FORM_ITEM') as FormItemContext;
		const onInput = (e: Event) => {
			const value = (e.target as HTMLInputElement).value;
			emit('update:value', value);
			formItem?.validate?.();
		};
		return () => {
			return (
				<input
					class="s-input__input"
					value={props.value}
					type={props.type}
					onInput={onInput}
				/>
			);
		};
	}
});
