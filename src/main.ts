import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.scss'

import App from './App.vue'
import GetStarted from './tutorial/GetStarted.vue'
import VariablesAndChange from './tutorial/VariablesAndChange.vue'
import ConditionalAndInteractivity from './tutorial/ConditionalAndInteractivity.vue'
import Home from './Home.vue'

const routes = [
  { path: "/", component: Home },
  {
    path: "/tutorial",
    children: [
      { path: "get-started", component: GetStarted },
      { path: "variables-and-change", component: VariablesAndChange },
      { path: "conditional-and-interactivity", component: ConditionalAndInteractivity }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
