<template>
  <div id="checkout" class="container">
    <TemplateEducatorsSingleCalendar :educator_id="educator.id" />

    <div class="form-group" id="checkout-note">
      <label for="exampleFormControlTextarea1">Nota:</label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        placeholder="Descreva aqui a forma como o educador pode lhe contatar e outras anotações referente as aulas..."
        rows="3"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route, error }) {
    try {
      const id = route.params.id;
      const { data } = await $axios.get(`/educators/${id}`);
      const educator = data;
      return { educator };
    } catch (error) {
      error();
    }
  },
  async fetch(){
    return await this.$store.dispatch("studentCalendar/setEducatorId", this.educator.id);
  }
};
</script>

<style lang="scss" scoped>
#checkout-note {
  width: 75%;
  position: relative;
  margin: 0 auto;
}
</style>