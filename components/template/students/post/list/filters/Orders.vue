<template>
  <div class="row" id="orders">
    <div class="mb-3 col-3">
      <select
        class="form-select"
        aria-label="Default select example"
        v-on:change="updateOrder($event)"
      >
        <option selected>Ordenar</option>
        <option
          v-for="ord in orders"
          :value="`${ord.order}-${ord.orderBy}`"
          :key="`${ord.order}-${ord.orderBy}`"
        >
          {{ ord.label }}
        </option>
      </select>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 1,
          label: "Mais Recente",
          order: "asc",
          orderBy: "created_at",
        },
        {
          id: 2,
          label: "Mais Antigo",
          order: "desc",
          orderBy: "created_at",
        },
      ],
    };
  },
  methods: {
    updateOrder(event) {
      const values = event.target.value.split("-");
      if (values.length) {
        const params = {
          order: values[0],
          orderBy: values[1],
        };
        this.$router.push({
          query: { ...this.$route.query, ...params },
        });
      }
    },
  },
};
</script>

<style>
</style>