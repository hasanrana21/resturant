import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage/Home.vue'
import Checkout from '../components/PlaceOrder/Checkout.vue'
import AddToCart from '../components/PlaceOrder/AddToCart.vue'
import OrderCompleted from '../components/PlaceOrder/OrderCompleted.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/addToCart',
    name: 'AddToCart',
    component: AddToCart
  },
  {
    path: '/orderCompleted',
    name: 'OrderCompleted',
    component: OrderCompleted
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
