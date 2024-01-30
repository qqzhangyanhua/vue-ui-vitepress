import { App } from 'vue';
import Modal from './src/index';
export { Modal };

export default {
	install(app: App) {
		app.component(Modal.name, Modal);
	}
};
