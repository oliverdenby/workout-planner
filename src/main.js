import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { fa } from 'vuetify/iconsets/fa';

//import { aliases, mdi } from 'vuetify/lib/iconsets/mdi';
// make sure to also import the coresponding css
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure your project is capable of handling css files

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  }
});

createApp(App).use(vuetify).mount('#app');
