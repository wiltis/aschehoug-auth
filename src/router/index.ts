import { createRouter as createVueRouter, createWebHistory, type Router } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import { createAuthGuard } from "@auth0/auth0-vue"
import { type App } from 'vue';

const createRouter = (app: App): Router => {
	return createVueRouter({
		history: createWebHistory(import.meta.env.BASE_URL),
		routes: [
			{
				path: '/',
				name: 'home',
				component: HomeView,
				beforeEnter: createAuthGuard(app)
			}
		]
	})
}

export default createRouter
