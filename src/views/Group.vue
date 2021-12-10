<template>
  <div class="app-page category-page">
    <base-spinner
      v-if="inuse"
      class="page-spinner"
    />
    <template v-else>
      <div class="header">
        <span class="title">
          {{ inuseGroup.title }}
        </span>
        <base-button
          v-if="inUse && inuseScope.can('own_topics:write')"
          class="new-topic-button"
          :to="{ name: 'makeSubject' }"
        >
          <i class="fas fa-plus plus-icon"></i>
          Create Subject
        </base-button>
      </div>
      <subject-index/>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import SubjectIndex from '@/components/Subject/SubjectIndex'

export default {
  components: { SubjectIndex: SubjectIndex },
  data () {
    return {
      inuse: false
    }
  },

  computed: {
    ...mapState({
      inuseGroup: state => state.categories.current
    })
  },

  watch: {
    '$route.params.categorySlug': {
      immediate: true,
      async handler (categorySlug) {
        this.loading = true
        try {
          await this.loadCurrentCategory({ categorySlug })
          await this.loadTopics({ filters: { categorySlug } })
          this.loading = false
        } catch (err) {
          this.$router.push({ name: 'Home' })
          this.loading = false
        }
      }
    }
  },

  methods: {
    ...mapActions([
      'loadTopics',
      'loadCurrentCategory'
    ])
  }
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
