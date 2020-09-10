<template>
  <!-- 右侧悬浮 -->
  <div style="margin-top:20px">
    <el-card class="box-card fixed-r" style="width:130px" v-show="isShow">
      <div slot="header" class="clearfix">
        <span><i class="el-icon-chat-dot-round"></i> 在线客服</span>
      </div>
      <div class="text item">
        <div style="margin-bottom:10px">
          <img src="../assets/img/qqlogo.png" alt="" height="12px" width="12px"> <span>QQ客服</span>
        </div>
        <div style="margin-bottom:10px">
          <img src="../assets/img/wwlogo.png" alt="" height="12px" width="12px"> <span>旺旺客服</span>
        </div>
        <div style="margin-bottom:20px">
          <img src="../assets/img/msnlogo.png" alt="" height="12px" width="12px"> <span>MSN客服</span>
        </div>
        <div style="margin-bottom:-10px">
          <span @click="changeShow">隐藏</span>
        </div>
      </div>
    </el-card>
    <div class="xianshi fixed-r" v-show="!isShow" @click="changeShow">
      <span>显示</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    changeShow() {
      if (this.isShow) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    },
  },
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
.xianshi {
  width: 20px;
  text-align: center;
  padding: 10px 0;
  border-radius: 5px;
  color: white;
  background-color: #ffba57;
}
.fixed-r {
  position: fixed;
  right: 0;
  top: 20%;
}
.item {
  margin-bottom: 10px;
}
</style>