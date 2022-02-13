require("./bootstrap");

import { createApp } from "vue";
import Demo from "./../vue/components/Demo.vue";

const app = createApp(Demo);
console.log(app);
app.mount("#admin-app");
