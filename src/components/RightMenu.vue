<template>
  <div style="margin-top:20px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span><i class="el-icon-chat-dot-round"></i> 客户服务</span>
      </div>
      <div class="text item">
        <div style="margin-bottom:10px">
          <i class="el-icon-phone-outline"></i> <span>电话：4008805177</span>
        </div>
        <div style="margin-bottom:10px">
          <i class="el-icon-message"></i> <span>邮箱：qdxiangtai@163.com</span>
        </div>
        <div style="margin-bottom:10px">
          <i class="el-icon-document-copy"></i> <span>传真：0532-55687110</span>
        </div>
        <div style="margin-bottom:10px">
          <img src="../assets/img/qqlogo.png" alt="" height="12px" width="12px"> <span>QQ客服</span>
        </div>
        <div style="margin-bottom:10px">
          <img src="../assets/img/wwlogo.png" alt="" height="12px" width="12px"> <span>旺旺客服</span>
        </div>
        <div style="margin-bottom:10px">
          <img src="../assets/img/msnlogo.png" alt="" height="12px" width="12px"> <span>MSN客服</span>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>网站咨询</span>
      </div>
      <div v-for="item in options" :key="item" class="text item">
        <img src="../assets/img/xing.png" alt="" style="width:11px">
        &nbsp; {{item.label}} 
        <span v-if="item.type==2" style="color:red">New</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          type:"1",
          label:"诚招退伍舰艇兵"
        },
        {
          type:"2",
          label:"青岛祥泰绿色农业科技"
        },
        {
          type:"1",
          label:"日光温室无公害西红柿"
        },
        {
          type:"1",
          label:"无公害芹菜生产技术规"
        },
        {
          type:"1",
          label:"无公害韭菜生产技术规"
        },
        {
          type:"1",
          label:"日光温室无公害黄瓜生"
        },
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