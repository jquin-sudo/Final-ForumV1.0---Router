<template>
  <div class="navbar">
    <router-link
      class="logo"
      :to="{ name: 'Home' }"
    >
      NotReddit
    </router-link>
    <div class="right">
      <navbar-current-user v-if="inUse"/>
      <template v-else>
        <base-button
          :to="{ name: 'Signup' }"
        >
          Sign Up
        </base-button>
        <base-button
          :to="{ name: 'Signin' }"
        >
          Sign In
        </base-button>
      </template>
    </div>
  </div>
</template>

<script>
import HeaderInuse from './HeaderInUse'

export default {
  components: { NavbarCurrentUser: HeaderInuse }
}
</script>

<style lang="stylus" scoped>
.navbar
  display: flex
  justify-content: space-between
  align-items: center
  background: #92bddf
  font-size: 30px


.logo
  text-decoration none
  color: #ff6314
</style>
