<template>
  <div id="ratings">
    <div class="title">
      <h2 class="h2 fw-bold">Avaliações</h2>
    </div>
    <div class="items">
      <div
        class="item mb-3 row d-flex flex-row"
        v-for="rate in ratings"
        :key="rate.id"
      >
        <div class="avatar col-4 d-flex justify-content-center">
          <img
            :src="
              getImageFromBackend(
                rate.student.avatar,
                '/imgs/user/default-profile.png'
              )
            "
            class="rounded-circle img-thumbnail w-50"
            :alt="rate.student.name"
            :title="rate.student.name"
          />
        </div>
        <div class="comments col-6">
          <p class="mb-3">
            {{ rate.comment }}
          </p>
          <div class="rate">
            <h2 class="h2 fw-bold">{{ getRate(rate.rate) }}</h2>
            <i class="fas fa-star fa-2x rating-star"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["educator_id"],
  data() {
    return {
      ratings: [],
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      `/ratings/educators/${this.educator_id}`
    );
    this.ratings = data;
    console.log(this.ratings);
  },
  methods: {
    getRate(rate) {
      switch (rate) {
        case 'ZERO_STAR':
          return 0;
        case 'ONE_STAR':
          return 1;
        case 'TWO_STAR':
          return 2;
        case 'THREE_STAR':
          return 3;
        case 'FOUR_STAR':
          return 4;
        case 'FIVE_STAR':
          return 5;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#ratings {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .items {
    padding: 2% 16%;
    .item {
      background-color: whitesmoke;
      border: solid 30px whitesmoke;
      border-radius: 20px;
      .comments {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      .rate {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        .rating-star {
          color: $star-rate-color;
        }
      }
    }
  }
}
</style>