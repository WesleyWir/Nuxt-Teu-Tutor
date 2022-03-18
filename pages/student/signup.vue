<template>
  <main class="container" id="student-register">
    <TemplateFrontFormTitle title="Sou Estudante" icon="fa-graduation-cap" />

    <section id="content-section">
      <section class="row">
        <section class="col-12 mb-4 mb-md-0" id="has-account">
          <p><small>Já tem uma conta?</small></p>
          <NuxtLink
            to="/student/login/"
            class="btn btn-sm ml-2"
            id="do-login-btn"
            ><strong>Faça o login.</strong></NuxtLink>
        </section>
        <section id="form">
          <div class="col-12 mb-5" id="form-title">
            <h2 class="h2 text-uppercase"><strong>Cadastre-se</strong></h2>
          </div>

          <div class="mb-3" id="form-description-div">
            <p class="font-italic">
              Registre-se com uma conta do google ou facebook, ou preencha o
              formulário abaixo.
            </p>
          </div>

          <div
            class="
              col-12
              mb-5
              d-flex
              flex-nowrap
              align-content-start
              justify-content-start
              align-items-stretch
            "
            id="student-social-login-register"
          >
            <div id="student-google-register">
              <a
                href="#register-google"
                class="btn btn-lg"
                id="student-google-register-btn"
              >
                <i class="fab fa-google"></i>
                <strong>Google</strong>
              </a>
            </div>

            <div id="student-facebook-register">
              <a
                href="#register-facebook"
                class="btn btn-lg"
                id="student-facebook-register-btn"
              >
                <i class="fab fa-facebook"></i>
                <strong>Facebook</strong>
              </a>
            </div>
          </div>
          <div id="form-fields">
            <form>
              <div class="row" id="info-fields">
                <div id="info-fields-title">
                  <p class="lead"><strong>Informações Pessoais</strong></p>
                  <hr class="my-4" />
                </div>
                <div class="form-group col-md-12 mb-4">
                  <label class="mb-3" for="full_name">Nome Completo *</label>
                  <input
                    type="text"
                    name="full_name"
                    v-model="form.fullName"
                    class="form-control"
                    id="full_name"
                    placeholder="Nome Sobrenome"
                    required
                  />
                </div>

                <div class="form-group col-md-6 mb-4">
                  <label class="mb-3" for="cpf">CPF *</label>
                  <input
                    type="text"
                    v-mask="['###.###.###-##']"
                    name="cpf"
                    v-model="form.cpf"
                    class="form-control"
                    id="cpf"
                    placeholder="000.000.000-00"
                    required
                  />
                </div>

                <div class="form-group col-md-3 mb-4">
                  <label class="mb-3" for="birth_date"
                    >Data de Nascimento *</label
                  >
                  <input
                    type="text"
                    v-mask="['##/##/####']"
                    name="birthdate"
                    v-model="form.birthdate"
                    class="form-control"
                    id="birthdate"
                    placeholder="00/00/0000"
                    required
                  />
                </div>
              </div>

              <div class="row mt-4" id="login-fields">
                <div id="login-fields-title">
                  <p class="lead"><strong>Informações de Login</strong></p>
                  <hr class="my-4" />
                </div>

                <div class="form-group col-md-12 mb-4">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    v-model="form.email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div class="form-group col-md-6 mb-4">
                  <label class="mb-3" for="password">Senha *</label>
                  <input
                    type="password"
                    name="password"
                    v-model="form.password"
                    class="form-control"
                    id="password"
                    required
                  />
                  <TemplateTogglePasswordView input-name="password"/>
                </div>

                <div class="form-group col-md-6 mb-4">
                  <label class="mb-3" for="confirm_password"
                    >Confirme sua Senha *</label
                  >
                  <input
                    type="password"
                    name="confirm_password"
                    v-model="form.confirmPassword"
                    class="form-control"
                    id="confirm_password"
                    required
                  />
                  <TemplateTogglePasswordView input-name="confirm_password"/>
                </div>
              </div>

              <div id="submit-btn" class="mt-3 d-flex justify-content-center">
                <button type="submit" class="btn btn-primary btn-custom-green">
                  Criar Conta
                </button>
              </div>
            </form>
          </div>
        </section>

        <section id="form-footer">
          <hr class="my-4" />
          <div class="d-flex justify-content-center" id="privacy-policy">
            <p>
              Ao criar a conta, você concorda com nossas
              <NuxtLink to="/privacy-policy/">Políticas de Privacidades</NuxtLink>.
            </p>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  directives: { mask },
  data() {
    return {
      form: {
        fullName: "",
        cpf: "",
        birthdate: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/students/signup.scss";
</style>