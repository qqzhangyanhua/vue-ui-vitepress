import { defineComponent as s, toRefs as d, createVNode as i } from 'vue';
const r = {
		type: {
			type: String,
			default: 'default'
		},
		size: {
			type: String,
			default: 'middle'
		},
		disabled: {
			type: Boolean,
			default: !1
		}
	},
	o = /* @__PURE__ */ s({
		name: 'SButton',
		props: r,
		setup(t, { slots: e }) {
			const { type: a, size: u, disabled: l } = d(t);
			return () => {
				var n;
				return i(
					'button',
					{
						disabled: l.value,
						class: [`s-button--${a.value}`, `s-button--${u.value}`, 's-button']
					},
					[(n = e.default) == null ? void 0 : n.call(e)]
				);
			};
		}
	}),
	p = {
		install(t) {
			t.component(o.name, o);
		}
	},
	f = [p],
	b = {
		install(t) {
			f.forEach((e) => {
				t.use(e);
			});
		}
	};
export { o as Button, b as default };
