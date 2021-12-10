<template>
  <router-link
    class="topic-item"
    :to="{ name: 'Subject', params: { topicId: topic._id } }"
  >
    <base-avatar
      :name="topic.user.name"
      :src="topic.user.avatarUrl"
    />
    <div class="main">
      <h1 class="title">
        {{ topic.title }}
      </h1>
      <p class="meta">
        by
        <span class="user-name">
          {{ topic.user.name }}
        </span>
        <span class="date">
          {{ topic.createdAt | humanizeDate }}
        </span>
      </p>
    </div>
    <div class="numbers">
      <span class="replies">
        {{ topic.numberOfReplies }}
        <i class="fas fa-comment icon"></i>
      </span>
      <span class="views">
        {{ topic.views }}
        <i class="fas fa-eye icon"></i>
      </span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    topic: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="stylus" scoped>
.topic-item
  background: #FFF
  padding: 15px
  cursor: pointer
  transition: 0.2s background ease-out
  display block
  text-decoration none
  display: flex
  align-items: center
  border-radius: 25px

.topic-item:hover
  outline: #5296dd solid 3px
  border-radius: 25px

.main
  margin-left: 20px
  display: flex
  flex-direction: column
  justify-content: center

.numbers
  flex: 1
  display: flex
  justify-content: flex-end
  align-items: center
  padding-right: 10px
  color: #000
  font-size: 12px

.views
  margin-left: 14px

.icon
  margin-left: 3px



.user-name
  color: #000

.title
  font-size: 20px
  margin: 0
  font-weight 400
  color: #000


.description
  color: #000
  margin: 10px 0 0
</style>
