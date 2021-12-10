<template>
  <div class="category-item">
    <base-confirm-dialog
      v-if="showConfirmDialog"
      confirm-button-title="delete"
      dismiss-button-title="cancel"
      @ignore="showConfirmDialog = false"
      @verify="deleteCategory({ categorySlug: category.slug })"
    >
      <template #title>
        Delete this group?
      </template>
      <template #default>
        Are you sure?
      </template>
    </base-confirm-dialog>
    <router-link
      class="category-item-link"
      :to="{ name: 'Group', params: { categorySlug: category.slug } }"
      :style="{ 'border-color': category.color }"
    >
      <div class="content">
        <h1 class="title">
          {{ category.title }}
        </h1>
        <p class="description">
          {{ category.description }}
        </p>
      </div>
      <div class="actions">
        <router-link
          v-if="inUse && inuseScope.can('categories:write')"
          :to="{ name: 'modifyGroup', params: { categorySlug: category.slug } }"
        >
          <i
            class="action-button fas fa-pencil-alt"
          ></i>
        </router-link>
        <i
          v-if="inUse && inuseScope.can('categories:delete')"
          class="action-button fas fa-trash-alt"
          @click.prevent.stop="showConfirmDialog = true"
        ></i>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    category: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      showConfirmDialog: false
    }
  },

  methods: {
    ...mapActions(['deleteCategory'])
  }
}
</script>

<style lang="stylus" scoped>
.category-item-link
  background: #ffffff
  padding: 0px
  cursor: pointer
  border-left: 0px solid
  display: block
  text-decoration: none
  justify-content: left
  border-radius: 25px

.category-item:hover 
  outline: #5296dd solid 3px
  border-radius: 25px

.title
  font-size: 20px
  margin: 0
  font-weight 400
  color: #000
  padding-left 20px

.description
  color: #000
  padding-left 20px
 





</style>
