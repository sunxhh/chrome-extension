<template>
<div class="folder-wrapper">
  <div v-for="item in folderList" class="folder-content" :key="item.id">
    <div class="folder-title">{{item.title}}</div>
    <div class="">
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
@import 'common/stylus/variable.styl';

.folder-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>