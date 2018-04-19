import Vue from 'vue'
import Router from 'vue-router'
import * as Auth from '@/components/pages/Authentication'

// Pages
import Home from '@/components/pages/Home'
import Authentication from '@/components/pages/Authentication/Authentication'

// Global Components
import Header from '@/components/Header'
import BudgetList from '@/components/Budget/BudgetList'
// Register compnents
Vue.component('app-header', Header)
Vue.component('budget-list', BudgetList)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: Header,
        budgetList: BudgetList
      },
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requredAuth) {
    if (Auth.default.user.authenticated) {
      next()
    } else {
      router.push('/login')
    }
  } else {
    next()
  }
})

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    }
  ]
})
