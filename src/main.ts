import { createApp } from 'vue';
import './style.css';
import './button/style/index.scss';
import Button from './components/button';

import App from './App.vue';

createApp(App).use(Button).mount('#app');
