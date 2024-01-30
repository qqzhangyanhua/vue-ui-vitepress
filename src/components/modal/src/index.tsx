import { defineComponent, toRefs } from 'vue';
import { modalProps, ModalProps } from './model.type';
import BaseModal from './base-modal';
export default defineComponent({
	name: 'SModal',
	props: modalProps,
	emits: ['update:modelValue'],
	setup(props: ModalProps, { slots, emit }) {
		const { modelValue, title, width } = toRefs(props);
		return () => {
			return (
				<BaseModal
					class="s-modal"
					modelValue={modelValue.value}
					onUpdate:modelValue={() => emit('update:modelValue')}
				>
					<div class="s-model__container" style={{ width: width.value }}>
						{/* title  如果是插槽可以暴露方法出去*/}
						{slots.header ? (
							slots?.header?.({
								close: () => emit('update:modelValue', false)
							})
						) : (
							<div class="s-model--title">{title.value}</div>
						)}
						{/* 内容 */}
						<div class="s-model__body">{slots?.default?.()}</div>
						{/* footer */}
						<div class="s-model__footer">{slots?.footer?.()}</div>
					</div>
				</BaseModal>
			);
		};
	}
});
