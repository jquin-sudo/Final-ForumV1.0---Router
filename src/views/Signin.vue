<template>
  <div class="app-page login-page">
    <div class="page-form-container">
      <h1 class="page-form-title">
        Sign In
      </h1>
      <signin-input/>
    </div>
  </div>
</template>

<script>
import SigninInput from '@/components/ID/Input'

export default {
  components: { SigninInput: SigninInput }
}
</script>

<style lang="stylus" scoped>
.page-form-container
  max-width: 1280px
</style>
