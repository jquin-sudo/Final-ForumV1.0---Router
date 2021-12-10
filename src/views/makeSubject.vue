<template>
  <div class="app-page create-topic-page">
    <div class="page-form-container">
      <h1 class="page-form-title">
        Create Subject
      </h1>
      <topic-form :category-slug="$route.params.categorySlug"/>
    </div>
  </div>
</template>

<script>
import SubjectInput from '@/components/Subject/SubjectInput'

export default {
  components: { TopicForm: SubjectInput }
}
</script>

