<template>
  <div class="container">
    <!-- 导顶部航 -->
    <div class="title-top">
      <div class="title_nav">
        <div><i class="el-icon-user" style="color:#FFBA57"></i> 用户管理</div>
        <div><i class="el-icon-shopping-cart-1" style="color:#FFBA57"></i> 购物车</div>
        <div><i class="el-icon-document" style="color:#FFBA57"></i> 我的订单</div>
        <div><i class="el-icon-warning-outline" style="color:#FFBA57"></i> 帮助中心</div>
        <div><i class="el-icon-service" style="color:#FFBA57"></i> 客户反馈</div>
        <div style="border-right:0"><i class="el-icon-star-off" style="color:#FFBA57"></i> 收藏本站</div>
      </div>
    </div>
    <div class="clear"></div>
    <!-- xiangtai logo -->
    <div class="logo-box">
      <div class="logo-left">
        X-T LOGO
        <div style="font-size:15px;"><span style="color:#FFBA57">青岛祥泰有机食品网</span> qdxiangtai.com</div>
      </div>
      <div class="logo-middle">
        <span>有机食品</span>
        <span>免费送货</span>
        <span>买着舒心</span>
        <span>吃着放心</span>
      </div>
      <div class="logo-right">
        <span><i class="el-icon-link" style="color:#FFBA57"></i> 园艺技术员招聘</span>
        <span><i class="el-icon-link" style="color:#FFBA57"></i> 关注有礼</span>
        <span><i class="el-icon-link" style="color:#FFBA57"></i> 鸡年大吉</span>
      </div>
    </div>

    <!-- 内容导航/查询 -->
    <div class="nav-box">
      <div class="nav">
        <div>网站首页</div>
        <div>公司简介</div>
        <div>咨询中心</div>
        <div>分类导航</div>
        <div>品牌导航</div>
        <div>推荐产品</div>
        <div>热卖产品</div>
        <div>特价产品</div>
        <div>供求信息</div>
        <div>报价查询</div>
        <div>发货单查询</div>
        <div style="border-right:0">购物帮助</div>
      </div>
      <div class="search">
        <div class="time">{{ nowTime }}</div>
        <div class="box">
          <el-select v-model="value" placeholder="请选择" class="select" size="mini">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
          <el-input v-model="input" placeholder="请输入内容" class="search-input" size="mini"></el-input>
          <el-button size="mini" plain icon="el-icon-search" style="color:#FFBA57">查询</el-button>
        </div>
        <div class="tel">订购热线：4008805177</div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      input: "",
      nowTime: "",
      options: [
        {
          value: "选项1",
          label: "所有分类",
        },
        {
          value: "选项2",
          label: "采摘园",
        },
        {
          value: "选项3",
          label: "一分田",
        },
        {
          value: "选项4",
          label: "众筹",
        },
        {
          value: "选项5",
          label: "蔬菜类",
        },
        {
          value: "选项6",
          label: "水果类",
        },
        {
          value: "选项7",
          label: "水产类",
        },
        {
          value: "选项8",
          label: "茶叶",
        },
        {
          value: "选项9",
          label: "肉禽蛋",
        },
        {
          value: "选项10",
          label: "花卉类",
        },
        {
          value: "选项11",
          label: "箱菜",
        },
        {
          value: "选项12",
          label: "粮油面",
        },
      ],
      value: "",
    };
  },
  methods: {
    getTime() {
      setInterval(() => {
        //new Date() new一个data对象，当前日期和时间
        //toLocaleString() 方法可根据本地时间把 Date 对象转换为字符串，并返回结果。
        this.nowTime = new Date().toLocaleString();
      }, 1000);
    },
    changeShow() {
      this.isShow = false
    },
  },
  created() {
    this.getTime();
  },
  mounted() { },
};
</script>
<style lang="scss">
.clear {
  clear: both;
}
.title-top {
  float: right;
}
.title_nav {
  width: 620px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    padding: 0px 20px;
    margin: 15px 0;
    border-right: 1px solid #ddd;
  }
}
.logo-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .logo-left {
    // display: inline-block;
    font-size: 50px;
  }
  .logo-middle {
    margin-left: -100px;
    span {
      margin-right: 20px;
      font-size: 16px;
      color: #ffba57;
    }
  }
  .logo-right {
    span {
      margin-right: 25px;
    }
  }
}
.nav-box {
  margin: 15px 0;
  background: #ffba57;
  border-radius: 4px;
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    div {
      padding: 0 15px;
      margin: 9px 0;
      border-right: 1px solid #eee;
      color: white;
    }
  }
  .search {
    width: 97%;
    margin: 0 auto;
    border-top: 1px solid white;
    color: white;
    .box {
      float: left;
      .select {
        width: 130px;
        margin-right: 5px;
      }
      .search-input {
        margin: 7px 0;
        margin-right: 5px;
        width: 200px;
      }
    }
    .time {
      float: left;
      padding: 4px 15px 0 15px;
      margin: 9px 0;
      width: 150px;
      color: white;
    }
    .tel {
      float: right;
      padding: 4px 15px 0 15px;
      margin: 9px 0;
      width: 150px;
    }
  }
}
</style>
