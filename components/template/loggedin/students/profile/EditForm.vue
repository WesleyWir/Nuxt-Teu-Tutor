<template>
  <section id="profile-info">
    <div id="profile-info-form">
      <validation-observer ref="observer" v-slot="{ handleSubmit }" slim>
        <form @submit.stop.prevent="handleSubmit(onEditSubmit)">
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              name="Nome Completo"
              :rules="{ required: true, min: 3 }"
              slim
            >
              <label for="name">Nome Completo</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="student.name"
                aria-describedby="name"
                :disabled="!isEdit"
                :class="classes"
              />
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
          </div>
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              name="Nova Senha"
              :rules="{ required: false, min: 8 }"
              slim
            >
              <label for="exampleInputPassword1">Nova Senha</label>
              <input
                type="password"
                class="form-control"
                :class="classes"
                id="password"
                v-model="student.password"
                :disabled="!isEdit"
              />
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
          </div>

          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              name="Senha Antiga"
              :rules="{ required_if: 'Nova Senha', min: 8 }"
              slim
            >
              <label for="old_password">Senha Antiga</label>
              <input
                type="password"
                class="form-control"
                name="old_password"
                :class="classes"
                id="old_password"
                v-model="student.old_password"
                :disabled="!isEdit"
              />
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
            <small id="password-help" class="form-text text-muted"
              >Esse campo é obrigatório, apenas se a senha for ser alterada</small
            >
          </div>
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              name="Confirme sua Senha"
              :rules="{ required_if: 'Nova Senha', min: 8, confirmed: 'Nova Senha' }"
              slim
            >
              <label for="password">Confirme a nova senha</label>
              <input
                type="password"
                name="confirm_password"
                class="form-control"
                :class="classes"
                id="password_confirm"
                v-model="student.confirm_password"
                :disabled="!isEdit"
              />
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
          </div>
          <div class="buttons mt-3">
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="isEdit = !isEdit"
            >
              <strong>Ativar Edição</strong>
            </button>
            <button type="submit" class="btn btn-success" :disabled="!isEdit">
              <strong>Atualizar</strong>
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isEdit: false,
      student: {},
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        `/students/${this.$auth.user.id}/edit`
      );
      this.student = data;
    } catch ({ response }) {
      await this.catchReponseError(response);
    }
  },
  methods: {
    async onEditSubmit() {
      try {
        await this.$axios.patch(`/students/${this.student.id}`, this.student);
        this.showSuccessMessage("Perfil Atualizado!");
      } catch ({ response }) {
        console.error(response);
        await this.catchReponseError(response);
      }
    },
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