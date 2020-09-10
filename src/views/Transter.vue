<template>
	<div class="box">
		<Tran :left.sync="data" :right.sync="value"></Tran>
	</div>
</template>

<script>
	import Tran from '@/components/Comp.vue'

	export default {
		data() {
			return {
				data: [
					{ name: "选项1", checked: false, },
					{ name: "选项2", checked: false, },
					{ name: "选项3", checked: false, },
					{ name: "选项4", checked: false, },
					{ name: "选项5", checked: false, },
					{ name: "选项6", checked: false, },
				],
				value: [{ name: "选项7", checked: false }],
			}
		},
		components: {
			Tran,
		},
	}
</script>

<style lang="less" scoped>

</style>
