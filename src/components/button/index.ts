import { App } from 'vue';
import Button from './src/index';

export { Button };

export default {
	install(app: App) {
		app.component(Button.name, Button);
	}
};
