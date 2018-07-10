<template>
  <div>
    <span>asdasdasd</span>
    <header-search></header-search>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderSearch from "./components/header-search/index.vue";
export default {
  components: {
    HeaderSearch
  },
  data() {
    return {};
  }
};
</script>