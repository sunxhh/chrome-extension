<template>
<div class="folder-wrapper">
  <div v-for="item in folderList" v-on:click="selected($event,item)" v-bind:class="['folder-content',item.id===cSelectedId?'selected-folder':'']" :id="'folder_'+item.id" :key="item.id">
    <div class="folder-title">{{item.title}}</div>
    <div class="triangle-icon">
      <triangle></triangle>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["folderList", "selectedId"],
  created: function() {},
  computed: {
    cSelectedId: function() {
      return this.selectedId || this.folderList[0].id;
    }
  },
  methods: {
    selected: function(e, item) {
      this.$emit("selectFolder", item);
    }
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