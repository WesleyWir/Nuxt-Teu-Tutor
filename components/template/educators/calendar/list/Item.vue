<template>
  <div class="card item m-3" style="width: 18rem">
    <div class="card-body">
      <div class="col-12 d-flex justify-content-around align-items-center">
        <h5 class="card-title fw-bold">
          {{ loadedData.date | format_mysql_date_and_hour }}
        </h5>
        <button class="btn btn-danger" @click="deleteDate()">
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
        </li>
        <li class="list-group-item">
          <div>
            <input
              type="text"
              class="form-control"
              v-mask="['###.###.###']"
              id="input_price"
              name="price"
              v-model="loadedData.price"
              :min-date="new Date()"
              placeholder="Preço"
              aria-describedby="name"
            />
          </div>
        </li>
        <li  class="list-group-item d-flex justify-content-center">
          <button class="btn btn-primary fw-bold">
            <i class="fa-solid fa-pen"></i>
            Atualizar
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker/src/vue-timepicker.vue";
import { mask } from "vue-the-mask";

export default {
  props: ["date"],
  components: { VueTimepicker },
  directives: { mask },
  data() {
    return {
      loadedData: {},
    };
  },
  created() {
    this.loadedData = { ...this.date };
  },
  methods: {
    async deleteDate(){
      await this.displayConfirmMessage('Deletar Data', 'Você realmente quer deletar?', async () => {
          await this.$axios.delete(`/calendars/educators/${this.loadedData.id}`)
          await this.$store.dispatch("calendar/fetchLoadedCalendarDates", this.$auth.user.id);
      })
    }
  }
};
</script>

<style>
</style>