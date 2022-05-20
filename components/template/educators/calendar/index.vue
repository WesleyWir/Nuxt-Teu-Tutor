<template>
  <div
    id="calendar-body"
    class="d-flex justify-content-center align-items-start"
  >
    <div class="row ms-3 mw-75">
      <TemplateEducatorsCalendarAddCalendar />
      <TemplateEducatorsCalendarAddTime />
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
    };
  },
  computed: {
    date: {
      get() {},
      set(date) {
        console.log(date);
      },
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