export default {
  computed: {
    inUse() {
      return this.$store.getters.inUse;
    },

    inuseScope() {
      return this.$store.state.users.inuseScope;
    }
  }
};
