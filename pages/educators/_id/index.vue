<template>
  <main id="educators-single">
    <section id="educators-single-header" class="row container-in-section">
      <div id="educators-single-header-img" class="col-md-4 col-sm-12">
        <img
          class="img-fluid"
          :src="
            getImageFromBackend(
              educator.avatar,
              '/imgs/user/default-profile.png'
            )
          "
          :alt="educator.name"
        />
      </div>

      <div id="educators-single-header-info" class="col-md-6 col-sm-12">
        <div id="educators-single-header-info-name-subj">
          <h3 class="h3" id="info-name">{{ educator.name }}</h3>
          <h4 class="h4" id="info-subj">{{ educator.subject.subject }}</h4>
        </div>

        <div id="educators-single-header-info-value-localization">
          <p id="info-value-localization-value">{{ educator.average_price | toBRCurrency }} /h</p>
          <p
            id="info-value-localization-localization"
            v-for="address in educator.addresses"
            :key="address.id"
          >
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
          <nuxt-link
            :to="`/educators/${educator.id}/checkout/`"
            class="btn text-uppercase"
            id="hire-btn"
            >Contratar</nuxt-link
          >
        </div>
      </div>
    </section>

    <section id="educators-single-content">
      <div
        id="educators-single-content-about"
        v-html="educator.description"
      ></div>
      <TemplateEducatorsSingleRatings :educator_id="educator.id" />
      <TemplateEducatorsSingleRelated :educator_id="educator.id" />
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