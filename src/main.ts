import { createApp } from 'vue';
import './style.css';
// import './button/style/index.scss';
import Button from './components/button';
import Form from './components/form';
import input from './components/input';
import App from './App.vue';

createApp(App).use(Button).use(Form).use(input).mount('#app');
