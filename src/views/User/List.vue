<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户列表</span>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" type="id" label="#"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="tel" label="手机"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <router-link :to="{name:'UserEdit', params:{id:scope.row.id}}">
            <el-button size="mini" type="primary" plain>
              <i class="el-icon-edit"></i>
              编辑
            </el-button>
          </router-link>
          <el-button size="mini" type="danger" @click="removeHandle(scope.row.id,scope.$index)">
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { User } from "@/api/index";
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
    filterTag(value, row) {
      return row.person === value;
    },
    async loadList() {
      let { status, data, total } = await User.list();
      if (status) {
        this.tableData = data;
      }
    },
    removeHandle(id,index){
      console.log(id);
      this.$confirm('确定要删除此账户吗？',{type:'warning'})
      .then(async()=>{
        // 发送ajax
      let {status} = await User.remove(id);
      if(status){
        this.tableData.splice(index,1);
        this.$message.success('删除成功！');
      }
      })
    }
  }
};
</script>

<style lang="less">
.el-button{
  margin-right: 10px;
}
</style>