<template>
  <div style="margin-top:20px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户信息</span>
      </div>
      <div class="text item">
        <div style="margin-bottom:10px">
          <span>注册</span> /
          <span>登录</span>
        </div>
        <div>
          <span>购物车</span>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品分类</span>
      </div>
      <div v-for="item in options" :key="item" class="text item">
        {{item}}
      </div>
    </el-card>
    <el-card class="box-card">
      <div>
        <img src="../assets/img/code.png" alt="" style="width:100%">
      </div>
      <div style="margin-top:10px">
        <span style="color:#FFBA57;font-size:16px;font-weight:bold">X-T二维码</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品分类</span>
      </div>
      <div v-for="item in pinpai" :key="item" class="text item">
        {{item}}
      </div>
      <div style="text-align:right">
        <span style="color:red">&gt;&gt;所有品牌</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品分类</span>
      </div>
      <div v-for="item in gongqiu" :key="item" class="text item">
        <span style="color:blue">[求]</span> {{item}}
      </div>
      <div style="text-align:right">
        <span style="color:red">&gt;&gt;更多信息</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        "采摘园",
        "一分田",
        "众筹",
        "蔬菜类",
        "水果类",
        "水产类",
        "茶叶",
        "肉禽蛋",
        "花卉类",
        "箱菜",
        "粮油面",
      ],
      pinpai: [
        "QDXT",
        "徐州聚康",
        "天龙魔芋",
        "上马蔬菜",
        "悟禅轩",
        "广利牛肉",
        "官道小米",
        "馨浩果蔬",
      ],
      gongqiu: [
        "鲁西黄牛肉",
        "白玉桃子",
      ],
    }
  }
}
</script>

<style lang="less" scoped>
body {
  overflow: hidden;
  .box-card {
    margin-bottom: 20px;
  }
  .el-aside {
    height: 100vh;
  }
}
</style>
<style lang="scss">
.el-card__header {
  padding: 10px 20px !important;
  background-color: #ffba57;
  color: white;
}
.item {
  margin-bottom: 10px;
}
</style>