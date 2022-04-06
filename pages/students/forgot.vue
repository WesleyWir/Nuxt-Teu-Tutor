<template>
  <main class="container" id="student-forgot-password">
    <TemplateFrontFormImTitle>
      <i class="fa-solid fa-graduation-cap"></i>
      Sou Estudante
    </TemplateFrontFormImTitle>

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
                  <button type="submit" class="btn btn-custom-green">
                    Enviar
                  </button>
                </div>
              </form>
            </validation-observer>
          </div>
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
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await this.$axios.post('/students/forgot/', this.form)
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/students/forgot";
</style>