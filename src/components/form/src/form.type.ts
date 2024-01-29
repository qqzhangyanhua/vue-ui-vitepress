import { ExtractPropTypes, InjectionKey, PropType } from 'vue';
import { Rules } from 'async-validator';
export type Layout = 'horizontal' | 'vertical' | 'inline';
export type Size = 'small' | 'medium' | 'large';
export type FormLabelAlign = 'left' | 'right' | 'top';
export const formProps = {
	model: {
		type: Object,
		required: true
	},
	layout: {
		type: String as PropType<Layout>,
		default: 'horizontal'
	},
	labelSize: {
		type: String as PropType<Size>,
		default: 'medium'
	},
	labelAlign: {
		type: String as PropType<FormLabelAlign>,
		default: 'right'
	},
	rules: {
		type: Object as PropType<Rules>
	}
} as const;

export type FormProps = ExtractPropTypes<typeof formProps>;

export type FormContext = {
	model: any;
	rules?: Rules;
};
export const formContextToken: InjectionKey<FormContext> =
	Symbol('FormContextToken');
