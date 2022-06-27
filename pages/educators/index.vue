<template>
  <main id="educators-list">
    <section class="container" id="search-section">
      <div class="input-group d-flex justify-content-center">
        <div class="col-12" id="search-form">
          <TemplateEducatorsListFiltersSearch />

          <!-- START SELECT LOCALIZATION -->
          <TemplateEducatorsListFiltersStateCity />
          <!-- END SELECT LOCALIZATION -->

          <TemplateEducatorsListFiltersOnline />

          <div id="search-form-select" class="col-xs-12 col-sm-2">
            <TemplateEducatorsListFiltersSubjects />
            <TemplateEducatorsListFiltersOrders />
          </div>
        </div>
      </div>
    </section>

    <section class="container" id="educators-list-section">
      <div id="educators-list-section-main">
        <div
          class="empty-educators mx-auto h2 fw-bold"
          v-if="!educators.length"
        >
          <h2 class="h2">Educadores Não encontrados... Refine sua busca.</h2>
        </div>
        <UiRoundedSpinner v-if="$fetchState.pending" />
        <TemplateEducatorsListItem
          v-for="educator in educators"
          :key="educator.id"
          :educator="educator"
        />
      </div>
      <TemplateEducatorsListPagination :pagination_meta="pagination_meta" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      educators: [],
      pagination_meta: [],
      hiddenQueries: {
        limit: 12,
        page: 1,
      },
      queries: {},
    };
  },
  async fetch() {
    const { data } = await this.$axios.get("/educators/", {
      params: { ...this.hiddenQueries, ...this.$route.query },
    });

    this.educators = data.data;
    this.pagination_meta = data.meta;
  },
  watch: {
    "$route.query": "$fetch",
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/pages/educators/list.scss";
</style>