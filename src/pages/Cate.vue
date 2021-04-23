<template>
  <div class="wrap">
    <van-nav-bar title="标题" />
    <div class="inner">
      <div class="left">
        <van-sidebar v-model="activeKey" @change="change" >
          <van-sidebar-item
            :title="item.catename"
            v-for="item in cateList"
            :key="item.id"
          />
        </van-sidebar>
      </div>
      <div class="right">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in cateCheList" :key="item.id">
            <van-image :src="$imgBaseUrl + item.img" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { getCateList } from "../request/api";
export default {
  data() {
    return {
      activeKey: 0,
      cateList: [],
      cateCheList:[]
    };
  },
  async created() {
    let res = await getCateList();
    this.cateList = res.list;
    this.change(0)
  },
  methods: {
    change(val){
      this.cateCheList = this.cateList[val].children
    }
  },
  components: {},
};
</script>
<style scoped>
.inner {
  display: flex;
}
</style>