<template>
  <el-card>
    <div slot="header">
      <span>编辑管理员</span>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="手机" prop="tel">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="头像" prop="avatar">
        <div class="avatar">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" style="width:100%;height:100%"></el-avatar>
        </div>
      </el-form-item>
      <router-link to="/admin/list">
        <el-form-item>
          <el-button type="primary">保存修改</el-button>
        </el-form-item>
      </router-link>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        avatar:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        username: "admin",
        name:"赵薇",
        tel: "12345678910",
        email:"849211508@qq.com",
        sex: "男",
        agree: ""
      },
      editorContent: ""
    };
  }
};
</script>

<style lang="less">
.avatar {
  width: 150px;
  height: 150px;
  border: 1px dashed #ddd;

}
</style>