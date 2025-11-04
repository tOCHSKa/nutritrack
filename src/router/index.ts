import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import SearchFood from '../presentation/pages/SearchFood.vue'
import Tabs from '../presentation/pages/Tabs.vue'
import Onboarding from '../presentation/pages/Onboarding.vue'
import Login from '../views/LoginPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/onboarding'
  },
  {
    path: '/onboarding',
    component: Onboarding
  },
  { path: '/login', component: Login },
  { path: '/search', component: SearchFood },
  {
    path: '/tabs',
    component: Tabs,
    children: [
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'search',
        component: SearchFood
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
