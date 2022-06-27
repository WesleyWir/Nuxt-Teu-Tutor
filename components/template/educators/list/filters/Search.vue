<template>
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
      @keyup="updateFilterInQuery($event)"
      placeholder="Digite aqui o que você procura..."
      aria-label="Search"
    />
    <button class="btn my-sm-0 customized-height rounded-0" type="button" @click="updateFilterInQuery($event)">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    updateFilterInQuery(event) {
      const value = event.target.value;

      this.$router.push({
        query: {
          ...this.$route.query,
          ...{
            search: value || undefined,
          },
        },
      });
    },
  },
};
</script>

<style>
</style>