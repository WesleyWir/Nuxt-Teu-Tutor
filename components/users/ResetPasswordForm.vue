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
                  name="Senha"
                  :rules="{ required: true, min: 8 }"
                  slim
                >
                  <label class="mb-3" for="email">Senha</label>
                  <NuxtLink class="float-end fw-bold" :to="`${route}/forgot/`"
                    >Enviar pedido novamente</NuxtLink
                  >
                  <input
                    type="password"
                    name="password"
                    v-model.trim="form.password"
                    class="form-control"
                    :class="classes"
                    id="password"
                    required
                  />
                  <TemplateTogglePasswordView input-name="password" />
                  <div class="invalid-feedback">
                    {{ errors[0] }}
                  </div>
                </validation-provider>
              </div>

              <div class="form-group col-md-12 mb-4">
                <validation-provider
                  v-slot="{ errors, classes }"
                  name="Confirme sua Senha"
                  :rules="{ required: true, min: 8, confirmed: 'Senha' }"
                  slim
                >
                  <label class="mb-3" for="email">Confirme sua Senha</label>
                  <input
                    type="password"
                    name="confirm_password"
                    v-model.trim="confirmPassword"
                    class="form-control"
                    :class="classes"
                    id="confirm_password"
                    required
                  />
                  <TemplateTogglePasswordView input-name="confirm_password" />
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
        token: "",
        password: "",
      },
      confirmPassword: "",
    };
  },
  mounted() {
    this.form.token = this.$route.query.token;
  },
  methods: {
    async onSubmit() {
      try {
        this.$wait.start("submit");
        const response = await this.$axios.post(
          `${this.route}/reset/`,
          this.form
        );
        this.showSuccessMessage(response.data.message);
        this.$router.push(`${this.route}/login/`);
      } catch ({ response }) {
        this.catchReponseError(response);
      }
      setTimeout(() => {
        this.$wait.end("submit");
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/users/forgot";
</style>