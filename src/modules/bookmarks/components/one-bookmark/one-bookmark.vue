<template>
  <a v-drag:drag="bookmark" class="bookmark-tile" target="_blank" v-bind:href="bookmark.url">
  <!-- <a class="bookmark-tile"> -->
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
      <img v-bind:src="thumbUrl">
    </div>
  </a>

</template>
<script>
import axios from "axios";
import DB from "common/js/indexDB";

let dataBaseOpen = new DB({
  name: "bookmark",
  keyPath: "url",
  upgradeneeded: function(db, name, keyPath) {
    if (!db.objectStoreNames.contains(name)) {
      db.createObjectStore(name, { keyPath: keyPath });
    }
  }
}).init();
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
    this.getUrlImgData(this.bookmark.url);
  },

  methods: {
    getFavicon: function() {},
    getHtml: function() {},
    get_icon: function(url) {
      return "chrome://favicon/" + url;
    },
    // 获取到img
    getUrlImgData(url) {
      return dataBaseOpen.then(db => {
        return db.getDataByKey("bookmark", url).then(data => {
          let { result, store } = data;
          if (result) {
            this.thumbUrl = result.data;
          }
        });
      });
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
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  background: rgb(250, 250, 250);
  border-radius: 2px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }

  .tile-title-wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 34px;
    position: relative;
    padding: 0 8px;
    border-bottom: 1px solid #dbdbdb;

    .tile-favicon {
      display: inline-block;
      flex-grow: 0;
      flex-shrink: 0;
    }

    .tile-title-outter {
      margin-left: 5px;
      max-width: 205px;

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
    font-size: 0px;

    img {
      width: 100%;
      height: 140px;
    }
  }
}
</style>