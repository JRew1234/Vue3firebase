import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

loadFonts();
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(router);
app.mount("#app");

// createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app");
