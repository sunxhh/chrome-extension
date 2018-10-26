<template>
	<div class="folder-wrapper">
		<div v-for="item in folderList" v-drag:drop="drop" v-on:dragover="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:click="selected($event,item)" v-bind:class="['folder-content',item.id===selectedFolderId?'selected-folder':'']" :id="'folder_'+item.id" :key="item.id">
			<div class="folder-title">{{item.title}}</div>
			<div class="triangle-icon">
				<triangle></triangle>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				dragData: {
					a: 1,
					b: 2
				}
			};
		},
		props: {
			folderList: {
				type: Array,
				default: []
			}
		},
		created: function () {},
		computed: {
			...(mapState('bookmark', {
				selectedFolderId: (state) => {
					return state.selectedFolderId
				}
			}))
		},
		watch: {
			selectedFolderId: {
				immediate: true,
				handler(val) {
					if (val === -1) {
						return;
					}

				}
			}
		},
		methods: {
			selected: function (e, item) {
				if (this.selectedFolderId === item.id) {
					return;
				}
				this.changeSelectedFolderId(item.id);
			},

			drop(data, $event) {
				let target = $event.currentTarget;
				target.style['border'] = '';
			},
			dragenter($event) {
				let target = $event.currentTarget;
				target.style['border'] = '3px solid #333';
				event.preventDefault();
			},
			dragleave($event) {
				let target = $event.currentTarget;
				target.style['border'] = '';
			},
			...mapMutations([
				'changeSelectedFolderId'
			]),
		}
	};

</script>
<style lang="stylus" scoped>
	@import '../../../../common/stylus/variable.styl';

	.folder-wrapper {
		width: 250px;
		overflow: auto;
		position: fixed;
		top: 70px;
		left: 0px;
		bottom: 0px;
		padding: 15px 10px;

		.folder-content {
			height: 45px;
			line-height: 45px;
			padding: 0px 26px 0px 10px;
			margin-bottom: 10px;
			background: #eaeaea;
			cursor: pointer;
			position: relative;
			border: 1px solid rgba(0, 0, 0, 0);

			&:hover {
				background: #dbdbdb;
			}

			&.selected-folder {
				background: #fff;
				border: 1px solid #333;
			}

			.triangle-icon {
				width: 20px;
				height: 100%;
				position: absolute;
				right: 6px;
				top: 0px;
			}
		}
	}

</style>
