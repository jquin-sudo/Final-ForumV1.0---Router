<template>
  <div class="app-page edit-category-page">
    <div class="page-form-container">
      <h1 class="page-form-title">
        Edit Group
      </h1>
      <group-input
        :category-slug="$route.params.categorySlug"
        :update="true"
      />
    </div>
  </div>
</template>

<script>
import GroupInput from '@/components/Groups/GroupsInput'

export default {
  components: { GroupInput: GroupInput }
}
</script>

