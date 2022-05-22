<template>
  <div
    id="calendar-body"
    class="d-flex justify-content-center align-items-start"
  >
    <div class="row ms-3 mw-75">
      <TemplateEducatorsCalendarAddCalendar />
      <TemplateEducatorsCalendarAddTime />
      <TemplateEducatorsCalendarList :key="$store.state.calendar.selectedMonth" />
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
#calendar-body {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  margin-top: 2%;
}
</style>