import axios from '../tools/http'
// 获取轮播图信息
export function getBannerList(){
  let res = axios.get('/getbanner')
  return res
}
// 获取商品信息
export function getGoodsList(){
  let res = axios.get('getindexgoods')
  return res
}
// 获取分类信息
export function getCateList(){
  let res = axios.get('getcate')
  return res
}
// 会员登录
export function sendLoginInfo(data){
  let res = axios.post('login',data)
  return res
}
// 获取购物车列表
export function getCartList(uid){
  let res = axios.get('cartlist',{
    params:{
      uid:uid
    }
  })
  return res
}
// 购物增加
export function acrtAdd(id,uid,n){
  let res = axios.post('cartadd',{goodsid:id,uid:uid,num:n})
  return res
}
// 购物车修改
export function acrtEdit(id,n){
  let res = axios.post('cartedit',{id:id,type:n})
  return res
}
// 购物车删除
export function acrtDelete(id){
  let res = axios.post('cartdelete',{id:id})
  return res
}
// 会员注册
export function registerInfo(data){

  let res = axios.post('register',data)
  return res
}

export function getCateGoods(sid,fid){
  console.log(sid,fid)
  let res = axios.get('getcategoods',{
    params:{
      
      sid:sid,
      fid:fid,
    }})
  return res
}