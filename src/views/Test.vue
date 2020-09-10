<template>
	<div class="box">
		<h2>测试页面：父组件</h2>
		<fieldset>
			<legend>55</legend>
			<Counter v-model.number="x" max="10" min="1"></Counter>
		</fieldset>
         <fieldset>
			 <legend>sync修饰符:v-bind绑定属性+v-on 绑定update事件</legend>
		 </fieldset>
		<SyncCounter :num="y" @update:num="y=$event" max='10' min='1'></SyncCounter>
	</div>
</template>

<script>
	import Counter from '@/components/Counter.vue';
	export default {
		data() {
			return {
				x: 3
			}
		},
		components: {
			Counter
		},
		methods: {
			add(){
				this.x +=1;
			}
		},
	}
</script>

<style>
	.box {
		padding: 30px;
		background-color: #eee;
	}
</style>
