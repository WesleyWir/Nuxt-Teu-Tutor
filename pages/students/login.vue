<template>
  <main class="container" id="student-login">
    <TemplateFrontFormTitle title="Sou Estudante" icon="fa-graduation-cap" />
    <section id="content-section">
      <section class="row">
        <section class="col-12 mb-4 mb-md-0" id="has-account">
          <p><small>Não tem uma conta?</small></p>

          <NuxtLink
            to="/students/signup"
            class="btn btn-sm ml-2"
            id="do-login-btn"
            ><strong>Clique aqui!</strong></NuxtLink
          >
        </section>
        <section id="form">
          <div
            class="col-12 mb-5 d-flex justify-content-center"
            id="form-title"
          >
            <h2 class="h2 text-uppercase"><strong>Login</strong></h2>
          </div>

          <div
            class="
              col-12
              mb-5
              d-flex
              flex-nowrap
              align-content-start
              justify-content-center
              align-items-stretch
            "
            id="student-social-login-login"
          >
            <div id="student-google-login">
              <NuxtLink
                to="#login-google"
                class="btn btn-lg"
                id="student-google-login-btn"
              >
                <i class="fab fa-google"></i>
                <strong>Google</strong>
              </NuxtLink>
            </div>

            <div id="student-facebook-login">
              <NuxtLink
                to="#login-facebook"
                class="btn btn-lg"
                id="student-facebook-login-btn"
              >
                <i class="fab fa-facebook"></i>
                <strong>Facebook</strong>
              </NuxtLink>
            </div>
          </div>

          <div class="d-flex justify-content-center" id="login-form-fields">
            <validation-observer
              ref="observer"
              v-slot="{ handleSubmit }"
              slim
            >
              <form
                id="login-form-fields-form"
                @submit.stop.prevent="handleSubmit(onSubmit)"
              >
                <div class="form-group col-md-12 mb-4">
                  <validation-provider 
                  v-slot="{errors, classes}"
                  name="Email"
                  :rules="{required: true, email: true}"
                  slim
                  >
                  <label class="mb-3" for="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    v-model="form.email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                  />
                  <div class="invalid-feedback">
                    {{ errors[0] }}
                  </div>
                  </validation-provider>
                </div>

                <div class="form-group col-md-12 mb-4">
                  <validation-provider 
                  v-slot="{errors, classes}"
                  name="Senha"
                  :rules="{required: true, size: 8}"
                  slim
                  >
                  <label class="mb-3" for="password">Senha</label>
                  <NuxtLink class="float-end" to="/students/forgot"
                    >Esqueceu a senha?</NuxtLink
                  >
                  <input
                    type="password"
                    autocomplete="current-password"
                    name="password"
                    v-model="form.password"
                    class="form-control"
                    id="password"
                  />
                  <TemplateTogglePasswordView input-name="password"/>
                  <div class="invalid-feedback">
                    {{ errors[0] }}
                  </div>
                  </validation-provider>
                </div>

                <div id="submit-btn" class="mt-3 d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-custom-green"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </validation-observer>
          </div>
        </section>

        <section id="form-footer">
          <hr class="my-4" />
        </section>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        console.log(this.form);
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/students/login.scss";
</style>