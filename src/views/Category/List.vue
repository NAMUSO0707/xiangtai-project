<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>分类列表</span>
    </div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
      <span class="custom-tree-node" slot-scope="{data}">
        <span>{{ data.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            :disabled="(data.label=='全部分类')?true:false"
            @click="dialogFormVisible = true"
          >
            <i class="el-icon-edit"></i>
            编辑
          </el-button>
          <el-button type="text" size="mini" @click="dialogForm2Visible = true">
            <i class="el-icon-plus"></i>
            添加
          </el-button>
          <el-button type="text" size="mini">
            <i class="el-icon-delete"></i>
            删除
          </el-button>
        </span>
      </span>
    </el-tree>

    <el-dialog title="编辑分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="添加分类" :visible.sync="dialogForm2Visible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
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
let id = 1000;
export default {
  data() {
    return {
      data: [
        {
          label: "全部分类",
          children: [
            {
              label: "科技",
              children: [
                {
                  label: "人工智能"
                },
                {
                  label: "黑客技术"
                }
              ]
            },
            {
              label: "娱乐",
              children: [
                {
                  label: ""
                }
              ]
            },
            {
              label: "编程",
              children: [
                {
                  label: "前端"
                },
                {
                  label: "JAVA"
                },
                {
                  label: "PHP"
                }
              ]
            },
            {
              label: "设计",
              children: [
                {
                  label: ""
                }
              ]
            }
          ]
        }
      ],
      dialogFormVisible: false,
      dialogForm2Visible : false,
      defaultProps: {
        children: "children",
        label: "label"
      },

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
    // open() {
    //   this.$prompt("请输入邮箱", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    //     inputErrorMessage: "邮箱格式不正确"
    //   })
    //     .then(({ value }) => {
    //       this.$message({
    //         type: "success",
    //         message: "你的邮箱是: " + value
    //       });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "取消输入"
    //       });
    //     });
    // }
  }
};
</script>

<style lang="less">
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;

  i {
    margin-right: 10px;
  }
}
</style>