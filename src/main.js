import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import UsersTable from "./components/UsersTable.vue";
import UserDetail from "./components/UserDetail.vue";

// Third party styles
import "vue-toastification/dist/index.css";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "UsersTable",
      component: UsersTable,
    },
    {
      path: '/user-detail-:id',
      name: "UserDetail",
      component: UserDetail,
    },
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');