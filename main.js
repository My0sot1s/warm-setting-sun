// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
import SunButton from './components/SunButton.vue'
import TabBar from './components/TabBar.vue'
export function createApp() {
	const app = createSSRApp(App)
	app.component('SunButton', SunButton)
	app.component('TabBar', TabBar)
	return {
		app
	}
}
// #endif