<template>
  <div class="app-page account-page">
    <div class="page-form-container account-settings-form-container">
      <h1 class="page-form-title">
        Settings
      </h1>
      <base-tabs
        v-model="currentTab"
        :options="options"
      />
      <profile-settings-form v-if="currentTab === 'profile'"/>
      <password-settings-form v-else-if="currentTab === 'password'"/>
    </div>
  </div>
</template>

<script>
import IDInput from '@/components/ID/IDInput'
import PrivateInput from '@/components/ID/PrivateInput'

export default {
  components: {
    ProfileSettingsForm: IDInput,
    PasswordSettingsForm: PrivateInput
  },

  data () {
    return {
      currentTab: 'profile',
      options: [
        { key: 'profile', title: 'Profile' },
        { key: 'password', title: 'Change Password' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.base-tabs
  width: 100%
  padding: 20px

.account-settings-form-container
  background: #d7d7d7
</style>
