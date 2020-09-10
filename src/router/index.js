import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Register from '@/views/Register.vue'
import Layout from '@/components/Layout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register
  },{
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },{
    path: '/friday',
    name: 'Friday',
    component: () => import('@/views/Friday.vue')
  },{
    path: '/transter',
    name: 'Transter',
    component: () => import('@/views/Transter.vue')
  },{
    path: '/upload',
    name: 'Upload',
    component: () => import('@/views/Upload.vue')
  },{
    path: '/load',
    name: 'Load',
    component: () => import('@/views/Load.vue')
  },{
    path: '/article',
    name: 'Article',
    component: Layout,
    children:[{
      path: '/index',
      name: 'Index',
      component: () => import('@/views/Index.vue')
    },{
      path: 'release',
      name: 'ArticleRelease',
      component: () => import('@/views/Article/Release.vue'),
    },]
  },{
    path: '/user',
    name: 'User',
    component: Layout,
    children:[{
      path: 'list',
      name: 'UserList',
      component: () => import('@/views/User/List.vue')
    },{
      path: 'edit/:id',
      name: 'UserEdit',
      component: () => import('@/views/User/Edit.vue'),
    }]
  },{
    path: '/category',
    name: 'Category',
    component: Layout,
    children:[{
      path: 'list',
      name: 'CategoryList',
      component: () => import('@/views/Category/List.vue')
    },]
  },{
    path: '/admin',
    name: 'Admin',
    component: Layout,
    children:[{
      path: 'list',
      name: 'AdminList',
      component: () => import('@/views/Admin/List.vue')
    },{
      path: 'person',
      name: 'AdminPerson',
      component: () => import('@/views/Admin/Person.vue')
    },{
      path: 'edit/:id',
      name: 'AdminEdit',
      component: () => import('@/views/Admin/Edit.vue')
    },]
  },{
    path: '/material',
    name: 'Material',
    component: Layout,
    children:[{
      path: 'edit',
      name: 'MaterialEdit',
      component: () => import('@/views/Material/Edit.vue')
    },]
  },
]

const router = new VueRouter({
  routes
})

export default router
