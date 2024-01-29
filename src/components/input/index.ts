import { App } from 'vue';
import Input from './src/index';
export { Input };

export default {
	install(app: App) {
		app.component(Input.name, Input);
	}
};
