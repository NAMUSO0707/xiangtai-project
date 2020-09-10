<template>
  <div id="app">
    <div class="left-box">
      <div class="header">
        <input type="checkbox" />
        <span>列表一</span>
      </div>
      <ul class="list">
        <li class="item"><input type="checkbox" v-model="item.checked" />选项一</li>
      </ul>
    </div>
    <div class="btn-box">
      <button class="btn">&lt;</button>
      <button class="btn">&gt;</button>
    </div>

    <div class="right-box">
      <div class="header">
        <input type="checkbox" />
        <span>列表一</span>
      </div>
      <ul class="list">
        <li class="item"><input type="checkbox" />选项六</li>
        <li class="item"><input type="checkbox" />选项七</li>
        <li class="item"><input type="checkbox" />选项八</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    leftList= [{id:'1', label:'选项一'},{}],
    rightList= ['列表六', '列表七', '列表八']
  },
  methods: {
    putRight(){
      let leftArr=[];
      let rightArr=[];
      this.leftList.forEach((item,index)=>{
        if(item.checked){
          rightArr.push(item);
          item.checked=false;
        } else {
          leftArr.push(item);
        }
      });

      rightArr=rightArr.concat(this.rightList)
      this.$emit("update:leftList",leftArr);
      this.$emit("update:rightList",RightArr);
    }
  },
};
</script>

<style lang="less" scoped>
ul {
  // list-style-type: none;
  width: 200px;

  padding: 13px;

  li {
    margin-bottom: 15px;
    font-size: 13px;
  }
}

#app {
  width: 50%;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  align-items: top;

  .left-box,
  .right-box {
    border: 1px solid tomato;
    .header {
      background-color: tomato;
      padding: 13px;
      color: #fff;
    }

    input {
      margin-right: 10px;
    }
  }
}
.btn {
  padding: 7px 15px;
  background-color: tomato;
  color: white;
  border: 0;
  border-radius: 3px;
  &:first-child {
    margin-right: 20px;
  }
}
.right-box {
  margin-top: 0;
}
</style>
