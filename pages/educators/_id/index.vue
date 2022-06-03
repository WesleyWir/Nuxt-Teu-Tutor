<template>
  <main id="educators-single">
    <section id="educators-single-header" class="row container-in-section">
      <div id="educators-single-header-img" class="col-md-4 col-sm-12">
        <img
          class="img-fluid"
          :src="getImageFromBackend(educator.avatar, '/imgs/user/default-profile.png')"
          :alt="educator.name"
        />
      </div>

      <div id="educators-single-header-info" class="col-md-6 col-sm-12">
        <div id="educators-single-header-info-name-subj">
          <h3 class="h3" id="info-name">{{ educator.name }}</h3>
          <h4 class="h4" id="info-subj">{{ educator.subject.subject }}</h4>
        </div>

        <div id="educators-single-header-info-value-localization">
          <p id="info-value-localization-value">R$ 20 /h</p>
          <p id="info-value-localization-localization" v-for="address in educator.addresses" :key="address.id">
            {{ address.neighborhood }}, {{ address.city }} - {{ address.state }}
          </p>
        </div>
      </div>

      <div
        id="educators-single-header-rate-hire-btn"
        class="col-md-2 col-sm-12"
      >
        <div id="rate">
          <h2 class="h2">5</h2>
          <i class="fas fa-star fa-4x rating-star"></i>
        </div>

        <div id="hire">
          <button class="btn text-uppercase" id="hire-btn">Contratar</button>
        </div>
      </div>
    </section>

    <section id="educators-single-content">
      <div id="educators-single-date-hour">
        <div class="col-sm-7 col-xs-12" id="educators-single-date-hour-left">
          <div id="educators-single-date-hour-calendar"></div>
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
                  <li>08:00 - 09:00</li>
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
      <div id="educators-single-content-about" v-html="educator.description"></div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, route, error }) {
    try {
      const id = route.params.id;
      const { data } = await $axios.get(`/educators/${id}`);
      const educator = data;
      console.log(educator);
      return { educator };
    } catch (error) {
      error();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/educators/single.scss";
</style>