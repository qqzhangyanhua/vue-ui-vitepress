import { ExtractPropTypes, PropType } from 'vue';
import { Value } from 'async-validator';
export type IButtonSize = 'large' | 'middle' | 'small';
export const formItemProps = {
	label: {
		type: String,
		default: ''
	},
	size: {
		type: String as PropType<IButtonSize>,
		default: 'middle'
	},
	field: {
		type: String
	}
} as const;

export type FormItemProps = ExtractPropTypes<typeof formItemProps>;

export type LabelData = {
	layout: string;
	labelSize: string;
	labelAlign: string;
};

export type FormItemContext = {
	validate: () => Promise<Value>;
};
