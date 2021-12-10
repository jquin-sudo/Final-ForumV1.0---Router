<template>
  <div class="app-page edit-topic-page">
    <div class="page-form-container">
      <h1 class="page-form-title">
        Modify Subject
      </h1>
      <subject-input
        :topic-id="$route.params.topicId"
        submit-button-title="Update"
        :update="true"
      />
    </div>
  </div>
</template>

<script>
import SubjectInput from '@/components/Subject/SubjectInput'

export default {
  components: { SubjectInput: SubjectInput }
}
</script>
