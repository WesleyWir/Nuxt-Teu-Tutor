<template>
  <div id="delete-account">
    <section id="danger" class="d-flex justify-content-center">
      <button
        type="button"
        class="btn btn-danger fw-bold"
        @click="deleteAccount()"
      >
        Deletar Conta
      </button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    async deleteAccount() {
      const deleteResult = await this.fetchToastConfirmPassword(
        "Confirme que você deseja <strong>DELETAR</strong> com sua senha:",
        `/students/${this.$auth.user.id}`,
        "Seu perfil foi excluído... Você pode criar um novo a qualquer momento.",
        "DELETE"
      );
      if (deleteResult) {
        this.$auth.logout(this.$auth.$state.strategy);
        // TODO Redirect to delete account specific
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#delete-account {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  margin-top: 2%;

  #danger {
  }
}
</style>