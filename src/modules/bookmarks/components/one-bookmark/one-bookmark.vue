<template>
  <a class="bookmark-tile" v-bind:href="bookmark.url">
    <div class="tile-title-wrapper" v-bind:title="bookmark.title">
      <div class="tile-favicon">
        <img v-bind:src="faviconUrl">
      </div>
      <div class="tile-title">
        {{bookmark.title}}
      </div>
    </div>
    <div class="tile-content">
      <img v-bind:src="thumbUrl" />
    </div>
  </a>

</template>
<script>
export default {
  data() {
    return {
      faviconUrl: "",
      thumbUrl: ""
    };
  },
  props: ["bookmark"],
  created: function() {},
  methods: {}
};
</script>
<style lang="stylus" scoped>
@import '../../../../common/stylus/variable.styl';

.bookmark-tile {
  display: inline-block;
  width: 150px;
  position: relative;

  .tile-title-wrapper {
    .tile-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>