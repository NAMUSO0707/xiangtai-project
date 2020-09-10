<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>管理员列表</span>
    </div>
    <el-table :data="tableData" style="width: 100%; font-size:12px">
      <el-table-column prop="id" type="index" label="#"></el-table-column>
      <el-table-column prop="username" label="账号"></el-table-column>
      <el-table-column prop="fullname" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别" width="100"></el-table-column>
      <el-table-column prop="tel" label="手机"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column label="头像" width="80">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt width="50px" height="50px" />
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <router-link :to="{name:'AdminEdit', params:{id:scope.row.id}}">
            <el-button size="mini" type="primary" plain>
              <i class="el-icon-edit"></i>
              编辑
            </el-button>
          </router-link>
          <el-button size="mini" type="danger" plain @click="removeHandle(scope.row.id,scope.$index)">
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { Admin } from "@/api/index";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    // 获取列表数据
    this.loadList();
  },
  methods: {
    async loadList() {
      let { status, data} = await Admin.list();
      if (status) {
        this.tableData = data;
      }
    },
    // filterTag(value, row) {
    //   return row.person === value;
    // },
    removeHandle(id,index){
      console.log(id);
      this.$confirm('确定要删除此账户吗？',{type:'warning'})
      .then(async()=>{
        // 发送ajax
      let {status} = await Admin.remove(id);
      if(status){
        this.tableData.splice(index,1);
        this.$message.success('删除成功！');
      }
      })
    },
  }
};
</script>

<style lang="less">
.el-button{
  margin-right: 10px;
}
</style>