<template>
  <div>
    <div class="title d-flex justify-content-center mx-auto mt-2">
      <h2 class="h2 fw-bold">Educadores Relacionados</h2>
    </div>
    <div id="educators-list-section-main" class="p-5">
      <TemplateEducatorsListItem
        v-for="educator in educators"
        :key="educator.id"
        :educator="educator"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['educator_id'],
  data() {
    return {
      educators: [],
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(`/educators-related/${this.educator_id}/`);
    this.educators = data.data;
  },
};
</script>

<style lang="scss">
#educators-list-section-main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
}

@include media-between(xs, md) {
  #educators-list-section-main {
    flex-direction: column;
    justify-content: center;
  }
}
</style>