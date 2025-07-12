/*
**                                               _       _
**  _ __   __ _ _ __   ___ _ __      _ __   __ _(_)_ __ | |_
** | '_ \ / _` | '_ \ / _ \ '__|____| '_ \ / _` | | '_ \| __|
** | |_) | (_| | |_) |  __/ | |_____| |_) | (_| | | | | | |_
** | .__/ \__,_| .__/ \___|_|       | .__/ \__,_|_|_| |_|\__|
** |_|         |_|                  |_|
**
*/
import { createApp } from 'vue'
// import { createPinia } from 'pinia' // Import Pinia
import App from './app.vue'
// import router from './router' // Import the router configuration

const app = createApp(App)

// Tell the app to use the plugins
// app.use(createPinia()) // Register Pinia for state management
// app.use(router)        // Register Vue Router for navigation

// Finally, mount the app
app.mount('#app')