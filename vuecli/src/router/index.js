import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test1 from '@/components/Test1'
import subTest1 from '@/components/subTest1'
import subTest2 from '@/components/subTest2'
import error from '@/components/Error'
import Home from '@/components/Home'
import Count from '@/components/Count'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
      beforeEnter(to,from,next){
        console.log(to,from);
        next();
      }
    },
    {
      path:'/homecom',
      component:Home
    },
    {
      path:'/count',
      component:Count
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
          path: '/subTest2/:id(\\d+)/:name',
          name: 'subTest2',
          component: subTest2
        },
        {
          path: '/home/',
          redirect:'/'
        },{
          path:'/redirect/:id(\\d+)/:name',
          redirect:'/subTest2/:id(\\d+)/:name'
        },
        {
          path: '/home/',
          alias:'/abc',
        },
        {
          path: '/*',
          component: error
        }
       
       
      ]
    }
    
    
  ]
})
