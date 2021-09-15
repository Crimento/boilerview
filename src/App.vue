<!--App.vue-->
<template>
  <div class="h-50 w-75 bg-light card m-auto d-flex">
    <span class="display-1 m-auto">{{ msg }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'My first app',
    };
  },
};
</script>
<style lang="scss">
@import './sass/style.scss';
</style>
