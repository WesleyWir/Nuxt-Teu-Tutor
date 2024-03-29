<template>
  <div id="classes" class="container">
    <div id="classes-title" class="d-flex justify-content-center">
      <h2 class="fw-bold">Minhas Aulas</h2>
    </div>
    <div id="classes-items">
      <div
        class="empty-classes d-flex justify-content-center fw-bold mt-5"
        v-if="!classes.length"
      >
        <h3>Nenhuma aula encontrada :(</h3>
      </div>
      <div class="class-item mt-3" v-for="cl in classes" :key="cl.id">
        <div
          class="student-info d-flex justify-content-center align-items-center"
        >
          <div class="student-image">
            <img
              :src="
                getImageFromBackend(
                  cl.student.avatar,
                  '/imgs/user/default-profile.png'
                )
              "
              :alt="cl.student.name"
              class="rounded-circle me-3"
              style="width: 12ch; object-fit: cover; height: 12ch"
            />
          </div>
          <div class="student-name fw-bold">
            <h3>{{ cl.student.name }}</h3>
          </div>
        </div>
        <div class="class-info">
          <div class="class-calendars">
            <div
              class="item d-flex justify-content-around align-items-center mt-3"
              v-for="clCalendar in cl.classCalendars"
              :key="clCalendar.id"
            >
              <div class="info">
                <span class="fw-bold text-capitalize"
                  >{{ clCalendar.educatorCalendar.date | get_day_from_iso }} -
                  {{
                    clCalendar.educatorCalendar.date
                      | format_mysql_date_and_hour
                  }}</span
                >
                <span class="fw-bold"
                  >{{ clCalendar.educatorCalendar.start_time }} -
                  {{ clCalendar.educatorCalendar.end_time }}</span
                >
                <span class="fw-bold">{{
                  clCalendar.educatorCalendar.price | toBRCurrency
                }}</span>
              </div>
              <div class="status d-flex">
                <h3>
                  <span
                    class="badge bg-primary"
                    v-if="clCalendar.status == ClassCalendarStatus.TO_DO"
                  >
                    {{ getClassCalendarStatus(clCalendar.status) }}</span
                  >
                  <span
                    class="badge bg-success"
                    v-else-if="
                      clCalendar.status == ClassCalendarStatus.COMPLETED
                    "
                    >{{ getClassCalendarStatus(clCalendar.status) }}</span
                  >
                  <span class="badge bg-danger" v-else>{{
                    getClassCalendarStatus(clCalendar.status)
                  }}</span>

                  -
                  {{ getClassType(clCalendar.type) }}
                </h3>
              </div>
              <div class="buttons">
                <button
                  type="button"
                  class="btn btn-success rounded-circle"
                  @click="completeClassCalendar(clCalendar.id)"
                  v-show="clCalendar.status !== ClassCalendarStatus.CANCELLED"
                  title="Aula Completa"
                  :disabled="clCalendar.status == ClassCalendarStatus.COMPLETED"
                >
                  <i class="fa-solid fa-circle-check"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-danger rounded-circle"
                  @click="cancelClassCalendar(clCalendar.id)"
                  v-show="clCalendar.status !== ClassCalendarStatus.COMPLETED"
                  title="Cancelar Aula"
                  :disabled="clCalendar.status == ClassCalendarStatus.CANCELLED"
                >
                  <i class="fa-solid fa-circle-xmark"></i>
                </button>

                <button
                  type="button"
                  class="btn btn-warning rounded-circle"
                  @click="toDoClassCalendar(clCalendar.id)"
                  v-show="clCalendar.status !== ClassCalendarStatus.TO_DO"
                  title="Para Fazer Aula"
                >
                  <i class="fa-solid fa-arrows-rotate"></i>
                </button>
              </div>
              <div class="note">
                <div class="form-group" id="checkout-note">
                  <label for="note">Nota:</label>
                  <textarea
                    class="form-control"
                    id="note"
                    rows="3"
                    v-model="clCalendar.note"
                    disabled
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="class-note d-flex flex-column justify-content-center">
            <div class="note">
              <div class="form-group" id="checkout-note">
                <label for="note" class="fw-bold">Nota Geral:</label>
                <textarea
                  class="form-control"
                  id="note"
                  rows="3"
                  v-model="cl.note"
                  disabled
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassCalendarStatus from "~/enums/ClassStatus";
import ClassType from "~/enums/ClassType";

export default {
  layout: "internal",
  middleware: ["auth", "educator_strategy"],
  auth: "local_educator",
  data() {
    return {
      ClassCalendarStatus: ClassCalendarStatus,
    };
  },
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get("/classes/educators/");
      const classes = data;
      return { classes };
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    getClassCalendarStatus(code) {
      switch (code) {
        case ClassCalendarStatus.TO_DO:
          return "Para Fazer";
        case ClassCalendarStatus.COMPLETED:
          return "Aula Completa";
        case ClassCalendarStatus.CANCELLED:
          return "Aula Cancelada";
        default:
          return "";
          break;
      }
    },
    getClassType(code) {
      switch (code) {
        case ClassType.IN_PERSON:
          return "Presencial";
        case ClassType.ONLINE:
          return "Online";
        default:
          return "";
          break;
      }
    },
    async completeClassCalendar(id) {
      try {
        this.displayConfirmMessage("Completar Aula", "", async () => {
          await this.$axios.patch(
            `/classes/educators/class-calendars/complete/${id}`
          );
          await this.showSuccessMessage("Aula completa!", 1000);
          this.$nuxt.refresh();
        });
      } catch (e) {
        console.error(e);
      }
    },
    async cancelClassCalendar(id) {
      try {
        this.displayConfirmMessage("Cancelar Aula", "", async () => {
          await this.$axios.delete(
            `/classes/educators/class-calendars/cancel/${id}`
          );
          await this.showSuccessMessage("Aula cancelada", 1000);
          this.$nuxt.refresh();
        });
      } catch (e) {
        console.error(e);
      }
    },
    async toDoClassCalendar(id) {
      try {
        this.displayConfirmMessage(
          'Alterar "Para Fazer" Aula',
          "",
          async () => {
            await this.$axios.patch(
              `/classes/educators/class-calendars/to-do/${id}`
            );
            await this.showSuccessMessage("Aula para ser feita!", 1000);
            this.$nuxt.refresh();
          }
        );
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#classes-items {
  .class-item {
    border: gray 3px solid;
    border-radius: 10px;
    padding: 30px;
  }
}
</style>