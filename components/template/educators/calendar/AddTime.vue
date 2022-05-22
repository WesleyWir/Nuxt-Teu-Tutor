<template>
  <div id="time" class="col-12 m-3 row">
    <div class="col-md-3 col-sm-6">
      <vue-timepicker
        format="HH:mm"
        input-class="skip-error-style"
        :minute-interval="15"
        lazy
        v-model="start_time"
      />
    </div>
    <div class="col-md-3 col-sm-6">
      <vue-timepicker
        format="HH:mm"
        input-class="skip-error-style"
        :minute-interval="15"
        lazy
        v-model="end_time"
      />
    </div>
    <div class="col-md-3 col-sm-6">
      <input
        type="text"
        class="form-control"
        v-mask="['###.###.###']"
        id="input_price"
        name="price"
        v-model="price"
        :min-date="new Date()"
        placeholder="Preço"
        aria-describedby="name"
      />
    </div>
    <div class="col-md-3 col-sm-6">
      <button type="button" class="btn btn-success" @click="submitDaysHours()">
        <i class="fa-solid fa-circle-plus"></i>
        <strong>Adicionar Horário</strong>
      </button>
    </div>
  </div>
</template>


<script>
import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";
import { mask } from "vue-the-mask";

export default {
  components: { VueTimepicker },
  directives: { mask },
  computed: {
    start_time: {
      get() {
        return this.$store.state.calendar.addCalendar.start_time;
      },
      set(start_time) {
        return this.$store.dispatch(
          "calendar/setAddCalendarStartTime",
          start_time
        );
      },
    },
    end_time: {
      get() {
        return this.$store.state.calendar.addCalendar.end_time;
      },
      set(end_time) {
        if (end_time)
          return this.$store.dispatch(
            "calendar/setAddCalendarEndTime",
            end_time
          );
      },
    },
    price: {
      get() {
        return this.$store.state.calendar.addCalendar.price;
      },
      set(price) {
        return this.$store.dispatch("calendar/setAddCalendarPrice", price);
      },
    },
  },
  methods: {
    async submitDaysHours() {
      await this.$store.dispatch("calendar/prepareToPostDays");
      try {
        await this.$axios.post("/calendars/educators/many/", {
          dates: this.$store.state.calendar.addCalendar.days,
        });
        await this.$store.dispatch("calendar/resetAddCalendar");
        await this.$store.dispatch("calendar/fetchLoadedCalendarDates", this.$auth.user.id);
        return this.showSuccessMessage("Salvo com sucesso");
      } catch ({ response }) {
        return await this.catchReponseError(response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@include media-between(lg, xxl) {
  #time {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: nowrap;
  }
}
</style>