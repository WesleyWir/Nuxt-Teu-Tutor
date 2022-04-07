<template>
  <section id="content-section">
    <section class="row">
      <section id="form">
        <div
          class="col-12 mb-3 mt-3 d-flex justify-content-center"
          id="form-title"
        >
          <h2 class="h2 text-uppercase">
            <strong>Recupere sua senha.</strong>
          </h2>
        </div>

        <div
          class="col-12 mb-5 d-flex justify-content-center"
          id="form-description"
        >
          <p id="form-description-text">
            Informe seu e-mail e lhe enviaremos instruções para recuperar sua
            senha.
          </p>
        </div>

        <div
          class="d-flex justify-content-center"
          id="student-forgot-password-form-fields"
        >
          <validation-observer ref="observer" v-slot="{ handleSubmit }" slim>
            <form
              id="student-forgot-password-form-fields-form"
              @submit.stop.prevent="handleSubmit(onSubmit)"
            >
              <div class="form-group col-md-12 mb-4">
                <validation-provider
                  v-slot="{ errors, classes }"
                  name="Email"
                  :rules="{ required: true, email: true }"
                  slim
                >
                  <label class="mb-3" for="email">Seu Email</label>
                  <NuxtLink class="float-end fw-bold" to="/students/login/"
                    >Ir para o Login</NuxtLink
                  >
                  <input
                    type="text"
                    name="email"
                    v-model.trim="form.email"
                    class="form-control"
                    :class="classes"
                    id="email"
                    required
                  />
                  <div class="invalid-feedback">
                    {{ errors[0] }}
                  </div>
                </validation-provider>
              </div>

              <div id="submit-btn" class="mt-3 d-flex justify-content-center">
                <v-wait for="submit">
                  <template slot="waiting">
                    <UiSpinner />
                  </template>
                  <button type="submit" class="btn btn-custom-green">
                    Enviar
                  </button>
                </v-wait>
              </div>
            </form>
          </validation-observer>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  props: ["route"],
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.$wait.start('submit');
        await this.$axios.post(this.route, this.form);
        this.showSuccessMessage('Enviado ao email com sucesso!')
      } catch ({ response }) {
        this.catchReponseError(response);
      }
      setTimeout(() => {
        this.$wait.end('submit');
      }, 500)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/users/forgot";
</style>