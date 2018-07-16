<template>
  <a class="bookmark-tile" v-bind:href="bookmark.url">
    <div class="tile-title-wrapper">
      <div class="tile-favicon">
        <img v-bind:src="faviconUrl">
      </div>
      <el-tooltip class="item" effect="light" v-bind:content="bookmark.title" placement="top-start">
        <div class="tile-title">
          {{bookmark.title}}
        </div>
      </el-tooltip>
    </div>
    <div class="tile-content">
      <img v-bind:src="thumbUrl" />
    </div>
  </a>

</template>
<script>
import { capture } from "common/js/capture.js";
export default {
  data() {
    return {
      faviconUrl: "",
      thumbUrl: ""
    };
  },
  props: ["bookmark"],
  created: function() {
    setTimeout(function() {
      capture().then(data => {
        document.body.appendChild(data);
      });
    }, 3000);
  },
  methods: {}
};
</script>
<style lang="stylus" scoped>
@import '../../../../common/stylus/variable.styl';

.bookmark-tile {
  display: inline-block;
  width: 150px;
  position: relative;

  &>>>.item {
    font-size: $font-size-medium;
  }

  .tile-title-wrapper {
    .tile-title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>