import { computed, defineComponent, provide } from 'vue';
import { formContextToken, formProps, FormProps } from './form.type';
import { FormItemContext } from './form-item-type';
export default defineComponent({
	name: 'SForm',
	props: formProps,
	emits: ['submit'],
	setup(props: FormProps, { slots, emit, expose }) {
		const labelData = computed(() => {
			return {
				layout: props.layout,
				labelSize: props.labelSize,
				labelAlign: props.labelAlign
			};
		});
		provide('LABEL_DATA', labelData);

		// 存放待校验的items
		const formItems = new Set<FormItemContext>();
		const addItem = (item: FormItemContext) => {
			formItems.add(item);
		};
		const removeItem = (item: FormItemContext) => {
			formItems.delete(item);
		};
		provide(formContextToken, {
			model: props.model,
			rules: props.rules,
			addItem,
			removeItem
		});
		const submit = (e: Event) => {
			e.preventDefault();
			// 校验所有的formItem
			const validatePromises = Array.from(formItems).map((item) => {
				return item.validate?.();
			});
			Promise.all(validatePromises).then((results) => {
				const valid = results.every((result) => result?.result);
				if (valid) {
					emit('submit', props.model);
				}
			});
		};
		const validate = (callback: (valid: boolean) => void) => {
			const tasks: Array<Promise<any>> = [];
			formItems.forEach((item) => {
				tasks.push(item.validate?.());
				Promise.all(tasks)
					.then(() => {
						callback(true);
					})
					.catch(() => {
						callback(false);
					});
			});
		};
		expose({
			validate
		});
		return () => {
			return (
				<form class="s-form" onSubmit={submit}>
					{slots.default?.()}
				</form>
			);
		};
	}
});
