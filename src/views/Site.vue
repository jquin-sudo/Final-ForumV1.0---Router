<template>
  <div class="app-page home-page">
    <div class="header">
      <span class="title">
Popular Posts      </span>
      <base-button
        v-if="inUse && inuseScope.can('categories:write')"
        class="new-category-button"
        :to="{ name: 'makeGroup' }"
      >
        <i class="fas fa-plus plus-icon"></i>
        New Group
      </base-button>
    </div>
    <group-index/>
  </div>
</template>

<script>
import GroupIndex from '@/components/Groups/GroupsIndex'
export default {
  components: { GroupIndex: GroupIndex }
}
</script>

<style lang="stylus" scoped>
.header
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 10px

.plus-icon
  margin-right: 5px

.title
  color: #000

.new-topic-button
  font-size: 14px
</style>
