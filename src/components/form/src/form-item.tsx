import {
	ComputedRef,
	computed,
	defineComponent,
	inject,
	onMounted,
	onUnmounted,
	provide,
	ref
} from 'vue';
import { formItemProps, FormItemProps, LabelData } from './form-item-type';
import { formContextToken } from './form.type';
import Validator from 'async-validator';
export default defineComponent({
	name: 'SFormItem',
	props: formItemProps,
	setup(props: FormItemProps, { slots }) {
		const showErrorMessage = ref(false);
		const errorMessage = ref('');
		// 向下传递label
		const labelData = inject('LABEL_DATA') as ComputedRef<LabelData>;
		const formCtx = inject(formContextToken);
		const validate = () => {
			if (!formCtx) {
				console.log('必须在Form组件中使用FormItem组件');
				return Promise.reject('必须在Form组件中使用FormItem组件');
			}
			if (!props.field) {
				console.log('必须设置field属性');
			}
			// 不需要校验的情况
			if (!formCtx?.rules) {
				return Promise.resolve({ result: true });
			}
			const itemRules = formCtx.rules[props.field!] || undefined;
			if (!itemRules) {
				return Promise.resolve({ result: true });
			}
			const value = formCtx.model[props.field!];
			const validator = new Validator({
				[props.field!]: itemRules
			});
			return validator.validate({ [props.field!]: value }, (errors) => {
				if (errors) {
					// 校验失败,显示错误信息
					showErrorMessage.value = true;
					errorMessage.value = errors[0].message || '校验错误';
					// return Promise.resolve({ result: false, errors });
				} else {
					showErrorMessage.value = false;
					errorMessage.value = '';
				}
			});
		};
		const formItemCtx = {
			validate
		};
		provide('FORM_ITEM', formItemCtx);
		// 挂载后注册到FormItems中
		onMounted(() => {
			if (props.field) {
				formCtx?.addItem(formItemCtx);
			}
		});
		onUnmounted(() => {
			if (props.field) {
				formCtx?.removeItem(formItemCtx);
			}
		});

		const itemClasses = computed(() => {
			return {
				's-form-item': true,
				[`s-form-item--${labelData.value.layout}`]: true
			};
		});
		const labelClasses = computed(() => {
			return {
				's-form-item__label': true,
				[`s-form-item__label--is-${labelData.value.labelAlign}`]: true,
				[`s-form-item__label--is-${labelData.value.labelSize}`]: true
			};
		});
		return () => {
			return (
				<div class={itemClasses.value}>
					<span class={labelClasses.value}>{props.label}</span>
					{slots.default?.()}
				</div>
			);
		};
	}
});
