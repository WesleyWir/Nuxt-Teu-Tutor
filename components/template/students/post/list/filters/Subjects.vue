<template>
  <div class="col-12">
    <label for="subject" class="mb-2 fw-bold">Matéria</label>
    <select
      class="form-select"
      name="subject"
      aria-label="Default select example"
      v-on:change="updateFilterInQuery($event)"
    >
      <option value="" selected>Selecione uma matéria</option>
      <option v-for="subj in subjects" :value="subj.id" :key="subj.id" :selected="$route.query.subject == subj.id">
        {{ subj.subject }}
      </option>
    </select>
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
    updateFilterInQuery(event) {
      const value = event.target.value

      this.$emit("emitSubjectFilter", {
        subject: value || undefined,
      });
    },
  },
};
</script>

<style>
</style>