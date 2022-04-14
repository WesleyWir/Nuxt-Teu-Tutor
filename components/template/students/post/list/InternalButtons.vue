<template>
  <div class="post-in-buttons mt-3 col-4">
    <button type="submit" class="btn btn-primary">
      <strong>Editar</strong>
    </button>
    <button type="button" v-on:click="onDeleteButton()" class="btn btn-danger">
      <strong>Deletar</strong>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onDeleteButton() {
      this.$emit("delete");
    },
  },
};
</script>

<style>
</style>