import Vue from 'vue'
import Router from 'vue-router'

let Home =()=> import ('../pages/Home') 
let Cate =()=> import ('../pages/Cate') 
let Cart =()=> import ('../pages/Cart') 
let User =()=> import ('../pages/User')
let Login =()=> import ('../pages/Login') 
let Regist =()=> import ('../pages/Regist') 
let Goods =()=> import ('../pages/Goods') 

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home,
      meta:{
        title:"首页"
      }
    },
    {
      path: '/cate',
      component:Cate,
      meta:{
        title:"分类"
      }
    },
    {
      path: '/Cart',
      component:Cart,
      meta:{
        title:"购物车"
      }
    },
    {
      path: '/user',
      component:User,
      meta:{
        title:"我的"
      }
    },
    {
      path: '/login',
      component:Login,
      meta:{
        title:"登录"
      }
    },
    {
      path: '/regist',
      component:Regist,
      meta:{
        title:"注册"
      }
    },
    {
      path: '/goodslist',
      component:Goods,
      meta:{
        title:"商品分类"
      }
    }
  ]
})
// 设置全局前置守卫
router.beforeEach((to,from,next)=>{
  document.title=to.meta.title
  if(to.path=='/user'){
    if(!JSON.parse(localStorage.getItem('userInfo',)||'{}')){
      this.$toast('请先登录');
      this.$router.push('/login')
    }
  }
  next()
})
export default router