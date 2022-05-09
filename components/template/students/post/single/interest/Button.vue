<template>
  <div id="interest-button" class="d-grid gap-2 mt-5" v-if="!$fetchState.pending">
    <button
      type="button"
      class="btn btn-success fw-bold"
      @click="showInterest()"
      v-if="!hasInterest"
    >
      Demonstrar interesse
    </button>
    <button
      type="button"
      class="btn btn-danger fw-bold"
      @click="removeInterest()"
      v-else
    >
      Remover interesse
    </button>
  </div>
</template>

<script>
export default {
  props: ["post_id"],
  middleware: ["auth", "educator_strategy"],
  auth: "local_educator",
  data() {
    return {
      hasInterest: false,
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        `/post-interest/educators/${this.$route.params.id}/${this.$auth.user.id}`
      );
      this.hasInterest = data;
    } catch ({ response }) {
      this.showMultipleErrors(response.errors);
    }
  },
  methods: {
    async showInterest() {
      try {
        await this.$axios.post(
          `/post-interest/educators/${this.$route.params.id}/`
        );
        this.hasInterest = true;
      } catch ({ response }) {
        this.showMultipleErrors(response.errors);
      }
    },
    async removeInterest() {
      try {
        await this.$axios.delete(
          `/post-interest/educators/${this.$route.params.id}/`
        );
        this.hasInterest = false;
      } catch ({ response }) {
        this.showMultipleErrors(response.errors);
      }
    },
  },
};
</script>

<style>
</style>