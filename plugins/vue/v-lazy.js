import Vue from "vue"
import VueLazyload from "vue-lazyload"

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/error.png',
    loading: '/placeholder.svg'
});
