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
          :min-date="new Date()"
          is-expanded
        />
      </div>
      <div id="educators-single-date-hour-hours">
        <div
          id="educators-single-date-hour-hours-title"
          v-if="selectableHours.length"
        >
          <h3>Selecione os Horários:</h3>
        </div>
        <div id="educators-single-date-hour-hours-checks">
          <div class="hour" v-for="hour in selectableHours" :key="hour.id">
            <input
              type="checkbox"
              class="btn-check hour-check-input"
              :id="`hour-check_${hour.id}`"
              :name="`hour-check_${hour.id}`"
              v-model="hour.checked"
              :value="hour.id"
              autocomplete="off"
              v-on:click="dateWasClicked($event, hour.id)"
            />
            <label class="btn hour-check-label" :for="`hour-check_${hour.id}`"
              >{{ hour.start_time }} - {{ hour.end_time }}</label
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
        <div
          class="col-12 hour-selected"
          v-for="(selectedDate, i) in selectedDates"
          :key="selectedDate.educator_calendar_id"
        >
          <div class="hour-selected-date">
            <h3 class="hour-selected-day">
              <span class="text-capitalize">{{
                selectedDate.date.date | get_day_from_iso
              }}</span>
              - {{ selectedDate.date.date | format_mysql_date_and_hour }}
              <button
                class="btn btn-danger ms-2"
                @click="
                  removeDayFromClassCalendar(selectedDate.educator_calendar_id)
                "
              >
                X
              </button>
            </h3>
            <h3 class="hour-selected-day">
              {{ selectedDate.date.start_time }} -
              {{ selectedDate.date.end_time }}
            </h3>
            <h3 class="hour-selected-day">
              {{ selectedDate.date.price | toBRCurrency }}
            </h3>
            <div class="form-group mt-3">
              <label
                :for="`hour-selected-note-${selectedDate.educator_calendar_id}`"
                >Nota:</label
              >
              <textarea
                class="form-control"
                :id="`hour-selected-note-${selectedDate.educator_calendar_id}`"
                @keyup="onClassCalendarNoteChange(i, $event.target.value)"
                :value="selectedDate.note"
                placeholder="Escreva uma nota para o educador, referente a aula desse dia..."
                rows="3"
              ></textarea>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ClassCalendarStatus from "~/enums/ClassStatus";

export default {
  props: ["educator_id"],
  data() {
    return {
      date: null,
      selectableHours: [],
    };
  },
  computed: mapState({
    selectedDates: (state) => {
      return state.studentCalendar.class_calendars;
    },
  }),
  methods: {
    async onDayClick(day) {
      if (!this.date) {
        return (this.selectableHours = []);
      }
      const { data } = await this.$axios.get(
        `/calendars/educators/${this.educator_id}?date=${day.id}&order_by=start_time&order=ASC`
      );

      for (const hour of data) {
        hour.checked = await this.$store.dispatch(
          "studentCalendar/hasClassCalendarSelected",
          hour.id
        );
      }

      this.selectableHours = data;
    },
    async dateWasClicked(event, classCalendarId) {
      if (event.target.checked) {
        let classCalendar = {
          educator_calendar_id: classCalendarId,
          status: ClassCalendarStatus.TO_DO,
          note: "",
        };
        return await this.$store.dispatch(
          "studentCalendar/addClassCalendar",
          classCalendar
        );
      }

      return await this.removeDayFromClassCalendar(classCalendarId);
    },
    async removeDayFromClassCalendar(id) {
      return await this.$store.dispatch(
        "studentCalendar/removeFromClassCalendar",
        id
      );
    },
    async onClassCalendarNoteChange(index, note) {
      return await this.$store.dispatch(
        "studentCalendar/updateClassCalendarNote",
        { index, note }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
#educators-single-date-hour {
  border-radius: 20px;
  padding: 4%;

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
          .hour-check-input:checked + .hour-check-label {
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