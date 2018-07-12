<template>
<div class="folder-wrapper">
  <div v-for="item in folderList" class="folder-content" :key="item.id">
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
  props: ["folderList"],
  created: function() {},
  methods: {}
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

    &:hover {
      background: #dbdbdb;
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