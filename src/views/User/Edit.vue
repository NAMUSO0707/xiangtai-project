<template>
  <el-card>
    <div slot="header">
      <span>编辑用户</span>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.nickname"></el-input>
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
      <el-form-item>
        <el-button type="primary" @click="handleEdit">保存修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { User } from "@/api/index";
export default {
  data() {
    return {
      id: "",
      form: {
        username: "",
        nickname: "",
        name: "",
        tel: "",
        sex: "男",
        agree: "",
      },
      editorContent: "",
    };
  },
  // 监听路由地址改变
  //  to 要跳转的地址  from原来的地址  next
  beforeRouteUpdate(to, from, next) {
    let { id } = to.params;
    // 缓存ID
    this.id = id;
    this.loadInfo(id);
    next();
  },
  created() {
    //  获取参数
    let { id } = this.$route.params;
    // 缓存ID
    this.id = id;
    //  获取个人资料
    this.loadInfo(id);
    console.log(this.$route);
  },
  methods: {
    async loadInfo(id) {
      let { status, data } = await User.info({ id });
      if (status) {
        this.form = data;
      }
    },
    async handleEdit() {
      console.log("id:" + this.id);
      let { status, msg } = await User.edit(this.id, { ...this.form });
      if (status) {
        this.$message.success(msg);
        setTimeout(() => {
          this.$router.replace("/user/list");
        },1000);
      } else {
        this.$message.error(msg);
      }
    },
  },
};
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
