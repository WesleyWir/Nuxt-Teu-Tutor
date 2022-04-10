<template>
  <section class="col-12 mb-4 mb-md-0" id="has-account">
    <p><small>Não tem uma conta?</small></p>

    <NuxtLink :to="`/${route}/signup`" class="btn btn-sm ml-2" id="do-login-btn"
      ><strong>Clique aqui!</strong></NuxtLink
    >
  </section>
</template>

<script>
export default {
  props: ["route"],
}
</script>

<style lang="scss" scoped>
#has-account {
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: center;

  #do-login-btn {
    margin-left: 1%;
    background-color: $form-components-color;
    -webkit-box-shadow: 9px 5px 4px 3px rgba(0, 0, 0, 0.32);
    box-shadow: 9px 5px 4px 3px rgba(0, 0, 0, 0.32);

    &:hover {
      background-color: darken($form-components-color, 4%);
    }
  }
}
</style>