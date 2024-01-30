import { ExtractPropTypes } from 'vue';

export const modalProps = {
	modelValue: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: ''
	},
	width: {
		type: String,
		default: '60%'
	}
} as const;

export type ModalProps = ExtractPropTypes<typeof modalProps>;
