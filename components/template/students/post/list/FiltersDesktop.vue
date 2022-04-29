<template>
  <div id="filters">
    <div class="container">
      <div class="row p-3">
        <TemplateStudentsPostListFiltersSubjects
          v-on:emitSubjectFilter="updateFilterInQuery($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjects: [],
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get("/subjects");
      this.subjects = data;
    } catch ({ response }) {
      console.error(response);
    }
  },
  methods: {
    updateFilterInQuery(params) {
      this.$router.push({
        query: { ...this.$route.query, ...params },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#filters {
  background-color: $components-color;
  width: 100%;
  height: 100%;
  max-width: 100%;
  border: solid $components-color 5px;
  border-radius: 10px;
}
</style>