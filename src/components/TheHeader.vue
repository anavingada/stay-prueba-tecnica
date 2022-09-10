<template>
  <header class="d-flex align-items-center">
    <div class="container d-flex justify-content-center align-items-center">
      <router-link to="/">
        <img src="~@/assets/images/logo.png" alt="Stay Logo" />
      </router-link>
      <h1>Stay Prueba Técnica</h1>
    </div>
  </header>
</template>

<style scoped>
h1 {
  color: #ffffff;
}
img {
  height: 100%;
  max-height: 98px;
}
header {
  background-color: #1c4a8d;
  height: 120px;
  max-height: 100%;
}
a,
h1 {
  margin: 10px 50px;
}
</style>