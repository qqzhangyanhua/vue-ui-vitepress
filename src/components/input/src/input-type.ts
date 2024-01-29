import { ExtractPropTypes, PropType } from 'vue';

export const inputProps = {
	value: {
		type: String,
		default: 'default'
	},
	type: {
		type: String as PropType<'text' | 'password'>,
		default: 'text'
	}
} as const;

export type InputProps = ExtractPropTypes<typeof inputProps>;
