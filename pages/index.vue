<template>
  <main id="main-page">
    <section class="container" id="search-section">
      <div class="input-group d-flex justify-content-center">
        <form
          class="col-12"
          id="search-form"
          @submit.stop.prevent="onSearch($event)"
        >
          <div id="search-form-i-b" class="col-6 mb-3">
            <input
              class="form-control mr-sm-2 customized-height rounded-0"
              type="search"
              name="search"
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
          <div id="search-form-select" class="col-xs-12 col-sm-2">
            <select
              class="form-select"
              name="type"
              aria-label="Default select example"
            >
              <option selected value="educators">Educadores</option>
              <option value="students">Estudantes</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    onSearch(event) {
      const search = event.target.search.value;
      const type = event.target.type.value;

      let path = '/students/posts/';
      let queries = { search };

      if ((type == 'educators')) {
        path = '/educators/lists/';
      }

      return this.$router.replace({
        path: path,
        query: queries,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/home.scss";
</style>