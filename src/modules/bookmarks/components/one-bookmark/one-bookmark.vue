<template>
  <!-- <a class="bookmark-tile" v-bind:href="bookmark.url"> -->
  <a class="bookmark-tile">
    <div class="tile-title-wrapper">
      <div class="tile-favicon">
        <img v-bind:src="get_icon(bookmark.url)">
      </div>
      <div class="tile-title-outter">
        <el-tooltip popper-class="tooltip-title" effect="light" v-bind:content="bookmark.title" placement="top-start">
          <div class="tile-title">
            {{bookmark.title}}
          </div>
        </el-tooltip>
      </div>
    </div>
    <div class="tile-content">
      <!-- <iframe v-bind:src="bookmark.url"></iframe> -->
    </div>
  </a>

</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      faviconUrl: "",
      thumbUrl: ""
    };
  },
  props: ["bookmark"],
  created: function() {
    this.getHtml();
  },

  methods: {
    getFavicon: function() {},
    getHtml: function() {},
    get_icon: function(url) {
      return "chrome://favicon/" + url;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../../../common/stylus/variable.styl';

.bookmark-tile {
  display: inline-block;
  width: 250px;
  position: relative;

  .tile-title-wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;

    .tile-favicon {
      display: inline-block;
      flex-grow: 0;
      flex-shrink: 0;
    }

    .tile-title-outter {
      margin-left: 5px;
      max-width: 230px;

      .tile-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: $font-size-medium;
        
      }
    }
  }

  .tile-content {
    width: 100%;
    height: 96px;
  }
}
</style>