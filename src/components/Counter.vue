<template>
	<div class="counter-box">
		<el-button @click="handleDecrease">-</el-button>
		<input type="text" :value="value" @input="$emit('input',$event.target.value)" class="el-input">
		<el-button @click="handleIncrease">+</el-button>
	</div>
</template>

<script>
	export default{
		name:'Counter',
		props:['value','min','max'],
		//租价内部使用数据
		data(){
			return {

			}
		},
		methods:{
			// 增加
			handleIncrease(){
				if(this.value>=this.max){
					return;
				}
				// this.$emit('increase');
				// this.$emit('input',this.value+1);
				this.$emit('update:num',this.num+1);
			},
			// 减少
			handleDecrease(){
				if(this.value<=this.min){
					return;
				}
				// this.$emit('decrease');
				// this.$emit('input',this.value-1);
				this.$emit('update:num',this.num-1);
			}
		}
	}
</script>

<style scoped lang="less">
	.counter-box{
		display: inline-flex;
		.el-button{
			font-weight: bold;
			/* border-radius:0; */
			&:first-child{
				border-right: 0;
			}
			&:last-child{
				border-left: 0;
			}
		}
	}
</style>
