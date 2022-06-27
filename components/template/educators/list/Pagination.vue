<template>
  <div class="pagination-numeric mt-2 mb-2">
    <a
      title="Anterior"
      class="pagination-prev"
      @click="updatePageQuery(pagination_meta.current_page - 1)"
      v-show="pagination_meta.current_page - 1 >= pagination_meta.first_page"
      ><i class="fas fa-caret-square-left"></i
    ></a>
    <a
      :title="`Página ${pagination_meta.current_page - 1}`"
      class="pagination-item"
      v-if="pagination_meta.current_page - 2 >= pagination_meta.first_page"
      @click="updatePageQuery(pagination_meta.current_page - 2)"
      >{{ pagination_meta.current_page - 2 }}</a
    >
    <a
      :title="`Página ${pagination_meta.current_page - 1}`"
      class="pagination-item"
      v-if="pagination_meta.current_page - 1 >= pagination_meta.first_page"
      @click="updatePageQuery(pagination_meta.current_page - 1)"
      >{{ pagination_meta.current_page - 1 }}</a
    >
    <span
      class="pagination-dots"
      v-if="pagination_meta.current_page - 1 >= pagination_meta.first_page"
      >...</span
    >
    <a
      :title="`Página ${pagination_meta.current_page}`"
      class="pagination-item"
      v-if="pagination_meta.current_page != pagination_meta.last_page"
      >{{ pagination_meta.current_page }}</a
    >
    <span
      class="pagination-dots"
      v-if="pagination_meta.current_page + 1 <= pagination_meta.last_page"
      >...</span
    >
    <a
      :title="`Página ${pagination_meta.current_page + 1}`"
      class="pagination-item"
      v-if="pagination_meta.current_page + 1 <= pagination_meta.last_page"
      @click="updatePageQuery(pagination_meta.current_page + 1)"
      >{{ pagination_meta.current_page + 1 }}</a
    >
    <a
      :title="`Página ${pagination_meta.current_page + 2}`"
      class="pagination-item"
      @click="updatePageQuery(pagination_meta.current_page + 2)"
      v-if="pagination_meta.current_page + 2 <= pagination_meta.last_page"
      >{{ pagination_meta.current_page + 2 }}</a
    >
    <a
      title="Próximo"
      class="pagination-next"
      @click="updatePageQuery(pagination_meta.current_page + 1)"
      v-show="pagination_meta.current_page + 1 <= pagination_meta.last_page"
      ><i class="fas fa-caret-square-right"></i
    ></a>
  </div>
</template>

<script>
export default {
  props: ["pagination_meta"],
  methods: {
    async updatePageQuery(page) {
      this.$router.push({
        query: { ...this.$route.query, ...{ page } },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-numeric {
  font-size: x-large;
}
</style>