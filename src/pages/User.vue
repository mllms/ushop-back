<template>
  <div class="wrap">
    <van-nav-bar
      title="个人中心"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="inner">
      <van-image
        class="image"
        round
        width="10rem"
        height="10rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <van-button
      type="primary"
      size="large"
      style="width: 94%; margin-left: 3%"
      @click="quit"
      >安全提出</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    quit() {
      this.$toast("安全退出成功");
      localStorage.removeItem('loginInfo');
      this.$router.push("/login");
    },
  },
  components: {},
};
</script>
<style scoped>
.inner {
  position: relative;
  width: 100%;
  height: 260px;
  background: coral;
  margin-bottom: 30px;
}
.image {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
}
</style>