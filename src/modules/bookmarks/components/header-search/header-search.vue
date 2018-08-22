<template>
<div class="bookmarks-header">
  <div class="bookmarks-header-name">书签</div>
  <div class="bookmarks-search-wrapper">
    <input type="text" placeholder="搜索书签">
  </div>
</div>

</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='stylus' scoped>
@import '../../../../common/stylus/variable.styl';

.bookmarks-header {
  height: 60px;
  line-height: 60px;
  display: flex;
  background: $color-background;
  color: $color-text;
  font-size: $font-size-medium-x;
  align-items: center;

  .bookmarks-header-name {
    flex-grow: 1;
    width: 100px;
    margin-left: 30px;
  }

  .bookmarks-search-wrapper {
    display: flex;
    flex-grow: 1.5;
    width: 100px;

    input {
      height: 40px;
      line-height: 40px;
      padding: 0px 30px;
      width: 80%;
    }
  }
}
</style>