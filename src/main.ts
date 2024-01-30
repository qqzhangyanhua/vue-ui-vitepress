import { createApp } from 'vue';
import './style.css';
// import './button/style/index.scss';
import './components/modal/src/base-modal.scss';
import Button from './components/button';
import Form from './components/form';
import input from './components/input';
import Modal from './components/modal';
import App from './App.vue';
console.log(Modal);

createApp(App).use(Button).use(Form).use(input).use(Modal).mount('#app');
