import { computed, defineComponent, provide } from 'vue';
import { formContextToken, formProps, FormProps } from './form.type';
export default defineComponent({
	name: 'SForm',
	props: formProps,
	setup(props: FormProps, { slots }) {
		const labelData = computed(() => {
			return {
				layout: props.layout,
				labelSize: props.labelSize,
				labelAlign: props.labelAlign
			};
		});
		provide('LABEL_DATA', labelData);
		provide(formContextToken, {
			model: props.model,
			rules: props.rules
		});
		return () => {
			return <div>{slots.default?.()}</div>;
		};
	}
});
