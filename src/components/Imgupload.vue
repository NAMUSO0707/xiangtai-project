<template>
	<div id="app">
		<div class="upload-box" :class="{uploaded:deleteopen}">
			<div class="img-box">
				<input type="file" :value="fileValue" class="file_input" @change="filechange" />
				<b>+</b>
			</div>
			<img :src="url" class="preview">
			<div class="delete" @click="deleteHandle">
				<b>×</b>
			</div>
			<input name="avatar" datatype="*" type="hidden" v-model="postUrl" />
		</div>
	</div>
</template>

<script>
	import { Upload } from '@/api/index.js';
	export default {
		name: 'Upload',
		data() {
			return {
				url: '',
				postUrl: '',
				fileValue: '',
				deleteopen: false
			}
		},
		methods: {
			async filechange(e) {
				//获取file对象
				let file = e.target.files[0];
				// 相当于form表单
				var formData = new FormData();
				//上传文件
				formData.append('file', file);
				//上传文件上传类型
				formData.append('type', 'avatar');
				let { status, data, msg } = await Upload.upload(formData);
				if (status) {
					// 上传成功
					this.url = data;
					this.deleteopen = true;
					this.postUrl = data;
				} else {
					//上传失败
					alert(msg)
					return;
				}

			},
			// 删除图片
			async deleteHandle() {
				this.url = '';
				this.deleteopen = false;
				let newurl = this.postUrl.replace(/.*\/images/, './images');
				//console.log(newurl)
				let { status, data } = await Upload.dele({ src: newurl });
				if (status) {
					this.postUrl = '';
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.upload-box {
		width: 150px;
		height: 150px;
		border: 1px solid black;
		border-style: dashed;
		border-radius: 3px;
		font-size: 24px;
		text-align: center;
		line-height: 150px;
		position: relative;
		overflow: hidden;
		cursor: pointer;

		.img-box {
			display: block;
			position: relative;

			.file_input {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}

		.preview {
			width: 100%;
			display: none;
		}

		.delete {
			display: none;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			font-size: 24px;
			line-height: 150px;
			color: white;
			cursor: pointer;
		}
	}

	.uploaded {
		border:0;
		.preview {
			display: block;
		}

		.img-box {
			display: none;
		}

		&:hover {
			.delete {
				display: block;
				background-color: rgba(0, 0, 0, 0.7);
			}
		}
	}
</style>
