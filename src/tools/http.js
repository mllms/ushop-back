import axios from 'axios'

// 配置全局基础路由
if(process.env.NODE_ENV== "development"){
  // 开发环境
  axios.defaults.baseURL="/api"
}else {
  // 生产环境
  axios.defaults.baseURL="http://localhost:3000/api"
}



axios.interceptors.request.use((config)=>{
  // 获取localStorage里面的对象
  let loginInfo = JSON.parse(localStorage.getItem('loginInfo') || '{}')
  config.headers.authorization = loginInfo.token
  return config
})

axios.interceptors.response.use((response)=>{
  // if(response.code===403){
  //   this.$toast(response.msg)
  //   this.$router.push('/login')
  // }
  return response.data
})

export default axios

