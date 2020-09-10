<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header">
        <div style="display:flex;justify-content:space-between">
          <span>奖牌及证书</span>
          <span style="font-weight:bold">MORE</span>
        </div>
      </div>
      <!-- el-scrollbar -->
      <div class="gundong-box">
        <el-scrollbar style="width:100%;height:100%">
          <div style="display:flex;width:500px">
            <div v-for="(item,index) in imgList" :key="index" style="margin-right:20px">
              <img :src="item.img" alt="" width="200px" height="150px">
            </div>
          </div>
        </el-scrollbar>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span><i class="el-icon-chat-dot-round"></i> 帮助我们</span>
      </div>
      <div>
        <el-table
          :data="tableData"
          :row-style="{ height: '40px' }"
          class="table"
          style="width: 100%"
          height="150px"
        >
          <el-table-column align="center" prop="aboutUs" label="关于我们"> </el-table-column>
          <el-table-column align="center" prop="shop" label="购物流程"> </el-table-column>
          <el-table-column align="center" prop="pay" label="付款方式"> </el-table-column>
          <el-table-column align="center" prop="post" label="送货方式"> </el-table-column>
          <el-table-column align="center" prop="prob" label="常见问题"> </el-table-column>
          <el-table-column align="center" prop="law" label="法律声明"> </el-table-column>
          <el-table-column align="center" prop="rules" label="网站条款"> </el-table-column>
          <el-table-column align="center" prop="chat" label="联系我们"> </el-table-column>
        <!-- <div style="display:flex;justify-content:space-between">
          
        </div> -->
        </el-table>
      </div>
    </el-card>
    <el-card class="box-card" style="margin:20px 0">
      <div slot="header">
        <div style="display:flex;justify-content:space-between">
          <span>合作伙伴</span>
        </div>
      </div>
      <!-- el-scrollbar -->
      <div class="gundong-box1">
        <el-scrollbar style="width:100%;height:100%">
          <div style="display:flex;width:500px">
            <div v-for="(item,index) in imgList1" :key="index" style="margin-right:20px">
              <img :src="item.img" alt="" height="40px">
            </div>
          </div>
        </el-scrollbar>
      </div>
    </el-card>
    <el-card class="box-card" style="margin:20px 0;text-align:center">
      <!-- el-scrollbar -->
      <div style="margin-bottom:15px">Copyright 2008 qdxiangtai.com. All Rights Reserved.版权所有：青岛祥泰绿色农业科技有限公司</div>
      <div style="margin-bottom:15px">客户服务热线：4008805177 传真：0532-55687110</div>
      <div>客户服务邮箱：qdxiangtai@163.com 鲁ICP备09025271号-1 管理进入</div>
    </el-card>
  </div>
</template>

<script>
import { basename } from 'path'
export default {
  data() {
    return {
      imgList: [
        {
          img:require('../assets/img/j1.jpg')
        },
        {
          img:require('../assets/img/j2.jpg')
        },
        {
          img:require('../assets/img/j3.jpg')
        },
        {
          img:require('../assets/img/j4.jpg')
        },
        {
          img:require('../assets/img/j5.jpg')
        },
        {
          img:require('../assets/img/j6.jpg')
        },
        {
          img:require('../assets/img/j7.jpg')
        },
        {
          img:require('../assets/img/j8.jpg')
        },
      ],
      imgList1: [
        {
          img:require('../assets/img/h1.jpg')
        },
        {
          img:require('../assets/img/h2.jpg')
        },
        {
          img:require('../assets/img/h3.jpg')
        },
        {
          img:require('../assets/img/h4.jpg')
        },
        {
          img:require('../assets/img/h5.jpg')
        },
        {
          img:require('../assets/img/h6.jpg')
        },
        {
          img:require('../assets/img/h7.jpg')
        },
        {
          img:require('../assets/img/h8.jpg')
        },
        {
          img:require('../assets/img/h9.jpg')
        },
      ],
      tableData:[
        {
          aboutUs:"关于我们",
          shop:"购物流程",
          pay:"付款方式",
          post:"送货方式",
          prob:"隐私保护",
          law:"法律声明",
          rules:"网站条款",
          chat:"联系我们",
        },
        {
          aboutUs:"服务宗旨",
          prob:"顾客必读",
          law:"免责声明",
        }
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
.item {
  margin-bottom: 10px;
}
.gundong-box {
  width: 100%;
  height: 165px;
}
.gundong-box1 {
  width: 100%;
  height: 60px;
}
.el-scrollbar .el-scrollbar__wrap {
  // white-space: nowrap;
  overflow-x: hidden;
}
.el-table__row>td{
  //去掉每行的那一条线
	border: none !important;
}
.el-table::before {
	height: 0px !important;
}
</style>