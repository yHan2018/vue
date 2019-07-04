import VueRouter from 'vue-router';

import Login from './components/login/Login';
import Layout from './components/shopping/Shopping.vue';
import Home from './components/shopping/home/Home.vue';
import Search from './components/shopping/search/Search.vue';
import ShopCar from './components/shopping/shopCar/ShopCar.vue';
import Member from './components/shopping/member/Member.vue';
import News from './components/shopping/news/News.vue';
import NewsDetail from './components/shopping/news/NewsDetail.vue';
import Goods from './components/shopping/goods/Goods.vue';
import GoodDetail from './components/shopping/goods/GoodDetail.vue';

const router = new VueRouter({
  routes: [{
    path: '*',
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
        name: 'newsDetail',
        component: NewsDetail
      },
      {
        path: 'goods',
        name: 'Goods',
        component: Goods
      },
      {
        path: 'good-detail/:id',
        name: 'good-detail',
        component: GoodDetail
      }
    ]
  },

  ],
  linkActiveClass: 'mui-active',
  scrollBehavior(to, from, savedPosition) {
    console.log('---------------');
    console.log(to, from, savedPosition);
    return { x: 0, y: 0 };
  }
});
router.beforeEach((to, from, next) => {
  // console.log('to', to);
  // console.log('from', from);
  // console.log('next', next);
  next();
});
router.afterEach();
export default router;