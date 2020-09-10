<template>
  <el-container>
    <el-header>
      <Navbar></Navbar>
    </el-header>
    <el-container>
      <RightFixed></RightFixed>
      <div class="container" style="display:flex">
        <el-aside width="220px">
          <LeftMenu></LeftMenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-aside width="220px">
          <RightMenu></RightMenu>
        </el-aside>
      </div>
    </el-container>
    <el-footer>
      <Foot></Foot>
    </el-footer>
  </el-container>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import RightMenu from '@/components/RightMenu.vue';
import RightFixed from '@/components/RightFixed.vue';
import Navbar from '@/components/Navbar.vue';
import Foot from '@/components/Foot.vue';

export default {
  components: {
    LeftMenu,
    RightMenu,
    RightFixed,
    Navbar,
    Foot,
  }
}
</script>

<style lang="less">
.el-header {
  height: 220px !important;
}

//   .el-aside {
//     background-color: #545C64;
//     color: #333;
//     text-align: left;
//     height: 100vh;
//     .el-menu{
//       border-right: 0;
//     }
//   }


// body > .el-container {
//   margin-bottom: 40px;
//   width: 1200px !important;
// }

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//   line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
//   line-height: 320px;
// }
</style>