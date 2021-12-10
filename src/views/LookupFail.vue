<template>
  <div class="app-page not-found-page">
    <h1>404</h1>
    <h2>
      HUH?
    </h2>
    <div class="button-section">
      <base-button
        :to="{ name: '/' }"
      >
        Back to Home
      </base-button>
    </div>
  </div>
</template>



<style lang="stylus" scoped>
.base-button
  width: 200px

.button-section
  display: flex
  justify-content: center
  align-items: center
  margin-top: 50px
</style>
