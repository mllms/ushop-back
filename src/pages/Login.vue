<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="loginInfo.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="loginInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { sendLoginInfo } from '../request/api'
export default {
  data() {
    return {
      loginInfo:{
        phone:"",
        password:""
      }
    };
  },
  created() {},
  methods: {
    onClickRight() {},
    onClickLeft() {},
    async onSubmit() {
      
      let res = await sendLoginInfo(this.loginInfo)
      if(res.code===200){
        this.$toast('登陆成功');
        localStorage.setItem('loginInfo',JSON.stringify(res.list))
        this.$router.push('/user')
      }
    },
  },
  components: {},
};
</script>
<style scoped>
</style>