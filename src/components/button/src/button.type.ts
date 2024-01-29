import { ExtractPropTypes, PropType } from 'vue';

export type IButtonType =
	| 'primary'
	| 'text'
	| 'link'
	| 'dashed'
	| 'ghost'
	| 'default';
export type IButtonSize = 'large' | 'middle' | 'small';
export const buttonProps = {
	type: {
		type: String as PropType<IButtonType>,
		default: 'default'
	} as const,
	size: {
		type: String as PropType<IButtonSize>,
		default: 'middle'
	} as const,
	disabled: {
		type: Boolean,
		default: false
	}
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
