import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import 'vant/lib/index.css';

import STable from '@shene/table'
import '@shene/table/dist/index.css'

const app = createApp(App);
app.use(STable)
app.mount('#app');
