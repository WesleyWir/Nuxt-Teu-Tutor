<template>
  <div class="form-check-online mt-1 mb-3">
    <input
      class="form-check-input"
      type="checkbox"
      id="flexCheckDefault"
      @change="updateFilterInQuery($event)"
    />
    <label class="form-check-label" for="flexCheckDefault"> Online </label>
  </div>
</template>

<script>
export default {
  methods: {
    updateFilterInQuery(event) {
      const checked = event.target.checked;
      if (checked) {
        this.$router.push({
          query: {
            ...this.$route.query,
            ...{
              online: checked || undefined,
            },
          },
        });
      } else {
        this.$router.push({
          query: {
            ...this.$route.query,
            ...{
              online: undefined,
            },
          },
        });
      }
    },
  },
};
</script>

<style>
</style>