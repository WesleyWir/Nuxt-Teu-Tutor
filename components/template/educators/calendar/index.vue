<template>
  <div
    id="calendar-body"
    class="d-flex justify-content-center align-items-start"
  >
    <div class="row ms-3 mw-75">
      <div class="col-12">
        <v-date-picker
          v-model="date"
          :attributes="attributes"
          @dayclick="onDayClick"
          @update:from-page="pageChange"
          is-expanded
        />
      </div>
      <div id="time" class="col-12 m-3 row">
        <div class="col-md-3 col-sm-6">
          <v-date-picker
            mode="time"
            v-model="date"
            :timezone="timezone"
            is24hr
          />
        </div>
        <div class="col-md-3 col-sm-6">
          <v-date-picker
            mode="time"
            v-model="date"
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
      <div class="col-12">
        <div id="show-calendar">
          <div class="card m-3" style="width: 18rem">
            <div class="card-body">
              <div class="col-12 d-flex justify-content-around align-items-center">
                <h5 class="card-title fw-bold">12/02/2022</h5>
                <button class="btn btn-danger">
                  <i class="fa-solid fa-calendar-xmark"></i>
                  <span class="fw-bold">Deletar</span>
                </button>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <v-date-picker
                    mode="time"
                    v-model="date"
                    :timezone="timezone"
                    is24hr
                  />
                  <button class="btn btn-danger">
                    <i class="fa-solid fa-calendar-xmark"></i>
                  </button>
                </li>
                <li class="list-group-item">
                  <v-date-picker
                    mode="time"
                    v-model="date"
                    :timezone="timezone"
                    is24hr
                  />
                  <button class="btn btn-danger">
                    <i class="fa-solid fa-calendar-xmark"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
      days: [],
    };
  },
  computed: {
    date: {
      get() {},
      set(date) {
        console.log(date);
      },
    },
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
    pageChange(page) {
      console.log(page);
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar-body {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  margin-top: 2%;

  #show-calendar {
    background-color: $components-color;
    border: 10px solid $components-color;
    border-radius: 10px;
    padding: 8px;
    display: flex;
    margin: 0px 10px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
  }

  @include media-between(lg, xxl) {
    #calendar-body {
      #time {
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: nowrap;
      }
    }
  }
}
</style>