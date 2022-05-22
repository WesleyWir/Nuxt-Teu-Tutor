<template>
  <div class="col-12">
    <div id="show-calendar">
      <TemplateEducatorsCalendarListItem v-for="date in dates" :key="date.id" :date="date"/>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: mapState({
    dates: state => state.calendar.loadedCalendar.dates
  }),
};
</script>

<style lang="scss" scoped>
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
</style>