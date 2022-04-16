<template>
  <div class="post-in-buttons mt-3 col-4">
    <NuxtLink :to="`/students/in/posts/${post_id}/edit/`" class="btn btn-primary">
      <strong>Editar</strong>
    </NuxtLink>
    <button type="button" v-on:click="onDeleteButton()" class="btn btn-danger">
      <strong>Deletar</strong>
    </button>
  </div>
</template>

<script>
export default {
  props: ["post_id"],
  methods: {
    onDeleteButton() {
      this.$emit("delete");
    },
  },
};
</script>

<style>
</style>