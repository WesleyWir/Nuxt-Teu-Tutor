<template>
  <div class="col-12">
    <v-date-picker
      :attributes="attributes"
      :model-config="{
        type: 'string',
        mask: 'YYYY-MM-DD HH:mm',
      }"
      :masks="{ L: 'YYYY-MM-DD' }"
      :value="days"
      @dayclick="onDayClick"
      @update:from-page="pageChange"
      :min-date="new Date()"
      is-expanded
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    days: (state) => {
      return state.calendar.addCalendar.days;
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
  }),
  methods: {
    async onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        return await this.$store.dispatch("calendar/removeFromAddCalendar", {
          id: idx,
        });
      }
      return await this.$store.dispatch("calendar/pushToAddCalendar", {
        id: day.id,
        date: day.date.toISOString().slice(0, 19).replace("T", " "),
      });
    },
    async pageChange(page) {
      if (page.month != this.$store.state.calendar.selectedMonth) {
        await this.$store.dispatch("calendar/setAddCalendarMonth", page.month);
        await this.$store.dispatch("calendar/setLoadedCalendarYear", page.year);
        await this.$store.dispatch("calendar/setselectedMonth", page.month);
        await this.loadedCalendarDates();
      }
    },
    async loadedCalendarDates() {
      await this.$store.dispatch("calendar/fetchLoadedCalendarDates", this.$auth.user.id);
    },
  },
};
</script>


<style>
</style>