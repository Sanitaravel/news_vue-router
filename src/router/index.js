import Vue from 'vue'
import VueRouter from 'vue-router'
import Germany from '../views/Germany.vue'
import France from '../views/France.vue'
import Italy from '../views/Italy.vue'
import Japan from '../views/Japan.vue'
import Russia from '../views/Russia.vue'
import USA from '../views/USA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/germany',
    name: 'germany',
    component: Germany
  },
  {
    path: '/france',
    name: 'france',
    component: France
  },
  {
    path: '/italy',
    name: 'italy',
    component: Italy
  },
  {
    path: '/japan',
    name: 'japan',
    component: Japan
  },
  {
    path: '/russia',
    name: 'russia',
    component: Russia
  },
  {
    path: '/usa',
    name: 'usa',
    component: USA
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router