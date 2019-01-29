import Vue from 'vue'
import Router from 'vue-router'
import Upload from '@/components/Upload'
import Train from '@/components/Train'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '*',
    name: 'home',
    component: Home
  }, {
    path: '/upload',
    name: 'upload',
    component: Upload
  }, {
    path: '/train',
    name: 'train',
    component: Train
  }]
})
