import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './router'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

app.use(createRouter(app))
app.use(
	createAuth0({
		domain: "dev-x1adyhbyti6ys7yz.eu.auth0.com",
		clientId: "eB7uo9NQzlHX5aAbK8Vrd7cTvgoemgjz",
		authorizationParams: {
			redirect_uri: window.location.origin
		}
	})
)

app.mount('#app')
