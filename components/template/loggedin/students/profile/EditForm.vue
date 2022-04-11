<template>
  <section id="profile-info">
    <div id="profile-info-form">
      <form>
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="name"
            :disabled="!isEdit"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Senha</label>
          <input type="password" class="form-control" id="password" :disabled="!isEdit"/>
          <small id="password-help" class="form-text text-muted">Esse campo não é obrigatório.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Confirme a senha</label>
          <input
            type="password"
            class="form-control"
            id="password_confirm"
            :disabled="!isEdit"
          />
        </div>
        <div class="buttons mt-3">
          <button type="button" class="btn btn-primary" v-on:click="isEdit = !isEdit"><strong>Ativar Edição</strong></button>
          <button type="submit" class="btn btn-success" :disabled="!isEdit"><strong>Salvar</strong></button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#profile-info {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;

  #profile-info-form {
    form {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-evenly;
      margin: 0 auto;
      width: 50%;
    }
  }
}

@include media-between(xs, md) {
  // Phones, Large Phones and Tablets
  #profile-info {
    #profile-info-form {
      form {
        width: 100%;
      }
    }
  }
}
</style>