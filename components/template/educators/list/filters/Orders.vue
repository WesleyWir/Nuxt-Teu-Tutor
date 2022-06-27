<template>
  <div class="search-form-select-item">
    <select class="form-select" @change="updateFilterInQuery($event)">
      <option selected value="rating__DESC">Mais Bem Avaliados</option>
      <option value="average_price__DESC">Maior Preço Médio</option>
      <option value="average_price__ASC">Menor Preço Médio</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    updateFilterInQuery(event) {
      const value = event.target.value;
      let data = value.split('__');

      const query = {
        order_by: data[0],
        order: data[1]
      }

      this.$router.push({
        query: {
          ...this.$route.query,
          ...query,
        },
      });
    },
  },
};
</script>

<style>
</style>