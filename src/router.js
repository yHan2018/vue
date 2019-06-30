import VueRouter from 'vue-router';

import Login from './components/login/Login';
import Layout from './components/shopping/Shopping.vue';
import Home from './components/shopping/home/Home.vue';
import Search from './components/shopping/search/Search.vue';
import ShopCar from './components/shopping/shopCar/ShopCar.vue';
import Member from './components/shopping/member/Member.vue';
import News from './components/shopping/news/News.vue';
import NewsDetail from './components/shopping/news/NewsDetail.vue'

const router = new VueRouter({
  routes: [{
      path: '*',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shopping',
      name: 'shopping',
      redirect: {
        path: 'shopping/home'
      },
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'member',
          name: 'member',
          component: Member
        },
        {
          path: 'shopCar',
          name: 'shopCar',
          component: ShopCar
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'news',
          name: 'News',
          component: News
        },
        {
          path: 'newsDetail/:newsId',
          name: 'News',
          component: NewsDetail
        }
      ]
    },
    
  ],
  linkActiveClass: 'mui-active'
});
export default router;