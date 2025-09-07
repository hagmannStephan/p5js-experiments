import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.scss'

import App from './App.vue'
import Home from './Home.vue'
import GetStarted from './tutorial/GetStarted.vue'
import VariablesAndChange from './tutorial/VariablesAndChange.vue'
import ConditionalAndInteractivity from './tutorial/ConditionalAndInteractivity.vue'
import OrganizeCodeWithFunctions from './tutorial/OrganizeCodeWithFunctions.vue'


const routes = [
  { path: "/", component: Home },
  {
    path: "/tutorial",
    children: [
      { path: "get-started", component: GetStarted },
      { path: "variables-and-change", component: VariablesAndChange },
      { path: "conditional-and-interactivity", component: ConditionalAndInteractivity },
      { path: "organize-code-with-functions", component: OrganizeCodeWithFunctions }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
