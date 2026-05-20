import About from '@/pages/About.vue'
import Set from '@/pages/Set.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Card from '@/pages/Card.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/set/:code',
      component: Set,
      meta: {
        title: 'Set'
      }
    },
    {
      path: '/card/:id',
      component: Card,
      meta: {
        title: 'Card'
      }
    }
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - Yu-Gi-Oh! Shop`
  }

  next()
})

export default router
