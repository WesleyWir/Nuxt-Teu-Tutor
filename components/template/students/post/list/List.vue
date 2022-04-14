<template>
  <section id="posts" class="container h-100">
    <section
      id="posts-list"
      class="d-flex flex-column justify-content-center align-items-center"
    >
      <slot></slot>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#posts {
  background-color: $default-background-color;
  border: solid 2px $default-background-color;
  border-radius: 10px;
  padding: 2%;
}
</style>