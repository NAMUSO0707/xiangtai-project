<template>
  <el-card class="box-card">
    <div slot="header" class="header">
      <span>管理员角色</span>
      <el-button size="mini" type="primary" plain @click="dialogForm2Visible = true">
        <i class="el-icon-circle-plus-outline"></i>
        添加角色
      </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" type="index" label="#" width="255"></el-table-column>
      <el-table-column
        label="分类"
        width="255"
        :filters="[{ text: '超级管理员', value: '超级管理员' }, { text: '管理员', value: '管理员' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag type disable-transitions>{{scope.row.name}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="255">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            plain
            :disabled="scope.row.disabled"
            @click="dialogFormVisible = true"
          >
            <i class="el-icon-edit"></i>
            编辑
          </el-button>
          <el-button size="mini" type="danger" plain :disabled="scope.row.disabled" @click="removeHandle(scope.row.id,scope.$index)">
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑角色" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加角色" :visible.sync="dialogForm2Visible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogForm2Visible = false">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
import { Role } from "@/api/index";
export default {
  data() {
    return {
      tableData: [],
      
      dialogFormVisible: false,
      dialogForm2Visible: false,
      form: {
        id: "",
        role_name: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    // 获取列表数据
    this.loadList();
  },
  methods: {
    async loadList() {
      let { status, data, total } = await Role.list();
      if (status) {
        this.tableData = data;
      }
    },
    filterTag(value, row) {
      return row.person === value;
    },
    removeHandle(id,index){
      console.log(id);
      this.$confirm('确定要删除此角色吗？',{type:'warning'})
      .then(async()=>{
        // 发送ajax
      let {status} = await Role.remove(id);
      if(status){
        this.tableData.splice(index,1);
        this.$message.success('删除成功！');
       }
    })
    },
    // addHandle(form){
      
    // }
  }
};
</script>

<style lang="less">
.header {
  display: flex;
  justify-content: space-between;
}
.box-card {
  width: 70%;
}
</style>