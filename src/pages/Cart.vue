<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />
    <van-card
      v-for="item in cartList"
      :key="item.id"
      :price="item.price"
      :title="item.goodsname"
      :thumb="$imgBaseUrl + item.img"
    >
      <template #footer>
        <van-stepper
          v-model="item.num"
          theme="round"
          button-size="22"
          disable-input
          @plus="plus(item)"
          @minus="minus(item)"
        />
        <van-button size="mini" type="danger" @click="del(item.id)"
          >删除</van-button
        >
      </template>
    </van-card>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { getCartList, acrtEdit, acrtDelete } from "../request/api";
export default {
  data() {
    return {
      cartList: [],
      getList: async function () {
        let uid = JSON.parse(localStorage.getItem("loginInfo") || "{}").uid;
        let res = await getCartList(uid);
        this.cartList = res.list;
      },
    };
  },
  async created() {
    this.getList();
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    // 点击减少
    async minus(item) {
      let res = await acrtEdit(item.id, 1);
    },
    // 点击增加
    async plus(item) {
      let res = await acrtEdit(item.id, 2);
    },
    async del(id) {
      let res = await acrtDelete(id);
      if (res.code === 200) {
        this.getList();
      }
    },
    onSubmit() {
      console.log(this.cartList[0].price);
    },
  },
  components: {},
  computed: {
    totalPrice() {
      // 获取总价
      let sum = 0;
      for (let k in this.cartList) {
        sum += this.cartList[k].price * this.cartList[k].num * 100;
      }
      return sum;
    },
  },
};
</script>
<style scoped>
.van-button--mini {
  margin-top: 10px;
}
.van-submit-bar {
  margin-bottom: 50px;
}
</style>