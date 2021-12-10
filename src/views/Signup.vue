<template>
  <div class="register-page app-page">
    <div class="page-form-container">
      <h1 class="page-form-title">
        Sign Up
      </h1>
      <signup/>
    </div>
  </div>
</template>

<script>
import Signup from '@/components/ID/Signup'

export default {
  components: { Signup: Signup }
}
</script>

<style lang="stylus" scoped>
.page-form-container
  max-width: 1280px
</style>
