<template>
	<div class="box">
		<div class="left">
			<div class="left-head">
				<input type="checkbox" v-model="checkAll_left">列表1
			</div>
			<div class="list" v-for="(item,index) in left" :key="index">
				<input type="checkbox" v-model="item.checked" :value="index">{{item.name}}
			</div>
		</div>
		<div class="content">
			<div class="btn-box">
				<button class="btn" @click="leftHandle">&lt;</button>
				<button class="btn" @click="rightHandle">&gt;</button>
			</div>
		</div>
		<div class="right">
			<div class="right-head">
				<input type="checkbox" v-model="checkAll_right">列表2
			</div>
			<div class="list" v-for="(item,index) in right" :key="index">
				<input type="checkbox" v-model="item.checked">{{item.name}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tran',
		props: ["left", "right"],
		data() {
			return {

			}
		},
		methods: {
			leftHandle() {
				let leftArr = [],
					rightArr = [];
				this.right.forEach((item, index) => {
					if (item.checked) {
						leftArr.push(item);
						item.checked = false;
					} else {
						rightArr.push(item);
					}
				});
				leftArr = leftArr.concat(this.left);
				this.$emit("update:left", leftArr);
				this.$emit("update:right", rightArr);
			},
			rightHandle() {
				let leftArr = [],
					rightArr = [];
				this.left.forEach((item, index) => {
					if (item.checked) {
						rightArr.push(item);
						item.checked = false;
					} else {
						leftArr.push(item);
					}
				});
				rightArr = rightArr.concat(this.right);
				this.$emit("update:right", rightArr);
				this.$emit("update:left", leftArr);
			},

		},
		computed: {
			checkAll_left: {
				set(newValue) {
					console.log(newValue)
					this.left.forEach((item) => {
						item.checked = newValue;
					});
				},
				get() {
					return this.left.every((item) => {
						item.checked;
					})
				}
			},
			checkAll_right: {
				set(newValue) {
					this.right.forEach((item) => {
						item.checked = newValue;
					});
				},
				get() {
					return this.right.every((item) => {
						item.checked;
					})
				}
			}
		},
	}
</script>

<style lang="less" scoped>
	.box {
		display: flex;
		margin-top: 50px;
		width: 70%;
		margin: 0 auto;
	}

	.left {
		margin-right: 150px;
		border: 1px solid tomato;
		width: 250px;
	}

	.left-head,.right-head {
		background-color: tomato;
		color: white;
		height: 30px;
		padding: 15px;

	}

	.right {
		border: 1px solid tomato;
		width: 250px;
	}

	.list {
		padding: 20px;
	}

	.content {
		margin-right: 150px;
		margin-top: 180px;
	}

	.btn {
		outline: 0;
		border: 0;
		padding: 10px 23px;
		background-color: tomato;
		color: white;
		border-radius: 4px;
		margin-left: 6px;
	}
</style>
