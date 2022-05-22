<template>
  <main class="container" id="educator-register">
    <TemplateFrontFormImTitle>
      <i class="fa-solid fa-chalkboard-teacher"></i>
      Sou Educador
    </TemplateFrontFormImTitle>

    <section id="content-section">
      <section class="row">
        <section class="col-12 mb-4 mb-md-0" id="has-account">
          <p><small>Já tem uma conta?</small></p>
          <NuxtLink
            to="/educators/login/"
            class="btn btn-sm ml-2"
            id="do-login-btn"
            ><strong>Faça o login.</strong></NuxtLink
          >
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
            id="educator-social-login-register"
          >
            <div id="educator-google-register">
              <a
                href="#register-google"
                class="btn btn-lg"
                id="educator-google-register-btn"
              >
                <i class="fab fa-google"></i>
                <strong>Google</strong>
              </a>
            </div>

            <div id="educator-facebook-register">
              <a
                href="#register-facebook"
                class="btn btn-lg"
                id="educator-facebook-register-btn"
              >
                <i class="fab fa-facebook"></i>
                <strong>Facebook</strong>
              </a>
            </div>
          </div>
          <div id="form-fields">
            <validation-observer ref="observer" v-slot="{ handleSubmit }" slim>
              <form @submit.stop.prevent="handleSubmit(onSubmit)">
                <div class="row justify-content-center" id="info-fields">
                  <div id="info-fields-title">
                    <p class="lead"><strong>Informações Pessoais</strong></p>
                    <hr class="my-4" />
                  </div>
                  <div class="form-group col-md-9 mb-4">
                    <validation-provider
                      v-slot="{ errors, classes }"
                      name="Nome Completo"
                      :rules="{ required: true, min: 3 }"
                      slim
                    >
                      <label class="mb-3" for="name">Nome Completo *</label>
                      <input
                        type="text"
                        name="name"
                        v-model="form.name"
                        class="form-control"
                        :class="classes"
                        id="name"
                        required
                      />
                      <div class="invalid-feedback">
                        {{ errors[0] }}
                      </div>
                    </validation-provider>
                  </div>

                  <div class="form-group col-md-3 mb-4">
                    <validation-provider
                      v-slot="{ errors, classes }"
                      name="Data de Nascimento"
                      :rules="{ required: true, min: 10, max: Date.now() }"
                      slim
                    >
                      <label class="mb-3" for="birth_date"
                        >Data de Nascimento *</label
                      >
                      <input
                        type="tel"
                        v-mask="['##/##/####']"
                        name="birthdate"
                        v-model="form.birthdate"
                        class="form-control"
                        :class="classes"
                        id="birthdate"
                        placeholder="00/00/0000"
                        required
                      />
                      <div class="invalid-feedback">
                        {{ errors[0] }}
                      </div>
                    </validation-provider>
                  </div>
                </div>

                <div class="row mt-4 justify-content-center" id="login-fields">
                  <div id="login-fields-title">
                    <p class="lead"><strong>Informações das Aulas</strong></p>
                    <hr class="my-4" />
                    <div class="form-group col-md-4 mb-4">
                      <validation-provider
                        v-slot="{ errors, classes }"
                        name="Matéria"
                        :rules="{ required: true }"
                        slim
                      >
                        <label class="mb-3" for="subject"
                          >Matéria Principal</label
                        >
                        <select
                          class="form-select"
                          aria-label="Matéria"
                          name="subject"
                          :class="classes"
                          id="subject"
                          v-model.trim="form.subject"
                          placegolder="Matéria Principal"
                          required
                        >
                          <option selected>Matéria Principal</option>
                          <option
                            v-for="sub in subjects"
                            :key="sub.id"
                            :value="sub.id"
                          >
                            {{ sub.subject }}
                          </option>
                        </select>
                        <div class="invalid-feedback">
                          {{ errors[0] }}
                        </div>
                      </validation-provider>
                    </div>

                    <div class="form-group col-md-4 mb-4">
                      <validation-provider
                        v-slot="{ errors, classes }"
                        name="Preço"
                        :rules="{ required: true }"
                        slim
                      >
                        <label class="mb-3" for="average_price"
                          >Valor Médio da hora de aula:</label
                        >
                        <input
                          type="number"
                          v-mask="['###.###.###']"
                          min="0"
                          name="average_price"
                          v-model.trim="form.average_price"
                          class="form-control"
                          :class="classes"
                          id="average_price"
                          placeholder="R$"
                          required
                        />
                        <div class="invalid-feedback">
                          {{ errors[0] }}
                        </div>
                      </validation-provider>
                    </div>
                  </div>
                </div>

                <div class="row mt-4 justify-content-center" id="login-fields">
                  <div id="login-fields-title">
                    <p class="lead"><strong>Informações de Login</strong></p>
                    <hr class="my-4" />
                  </div>

                  <div class="form-group col-md-12 mb-4">
                    <validation-provider
                      v-slot="{ errors, classes }"
                      name="Email"
                      :rules="{ required: true, email: true }"
                      slim
                    >
                      <label class="mb-3" for="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        v-model.trim="form.email"
                        class="form-control"
                        :class="classes"
                        id="email"
                        placeholder="Email"
                        required
                      />
                      <div class="invalid-feedback">
                        {{ errors[0] }}
                      </div>
                    </validation-provider>
                  </div>

                  <div class="form-group col-md-6 mb-4">
                    <validation-provider
                      v-slot="{ errors, classes }"
                      name="Senha"
                      :rules="{ required: true, min: 8 }"
                      slim
                    >
                      <label class="mb-3" for="password">Senha *</label>
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

                  <div class="form-group col-md-6 mb-4">
                    <validation-provider
                      v-slot="{ errors, classes }"
                      name="Confirme sua Senha"
                      :rules="{ required: true, min: 8, confirmed: 'Senha' }"
                      slim
                    >
                      <label class="mb-3" for="confirm_password"
                        >Confirme sua Senha *</label
                      >
                      <input
                        type="password"
                        name="confirm_password"
                        v-model.trim="form.confirmPassword"
                        class="form-control"
                        :class="classes"
                        id="confirm_password"
                        required
                      />
                      <TemplateTogglePasswordView
                        input-name="confirm_password"
                      />
                      <div class="invalid-feedback">
                        {{ errors[0] }}
                      </div>
                    </validation-provider>
                  </div>
                </div>

                <div id="submit-btn" class="mt-3 d-flex justify-content-center">
                  <button
                    type="submit"
                    class="btn btn-primary btn-custom-green"
                  >
                    Criar Conta
                  </button>
                </div>
              </form>
            </validation-observer>
          </div>
        </section>

        <section id="form-footer">
          <hr class="my-4" />
          <div class="d-flex justify-content-center" id="privacy-policy">
            <p>
              Ao criar a conta, você concorda com nossas
              <NuxtLink to="/privacy-policy/"
                >Políticas de Privacidades</NuxtLink
              >.
            </p>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  middleware: ["educator_loggedin"],
  directives: { mask },
  async asyncData({ $axios }) {
    const { data } = await $axios.get("/subjects");
    const subjects = data;
    return { subjects };
  },
  data() {
    return {
      form: {
        name: "",
        birthdate: "",
        email: "",
        password: "",
        confirmPassword: "",
        subject: 0,
        average_price: 0,
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$axios.post("/educators/", this.form);
        let loginData = {
          email: this.form.email,
          password: this.form.password,
        };
        this.$auth
          .loginWith("local_educator", { data: loginData })
          .then(async () => {
            return await this.$router.push("/educators/in/profile");
          })
          .catch(async () => {
            return await this.$router.push("/educators/login/");
          });
      } catch ({ response }) {
        return await this.catchReponseError(response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/educators/signup.scss";
</style>