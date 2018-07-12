<template>
  <a class="bookmark-tile">
    <div class="tile-title-wrapper">
      <div class="tile-favicon">
        <img v-bind:src="faviconUrl">
      </div>
      <div class="tile-title">
        {{title}}
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
      thumbUrl: "",
      title: ""
    };
  },
  props: ["faviconUrl", "thumbUrl", "title"],
  created: function() {},
  methods: {}
};
</script>
<style lang="stylus" scoped>
@import '../../../../common/stylus/variable.styl';
</style>