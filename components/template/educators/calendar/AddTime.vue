<template>
  <div id="time" class="col-12 m-3 row">
    <div class="col-md-3 col-sm-6">
      <v-date-picker
        mode="time"
        v-model="start_date"
        :timezone="timezone"
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
        placeholder="Preço"
        aria-describedby="name"
      />
    </div>
    <div class="col-md-3 col-sm-6">
      <button type="submit" class="btn btn-success">
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
      get() {},
      set(start_date) {
        console.log(start_date);
      },
    },
    end_date: {
      get() {},
      set(start_date) {
        console.log(start_date);
      },
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