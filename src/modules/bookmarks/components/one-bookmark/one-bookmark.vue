<template>
  <a class="bookmark-tile" v-bind:href="bookmark.url">
    <div class="tile-title-wrapper">
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
</style>