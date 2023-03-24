import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#123B9E',
      },
    },
  },
    lang: {
      locales: { ru },
      current: 'ru',
    },
});
