import { App } from 'vue';
import Button from './button/src/index';

export { Button };

export default {
	install(app: App) {
		app.component(Button.name, Button);
	}
};
