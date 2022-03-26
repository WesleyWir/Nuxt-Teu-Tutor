<template>
  <div class="page-404">
    <div
      class="
        container
        d-flex
        flex-column flex-wrap
        align-content-center align-items-center
      "
    >
      <span class="display-1 fw-bold">404</span>
      <p class="mt-4">Oooops!</p>
      <h1 class="mb-4"><b>Página não encontrada!</b></h1>
      <nuxt-link :to="{ name: 'index' }" id="page-404-return">
        Voltar para a página inicial <i class="fas fa-undo" />
      </nuxt-link>
      <img
        src="/imgs/pages/404/illustration.svg"
        alt="404 illustration"
        class="img-fluid w-25"
        id="page-404-illustration"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/pages/404.scss";
</style>