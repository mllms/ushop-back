<template>
  <div>
    <van-nav-bar title="首页"> </van-nav-bar>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="$imgBaseUrl + item.img" alt="" class="img" />
      </van-swipe-item>
    </van-swipe>
    <van-tabs v-model="active" class="tabs">
      <van-tab title="热门推荐">
        <van-card
          v-for="item in goodsList[0].content"
          :key="item.id"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgBaseUrl + item.img"
        >
          <template  #footer>
            <van-button size="small" type="primary" icon="cart-o" @click="add(item.id)"></van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="发现新品">
        <van-card
          v-for="item in goodsList[1].content"
          :key="item.id"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgBaseUrl + item.img"
        >
          <template #footer>
            <van-button size="small" type="primary" icon="cart-o"  @click="add(item.id)"></van-button>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="全部商品">
        <van-card
          v-for="item in goodsList[2].content"
          :key="item.id"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgBaseUrl + item.img"
        >
          <template #footer>
            <van-button size="small" type="primary" icon="cart-o"  @click="add(item.id)"></van-button>
          </template>
        </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getBannerList, getGoodsList,acrtAdd } from "../request/api";
export default {
  data() {
    return {
      bannerList: [],
      goodsList: [{ content: [] },{ content: [] },{ content: [] }],
      active: 0,
    };
  },
  async created() {
    let res = await getBannerList();
    this.bannerList = res.list;
    let goods = await getGoodsList();
    this.goodsList = goods.list;
    
  },
  methods: {
    async add(val){
      let n=1
      let uid =JSON.parse (localStorage.getItem('loginInfo')||'{}').uid
      let res = await acrtAdd(val,uid,n)
      
    }
  },
  components: {},
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe {
  height: 240px;
}
.img {
  width: 100%;
}
.tabs {
  margin-bottom:40px ;
}
</style>