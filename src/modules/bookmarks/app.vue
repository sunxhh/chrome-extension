<template>
  <div>
    <header-search></header-search>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderSearch from "./components/header-search/header-search.vue";
export default {
  components: {
    HeaderSearch
  },
  data() {
    return {};
  }
};
</script>