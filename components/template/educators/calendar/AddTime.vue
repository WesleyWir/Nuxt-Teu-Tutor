<template>
  <div id="time" class="col-12 m-3 row">
    <div class="col-md-3 col-sm-6">
      <v-date-picker
        mode="time"
        v-model="start_date"
        :timezone="timezone"
        :min-date='new Date()'
        is24hr
      />
    </div>
    <div class="col-md-3 col-sm-6">
      <v-date-picker
        mode="time"
        v-model="end_date"
        :timezone="timezone"
        is24hr
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
        :min-date='new Date()'
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
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      timezone: "",
    };
  },
  computed: {
    start_date: {
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
    end_date: {
      get() {
        return this.$store.state.calendar.addCalendar.end_time;
      },
      set(end_date) {
        return this.$store.dispatch(
          "calendar/setAddCalendarEndTime",
          end_date
        );
      },
    },
    price: {
      get(){
        return this.$store.state.calendar.addCalendar.price;
      },
      set(price){
        return this.$store.dispatch('calendar/setAddCalendarPrice', price)
      }
    }
  },
  methods: {
    async submitDaysHours() {
      return await this.$store.dispatch("calendar/postDays");
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