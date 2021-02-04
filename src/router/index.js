import Vue from 'vue'
import Router from 'vue-router'
import Vuelidate from 'vuelidate'
import Form from '@/components/Form'

Vue.use(Router)
Vue.use(Vuelidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    }
  ]
})
