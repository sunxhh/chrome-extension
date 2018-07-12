<template>
  <div v-bind:class="['triangle', directionClass]"></div>
</template>
<script>
const typeMap = {
  1: "direction-left",
  2: "direction-right",
  3: "direction-top",
  4: "direction-bottom"
};
export default {
  data() {
    return {};
  },
  props: ["type"],
  created: function() {},
  computed: {
    directionClass: function() {
      let type = this.type || 2;
      return typeMap[type];
    }
  }
};
</script>
<style lang="stylus" scoped>
.triangle {
  background-image: url('../../assets/img/sketched.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 90%;
  height: 100%;

  &.direction-left {
    transform: rotate(270deg);
  }

  &.direction-right {
    transform: rotate(90deg);
  }

  &.direction-top {
    transform: rotate(0deg);
  }

  &.direction-bottom {
    transform: rotate(180deg);
  }
}
</style>