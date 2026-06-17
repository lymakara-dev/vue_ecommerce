import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Initialize Firebase before mounting so auth calls work immediately
import "./services/firebase";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
