<template>
  <div id="checkout" class="container">
    <TemplateEducatorsCheckoutCalendar :educator_id="educator.id" />

    <TemplateEducatorsCheckoutContactMean />

    <div class="form-group" id="checkout-note">
      <label for="note">Nota:</label>
      <textarea
        class="form-control"
        id="note"
        v-model="note"
        placeholder="Descreva aqui a forma como o educador pode lhe contatar e outras anotações referente as aulas..."
        rows="3"
      ></textarea>
    </div>
    <TemplateEducatorsCheckoutSubmitButton />
  </div>
</template>

<script>
export default {
  middleware: ["auth", "student_strategy"],
  auth: "local_student",
  async asyncData({ $axios, route }) {
    try {
      const id = route.params.id;
      const { data } = await $axios.get(`/educators/${id}`);
      const educator = data;
      return { educator };
    } catch (error) {
      error();
    }
  },
  async fetch() {
    await this.$store.dispatch("studentCalendar/resetState");
    return await this.$store.dispatch(
      "studentCalendar/setEducatorId",
      this.educator.id
    );
  },
  computed: {
    note: {
      get() {
        return this.$store.state.studentCalendar.note;
      },
      set(note) {
        return this.$store.dispatch(
          "studentCalendar/setStudentCalendarNote",
          note
        );
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#checkout-note {
  width: 75%;
  position: relative;
  margin: 0 auto;
}
</style>