<template>
  <the-header></the-header>
  <main class="container mt-5">
    <router-view :key="$route.fullPath"></router-view>
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'Main',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
/* For all components */
img {
  width: 100%;
  max-width: 100%;
}
h1 {
  font-size: 25px;
}
h2 {
  font-size: 22px;
}
h3 {
  font-size: 18px;
}

/* Table max-height Style */
#table-container #pivotgrid,
#table-container #datagrid {
  max-height: 95vh;
  height: 100%;
}

/* Font size for table results in all views */
#table-container .dx-widget {
  font-size: 12px !important;
}
</style>