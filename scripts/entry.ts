import type { App } from 'vue';
import ButtonPlugin, { Button } from '../src/button';

export { Button };
const installs = [ButtonPlugin];
export default {
	install(app: App) {
		installs.forEach((plugin) => {
			app.use(plugin);
		});
	}
};
