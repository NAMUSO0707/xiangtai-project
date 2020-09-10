<template>
  <div>
    <div class="block" style="margin-bottom:0px;">
      <!-- <el-carousel trigger="click" height="150px" style="border-radius:4px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel> -->
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in imgList" :key="item.index" name="1adsdada">
          <img :src="item.img" alt="" width="100%" height="100%">
          <h3 class="top">{{item.des}}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-card>
      <div slot="header">
        <div style="display:flex;justify-content:space-between">
          <span>热卖商品</span>
          <span style="font-weight:bold">MORE</span>
        </div>
      </div>
      <!-- <div style="display:flex;justify-content:space-between">

      </div> -->
      <el-row style="display:flex;justify-content:space-between">
        <el-col :span="6" v-for="(item, index) in imgList1" :key="index" class="hot-item">
          <el-card :body-style="{ padding: '0px' }" class="fangda">
            <img :src="item.img" class="image">
            <div style="padding: 14px;">
              <span>{{item.des}}</span>
              <div class="bottom clearfix">
                <time class="time">￥{{item.price}}元</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-top:20px">
      <div slot="header">
        <div style="display:flex;justify-content:space-between">
          <span>推荐商品</span>
          <span style="font-weight:bold">MORE</span>
        </div>
      </div>
      <el-row style="display:flex;justify-content:space-between">
        <el-col :span="6" v-for="(item, index) in imgList1" :key="index" class="hot-item">
          <el-card :body-style="{ padding: '0px' }" class="fangda">
            <img :src="item.img" class="image">
            <div style="padding: 14px;">
              <span>{{item.des}}</span>
              <div class="bottom clearfix">
                <time class="time">￥{{item.price}}元</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
    <el-card style="margin-top:20px">
      <div slot="header">
        <div style="display:flex;justify-content:space-between">
          <span>特价商品</span>
          <span style="font-weight:bold">MORE</span>
        </div>
      </div>
    </el-card>
    <el-card style="margin-top:20px">
      <span style="font-size:16px">本站支持以下支付方式</span>
      <div style="display:flex;justify-content:space-around;margin-top:15px">
        <div>
          <img src="../../assets/img/zhifu.png" alt="" style="height:60px">
        </div>
        <div>
          <img src="../../assets/img/wangyin.jpg" alt="" style="height:60px">
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  data() {
    return {
      form: {
        name: "",
        region: ""
      },
      editorContent: "",
      imgList: [
        {
          img:require('../../assets/img/l1.jpg'),
          des:"祥泰莱西蔬菜基地规划图"
        },
        {
          img:require('../../assets/img/l2.jpg'),
          des:" 龙青高速看一期"
        },
        {
          img:require('../../assets/img/l3.jpg'),
          des:"设备齐全的智能化育苗温室"
        },
        {
          img:require('../../assets/img/l4.jpg'),
          des:"位于莱西市河头店镇213省道101公里公司总部"
        },
        {
          img:require('../../assets/img/l5.jpg'),
          des:"位于崂山马儿岛的海水养殖基地"
        },
        {
          img:require('../../assets/img/l6.jpg'),
          des:"养殖的鲍鱼"
        },
        {
          img:require('../../assets/img/l7.jpg'),
          des:"养殖的海带"
        },
        {
          img:require('../../assets/img/l8.jpg'),
          des:"养殖的海带"
        },
        {
          img:require('../../assets/img/l9.jpg'),
          des:"养殖的扇贝"
        },
      ],
      imgList1: [
        {
          img:require('../../assets/img/f1.jpg'),
          des:"西红柿",
          price:"0"
        },
        {
          img:require('../../assets/img/f2.jpg'),
          des:"蘑菇",
          price:"0"
        },
        {
          img:require('../../assets/img/f3.jpg'),
          des:"小油菜",
          price:"0"
        },
        {
          img:require('../../assets/img/f4.jpg'),
          des:"茄子",
          price:"0"
        },
        {
          img:require('../../assets/img/f5.jpg'),
          des:"菠菜",
          price:"0"
        },
      ],
    };
  },
  mounted() {
    // var editor = new E(this.$refs.editor);
    // editor.customConfig.onchange = html => {
    //   this.editorContent = html;
    // };
    // editor.create();
  }
};
</script>

<style lang="less">
.hot-item {
  margin-right: 12px;
}
.hot-item:last-child {
  margin-right: 0px;
}
.avatar {
  width: 150px;
  height: 150px;
  border: 1px dashed #ddd;
  line-height: 150px;
  text-align: center;

  .el-icon-plus {
    font-size: 30px;
    color: #aaa;
  }
}
.cate_1st {
  margin-right: 150px;
}
</style>
<style>
/* 轮播图 */

/* .el-carousel__item h3 {
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  color: #475669;
} */
.el-carousel__item{
  border-radius: 10px;
}
.el-carousel__item img{
  position: relative;
}
.el-carousel__item h3 {
  font-size: 16px;
  opacity: 1;
  /* line-height: 360px; */
  position: absolute;
  bottom: 5px;
  left: 5%;
  margin: 0;
  text-shadow: 1px 1px 1px #FF0000;
  /* text-align: center; */
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  color: white; 
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  color: white;
}
</style>
<style>
/* 热卖商品 */
.fangda:hover{
  transform: scale(1.2);
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>