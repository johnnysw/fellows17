import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test1 from '@/components/Test1'
import subTest1 from '@/components/subTest1'
import subTest2 from '@/components/subTest2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test/',
      name: 'Test1',
      component: Test1,
      children:[
        {
          path: '/subTest1/',
          component: subTest1
        },
        {
          path: '/subTest2/:id/:name',
          name: 'subTest2',
          component: subTest2
        }
       
      ]
    }
  ]
})
