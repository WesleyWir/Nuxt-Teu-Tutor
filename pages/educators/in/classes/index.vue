<template>
  <div id="classes" class="container">
    <div id="classes-title" class="d-flex justify-content-center">
      <h2 class="fw-bold">Minhas Aulas</h2>
    </div>
    <div id="classes-items">
      <div class="item" v-for="cl in classes" :key="cl.id">
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
              class="rounded-circle w-50"
            />
          </div>
          <div class="student-name">
            <h3>{{ cl.student.name }}</h3>
          </div>
        </div>
        <div class="class-calendars">
          <div
            class="item d-flex justify-content-around align-items-center mt-3"
          >
            <div class="info">
              <span class="fw-bold">Quinta-Feira - 00/00/0000</span>
              <span class="fw-bold">00:00 - 00:00</span>
              <span class="fw-bold">R$ 00, 00</span>
            </div>
            <div class="status">
              <h3>Para Fazer</h3>
            </div>
            <div class="buttons">
              <button type="button" class="btn btn-success rounded-circle">
                <i class="fa-solid fa-circle-check"></i>
              </button>
              <button type="button" class="btn btn-danger rounded-circle">
                <i class="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
            <div class="note">
              <div class="form-group" id="checkout-note">
                <label for="note">Nota:</label>
                <textarea class="form-control" id="note" rows="3"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="class-note d-flec justify-content-center">{{ cl.note }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const { data } = await $axios.get("/classes/educators/");
      console.log(data);
      const classes = data;
      return { classes };
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
</style>