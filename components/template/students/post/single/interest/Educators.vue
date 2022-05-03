<template>
  <div id="educators-interested" class="mt-5" v-if="educators.length > 0">
    <section class="title d-flex justify-content-center mb-4">
      <h2 class="h2 fw-bold text-uppercase">
        Educadores Interessados na postagem
      </h2>
    </section>
    <section class="educators row">
      <nuxt-link
        :to="`/educators/${educator.id}`"
        class="col-md-5 col-sm-12 educator"
        v-for="educator in educators"
        :key="educator.id"
      >
        <div class="educator-avatar">
          <img
            :src="
              getImageFromBackend(
                educator.avatar,
                '/imgs/user/default-profile.png'
              )
            "
            :alt="'Avatar '"
            class="img post-author-avatar rounded-circle"
          />
        </div>
        <div class="educator-info">
          <p class="name fw-bold">{{ educator.name }}</p>
        </div>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      educators: [],
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        `/post-interest/educators/${this.post.id}`
      );
      this.educators = data;
    } catch ({ response }) {
      // just continue?
    }
  },
};
</script>

<style lang="scss" scoped>
#educators-interested {
  .educators {
    .educator {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit;
      display: flex;
      align-items: center;
      margin: 2% 4%; // add just desktop
      justify-content: space-around;
      border: solid transparent 10px;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      .educator-avatar {
        img {
          width: 8ch;
          -o-object-fit: cover;
          object-fit: cover;
          height: 8ch;
        }
      }
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;
      }
    }
  }
}
</style>