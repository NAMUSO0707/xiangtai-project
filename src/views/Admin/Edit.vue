<template>
  <el-card>
    <div slot="header">
      <span>编辑管理员</span>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.fullname"></el-input>
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
      <el-form-item label="头像">
        <div class="avatar">
        <template>
          <img :src="form.avatar" width="100%" height="100%" />
        </template>
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
import {Admin} from '@/api/index';
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        fullname: "",
        tel: "",
        sex: "男",
        email:"",
        avatar: ""
      },
      editorContent: "",

    };
    // 监听路由地址改变
  //  to 要跳转的地址  from原来的地址  next
  },
  beforeRouteUpdate(to, from, next){
    let {id} =to.params;
    this.loadInfo(id);
    next();
  },
  created(){
    let {id} =this.$route.params;
    this.loadInfo(id);
    // console.log(this.$route)
  },
  methods: {
    async loadInfo(id){
      let{status,data} = await Admin.info({id})
      if(status){
        this.form = data;
      }
    }
  },
}
</script>

<style lang="less">
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
</style>
