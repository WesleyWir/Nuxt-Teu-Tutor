<template>
  <section id="form">
    <div class="col-12 mb-3 d-flex justify-content-center" id="form-title">
      <h2 class="h2 text-uppercase"><strong>Login</strong></h2>
    </div>

    <!-- <UsersLoginSocialLogin /> -->

    <div class="d-flex justify-content-center" id="login-form-fields">
      <validation-observer ref="observer" v-slot="{ handleSubmit }" slim>
        <form
          id="login-form-fields-form"
          @submit.stop.prevent="handleSubmit(onSubmit)"
        >
          <div class="form-group col-md-12 mb-4">
            <validation-provider
              v-slot="{ errors, classes }"
              name="Email"
              :rules="{ required: true, email: true }"
              slim
            >
              <label class="mb-3" for="email">Email</label>
              <input
                type="text"
                name="email"
                v-model.trim="form.email"
                class="form-control"
                :class="classes"
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
              v-slot="{ errors, classes }"
              name="Senha"
              :rules="{ required: true }"
              slim
            >
              <label class="mb-3" for="password">Senha</label>
              <NuxtLink class="float-end" :to="`/${route}/forgot`"
                >Esqueceu a senha?</NuxtLink
              >
              <input
                type="password"
                autocomplete="current-password"
                name="password"
                v-model="form.password"
                class="form-control"
                :class="classes"
                id="password"
              />
              <TemplateTogglePasswordView input-name="password" />
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
          </div>

          <div id="submit-btn" class="mt-3 d-flex justify-content-center">
            <v-wait for="login">
              <template slot="waiting">
                <UiSpinner />
              </template>
              <button type="submit" class="btn btn-custom-green">Entrar</button>
            </v-wait>
          </div>
        </form>
      </validation-observer>
    </div>
  </section>
</template>

<script>
export default {
  props: ["route"],
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
      await this.$wait.start("login");
      this.$emit("onLoginSubmit", this.form);
      await this.$wait.end("login");
    },
  },
};
</script>

<style lang="scss" scoped>
#form {
  #login-form-fields {
    form {
      width: 50%;

      #submit-btn {
        button {
          width: 100%;
        }
      }
    }
    label {
      font-weight: bold;
    }
  }
}
@include media-between(xs, md) {
  #form {
    #login-form-fields {
      form {
        width: 90%;

        #submit-btn {
          button {
            width: 90%;
          }
        }
      }
    }
  }
}
</style>