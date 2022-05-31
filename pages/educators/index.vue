<template>
  <main id="educators-list">
    <section class="container" id="search-section">
      <div class="input-group d-flex justify-content-center">
        <form
          class="col-12"
          id="search-form"
          method="GET"
          action="./educators-list.php"
        >
          <div id="search-form-i-b" class="col-6 mb-3">
            <!-- Start Button trigger city select -->
            <div
              id="search-form-i-b-icon-map"
              title="Escolher professores próximo a uma localização"
            >
              <a type="button" id="search-form-i-b-icon-map-a">
                <i class="fas fa-map-marker-alt fa-lg"></i>
              </a>
            </div>
            <!-- End Button trigger modal -->
            <input
              class="form-control mr-sm-2 customized-height rounded-0"
              type="search"
              placeholder="Digite aqui o que você procura..."
              aria-label="Search"
            />
            <button
              class="btn my-sm-0 customized-height rounded-0"
              type="submit"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>

          <!-- START SELECT LOCALIZATION -->
          <div
            id="search-form-select-localization"
            class="col-xs-12 col-sm-2 mb-3"
            style="display: none"
          >
            <div class="search-form-select-localization-item">
              <select
                class="form-select"
                id="search-form-select-localization-item-region"
                aria-label="Default select example"
              >
                <option selected value="">Estado</option>
              </select>
            </div>

            <div class="search-form-select-localization-item">
              <select
                class="form-select"
                id="search-form-select-localization-item-city"
                aria-label="Default select example"
                disabled
              >
                <option selected value="">Cidade</option>
              </select>
            </div>
          </div>
          <!-- END SELECT LOCALIZATION -->

          <div id="search-form-select" class="col-xs-12 col-sm-2">
            <div class="search-form-select-item">
              <select class="form-select" aria-label="Default select example">
                <option selected value="educadores">Educadores</option>
                <option value="estudantes">Estudantes</option>
              </select>
            </div>

            <div class="search-form-select-item">
              <select class="form-select" aria-label="Default select example">
                <option selected value="educadores">Filtros</option>
                <option value="estudantes">Filtro 1</option>
              </select>
            </div>

            <div class="search-form-select-item">
              <select class="form-select" aria-label="Default select example">
                <option selected value="educadores">Mais Bem Avaliados</option>
                <option value="estudantes">Maior Preço Médio</option>
                <option value="estudantes">Menor Preço Médio</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="container" id="educators-list-section">
      <div id="educators-list-section-main">
        <TemplateEducatorsListItem v-for="educator in educators" :key="educator.id" :educator="educator"/>
      </div>
      <div class="see-more mt-3 mb-3">
        <button href="" class="btn" id="see-more-btn">Ver Mais</button>
      </div>
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
    const { data } = await this.$axios.get('/educators/', {
      params: {  ...this.hiddenQueries, ...this.$route.query }
    });

    this.educators = data.data;
    this.pagination_meta = data.meta;
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/educators/list.scss";
</style>