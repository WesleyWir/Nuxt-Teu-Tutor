<template>
  <div class="card item m-3" style="width: 18rem">
    <div class="card-body">
      <div class="col-12 d-flex justify-content-around align-items-center">
        <h5 class="card-title fw-bold">{{ loadedData.date | format_mysql_date_and_hour }}</h5>
        <button class="btn btn-danger">
          <i class="fa-solid fa-calendar-xmark"></i>
          <span class="fw-bold">Deletar</span>
        </button>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <vue-timepicker
            format="HH:mm"
            input-class="skip-error-style"
            :minute-interval="15"
            lazy
            v-model="loadedData.start_time"
            input-width="6em"
          />
          <button class="btn btn-success">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-danger">
            <i class="fa-solid fa-calendar-xmark"></i>
          </button>
        </li>
        <li class="list-group-item">
          <vue-timepicker
            format="HH:mm"
            input-class="skip-error-style"
            :minute-interval="15"
            lazy
            v-model="loadedData.end_time"
            input-width="6em"
          />
          <button class="btn btn-success">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn btn-danger">
            <i class="fa-solid fa-calendar-xmark"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";

export default {
  props: ['date'],
  components: { VueTimepicker },
  data(){
    return {
      loadedData: {}
    }
  },
  created(){
    this.loadedData = { ...this.date}
  },
};
</script>

<style>
</style>