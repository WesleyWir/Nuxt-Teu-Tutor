<template>
  <section id="posts" class="container h-100">
    <section
      id="posts-list"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <slot></slot>
    </section>
    <section class="d-flex justify-content-center" v-if="showPaginationBtn">
      <button class="btn btn btn-custom-green" v-on:click="$emit('paginate')">Ver Mais</button>
    </section>
  </section>
</template>

<script>
export default {
  props: ['showPaginationBtn'],
};
</script>

<style lang="scss" scoped>
#posts {
  background-color: $default-background-color;
  border: solid 2px $default-background-color;
  border-radius: 10px;
  padding: 2%;
}
</style>