<template>
  <div>
    <header-search></header-search>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderSearch from "./components/header-search";
export default {
  components: {
    MHeader
  },
  data() {
    return {};
  }
};
</script>