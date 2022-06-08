<template>
  <div id="educators-single-date-hour">
    <div class="col-sm-7 col-xs-12" id="educators-single-date-hour-left">
      <div id="educators-single-date-hour-calendar">
        <v-date-picker
          v-model="date"
          :model-config="{
            type: 'string',
            mask: 'YYYY-MM-DD HH:mm',
          }"
          :masks="{ L: 'YYYY-MM-DD' }"
          @dayclick="onDayClick"
          @update:from-page="pageChange"
          :min-date="new Date()"
          is-expanded
        />
      </div>
      <div id="educators-single-date-hour-hours">
        <div id="educators-single-date-hour-hours-title">
          <h3>Selecione os Horários:</h3>
        </div>
        <div id="educators-single-date-hour-hours-checks">
          <div class="hour">
            <input
              type="checkbox"
              class="btn-check hour-check-input"
              id="hour-check_0800_0900"
              autocomplete="off"
            />
            <label
              class="btn hour-check-label hour-check-label-checked"
              for="hour-check_0800_0900"
              >08:00 - 09:00</label
            >
          </div>

          <div class="hour">
            <input
              type="checkbox"
              class="btn-check hour-check-input"
              id="hour-check_0900_1000"
              autocomplete="off"
            />
            <label class="btn hour-check-label" for="hour-check_0900_1000"
              >09:00 - 10:00</label
            >
          </div>

          <div class="hour">
            <input
              type="checkbox"
              class="btn-check hour-check-input"
              id="hour-check_1100_1200"
              autocomplete="off"
            />
            <label class="btn hour-check-label" for="hour-check_1100_1200"
              >11:00 - 12:00</label
            >
          </div>

          <div class="hour">
            <input
              type="checkbox"
              class="btn-check hour-check-input"
              id="hour-check_1500_1600"
              autocomplete="off"
            />
            <label class="btn hour-check-label" for="hour-check_1500_1600"
              >15:00 - 16:00</label
            >
          </div>

          <div class="hour">
            <input
              type="checkbox"
              class="btn-check hour-check-input"
              id="hour-check_1600_1700"
              autocomplete="off"
            />
            <label class="btn hour-check-label" for="hour-check_1600_1700"
              >16:00 - 17:00</label
            >
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-3 col-xs-12" id="educators-single-date-hour-right">
      <div class="col-12 mb-4" id="educators-single-date-hour-right-title">
        <h3>Horários Selecionados</h3>
      </div>
      <div class="col-12" id="educators-single-date-hour-right-dates">
        <div class="col-12 hour-selected">
          <div class="hour-selected-date">
            <h3 class="hour-selected-day">Segunda - 00/00/2022</h3>
            <hr />
          </div>
          <div class="hour-selected-hours">
            <ul>
              <li>08:00 - 09:00 <button class="btn btn-danger">X</button></li>
              <li>09:00 - 10:00</li>
            </ul>
          </div>
        </div>
        <div class="col-12 hour-selected">
          <div class="hour-selected-date">
            <h3 class="hour-selected-day">Sexta - 00/00/2022</h3>
            <hr />
          </div>
          <div class="hour-selected-hours">
            <ul>
              <li>08:00 - 09:00</li>
              <li>09:00 - 10:00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["educator_id"],
  data() {
    return {
      date: new Date(),
    };
  },
  methods: {
    async pageChange(page) {
      console.log(page);
    },
    async onDayClick(day){
        console.log(day)
    }
  },
};
</script>

<style lang="scss" scoped>
#educators-single-date-hour {
  // background-color: $form-components-color;
  // border: 1px solid $dark-green-font-color;
  border-radius: 20px;
  padding: 4%;
  margin-bottom: 5%;

  #educators-single-date-hour-left {
    #educators-single-date-hour-hours {
      margin-top: 8%;
      display: flex;
      flex-direction: column;
      #educators-single-date-hour-hours-title {
        font-weight: bold;
        font-size: x-large;
      }
      #educators-single-date-hour-hours-checks {
        max-width: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: flex-start;
        align-items: center;

        .hour {
          margin-right: 10px;
          margin-top: 20px;

          .hour-check-label {
            background-color: $color-font-white;
            display: flex;
            justify-content: center;
            -webkit-box-shadow: 5px 11px 19px -1px rgba(0, 0, 0, 0.53);
            box-shadow: 5px 11px 19px -1px rgba(0, 0, 0, 0.53);
            border-radius: 5px;
            padding: 10px;
            font-weight: 700;

            &:hover {
              background-color: darken($color-font-white, 10%);
            }
          }

          .hour-check-label-checked {
            background-color: $dark-green-font-color;
            color: $color-font-white;
            display: flex;
            justify-content: center;
            -webkit-box-shadow: 5px 11px 19px -1px rgba(0, 0, 0, 0.53);
            box-shadow: 5px 11px 19px -1px rgba(0, 0, 0, 0.53);
            border-radius: 5px;
            padding: 10px;
            font-weight: 700;

            &:hover {
              background-color: darken($dark-green-font-color, 10%);
            }
          }
        }
      }
    }
  }

  #educators-single-date-hour-right {
    #educators-single-date-hour-right-title {
      font-weight: bold;
      font-size: x-large;
    }

    #educators-single-date-hour-right-dates {
      height: 500px;
      overflow-y: auto;
      padding-right: 20px;

      .hour-selected {
        margin-top: 30px;

        .hour-selected-date {
          .hour-selected-day {
            font-weight: 700;
          }
        }
      }
    }
  }
}

@include media-between(xl, xxl) {
  #educators-single-date-hour {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

@include media-between(xs, md) {
  #educators-single-date-hour {
    display: flex;
    flex-direction: column;
    width: 100%;

    #educators-single-date-hour-right {
      margin-top: 20%;
    }
  }
}
</style>