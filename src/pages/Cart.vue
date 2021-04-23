<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    
  },
  components: {},
};
</script>
<style scoped>
</style>