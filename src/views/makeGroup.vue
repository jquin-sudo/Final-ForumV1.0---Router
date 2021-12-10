<template>
  <div class="app-page create-category-page">
    <div class="page-form-container">
      <h1 class="page-form-title">
        New Group
      </h1>
      <group-input/>
    </div>
  </div>
</template>

<script>
import GroupInput from '@/components/Groups/GroupsInput'
export default {
  components: { GroupInput: GroupInput }
}
</script>