<template>
  <div id="calendar-body" class="d-flex justify-content-center">
    <div class="row">
      <div class="col-12">
        <v-date-picker v-model="date" is-expanded />
      </div>
      <div id="time">
        <div>
          <div>
            <v-date-picker mode="time" v-model="date" :timezone="timezone" is24hr />
          </div>
          <div>
            <v-date-picker mode="time" v-model="date" :timezone="timezone" is24hr />
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}
</style>