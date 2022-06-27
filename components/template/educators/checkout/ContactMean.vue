<template>
  <div
    id="checkout-contact-means"
    class="p-3 d-flex justify-content-center flex-column align-items-center"
  >
    <div class="title">
      <h2 class="fw-bold">Forma de Contato</h2>
    </div>
    <div class="options">
      <div
        class="form-check mt-2"
        v-for="contactMean in possibleContactMeans"
        :key="contactMean.id"
      >
        <div v-if="contactMean.value">
          <input
            class="form-check-input"
            type="radio"
            v-model="educator_contact_means_id"
            :value="contactMean.id"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            <i
              :class="`fab fa-${contactMean.code}`"
              v-if="contactMean.code != 'email'"
            ></i>
            <i class="fa-solid fa-envelope" v-else></i>
            <span class="text-capitalize">{{ contactMean.code }}</span>
            - {{ contactMean.value }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      possibleContactMeans: [],
    };
  },
  async fetch() {
    const id = this.$route.params.id;
    const { data } = await this.$axios.get(`/contact-means/educators/${id}`);
    this.possibleContactMeans = data;
  },
  computed: {
    educator_contact_means_id: {
      get() {
        return this.$store.state.studentCalendar.educator_contact_means_id;
      },
      set(educator_contact_means_id) {
        return this.$store.dispatch(
          "studentCalendar/setEducatorContactMeansId",
          educator_contact_means_id
        );
      },
    },
  },
};
</script>

<style>
</style>