import Vue from 'vue'
import Router from 'vue-router'
import UploadFile from '@/components/UploadFile'
import Train from '@/components/Train'
import Home from '@/components/Home'
import Predict from '@/components/Predict'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '*',
    name: 'home',
    component: Home
  }, {
    path: '/upload',
    name: 'uploadFile',
    component: UploadFile
  }, {
    path: '/train',
    name: 'train',
    component: Train
  }, {
    path: '/predict',
    name: 'predict',
    component: Predict
  }]
})
