<template>
  <div class="app-page topic-page">
    <base-spinner
      v-if="loading"
      class="page-spinner"
    />
    <template v-else>
      <topic-view
        :topic="topic"
        @delete="RemoveSubject"
        @reply="jumpToReplyForm"
      />
      <reply-form
        v-if="inUse"
        ref="replyForm"
      />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import SubjectScope from '@/components/SubjectScope'
import RespondInput from '@/components/Respond/RespondInput'

export default {
  components: {
    TopicView: SubjectScope,
    ReplyForm: RespondInput
  },

  data () {
    return {
      loading: false
    }
  },

  computed: {
    ...mapState({
      topic: state => state.topics.current
    })
  },

  watch: {
    '$route.params.topicId': {
      immediate: true,
      async handler () {
        this.loading = true
        try {
          await this.loadCurrentTopic({ topicId: this.$route.params.topicId })
        } catch (err) {
          this.$router.push({ name: 'Home' })
        }
        this.loading = false
      }
    }
  },

  methods: {
    ...mapActions([
      'loadCurrentTopic',
      'deleteTopic'
    ]),

    async RemoveSubject () {
      this.loading = true
      await this.deleteTopic({ topicId: this.topic._id })
      this.$router.push({
        name: 'Group',
        params: { categorySlug: this.topic.category.slug }
      })
    },

    jumpToReplyForm () {
      if (this.$refs.replyForm) {
        this.$refs.replyForm.$el.scrollIntoView()
        this.$refs.replyForm.focus()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.topic-page
  width: 100%
  margin: 30px
</style>
