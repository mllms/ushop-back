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