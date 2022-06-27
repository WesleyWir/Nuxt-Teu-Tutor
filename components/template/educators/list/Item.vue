<template>
  <div class="educators-list-item">
    <div class="educators-list-item-img">
      <img
        class="img-fluid"
        :src="
          getImageFromBackend(educator.avatar, '/imgs/user/default-profile.png')
        "
        alt="Imagem Educador"
      />
    </div>

    <div class="educators-list-item-info">
      <div class="educators-list-item-info-subj-name-rating">
        <div class="educators-list-item-info-subj-name">
          <a 
            @click="$router.replace({path: '/educators/', query: {...$route.query, subject: educator.subject.id}}).catch(()=>{})"
            class="educators-list-item-info-subj"
          >{{ educator.subject.subject }}</a>
          <nuxt-link
            :to="`/educators/${educator.id}`"
            class="h2 educators-list-item-info-name"
            >{{ educator.name }}</nuxt-link
          >
        </div>

        <div class="educators-list-item-info-rating">
          <span class="educators-list-item-info-rating-rate">5</span>
          <i class="fas fa-star educators-list-item-info-rating-star"></i>
        </div>
      </div>
      <div class="educators-list-item-lec-info">
        <span class="educators-list-item-lec-info-value">{{ educator.average_price | toBRCurrency }} /h</span>
        <span class="educators-list-item-lec-info-address" v-for="address in educator.addresses" :key="address.id">
          {{ address.neighborhood }}, {{ address.city }} - {{ address.state }}
        </span>
      </div>

      <div class="educators-list-item-single-btn">
        <nuxt-link :to="`/educators/${educator.id}`" class="btn"
          >Ver Perfil</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["educator"],
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/educators/list/item.scss";
</style>