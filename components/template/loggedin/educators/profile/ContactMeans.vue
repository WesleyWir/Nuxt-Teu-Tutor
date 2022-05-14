<template>
  <div id="contact-means-profile">
    <section
      id="contact-means-title"
      class="d-flex justify-content-center fw-bold h2"
    >
      <h2>Formas de Contato</h2>
    </section>
    <section id="contact-means" class="d-flex justify-content-center">
      <validation-observer ref="observer" v-slot="{ handleSubmit }" slim>
        <form @submit.stop.prevent="handleSubmit(save)" class="d-flex justify-content-center col-12 col-md-6">
          <div class="row">
            <validation-provider
              v-slot="{ classes }"
              name="Facebook"
              :rules="{ regex: '^(http|https)://' }"
              slim
            >
              <div class="input-group mb-3 col-12">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="contact-means-icon-facebook"
                    ><i class="fab fa-facebook"></i
                  ></span>
                </div>

                <input
                  type="text"
                  class="form-control form-control-sm"
                  :class="classes"
                  placeholder="https://"
                  name="facebook"
                  aria-label="Facebook"
                  aria-describedby="contact-means-icon-facebook"
                  v-model="form[0].value"
                />
                <div class="invalid-feedback col-12">
                  Formato de URL inválida.
                </div>
              </div>
            </validation-provider>

            <validation-provider
              v-slot="{ errors, classes }"
              name="Email"
              :rules="{ email: true }"
              slim
            >
              <div class="input-group mb-3 col-12">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="contact-means-icon-email">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  :class="classes"
                  name="email"
                  aria-label="Email"
                  aria-describedby="contact-means-icon-email"
                  v-model.trim="form[1].value"
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </div>
            </validation-provider>
            <div class="input-group mb-3 col-12">
              <div class="input-group-prepend">
                <span class="input-group-text" id="contact-means-icon-email">
                  <i class="fa-brands fa-whatsapp"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="(00) 0 0000 0000"
                name="whatsapp"
                v-mask="['(##) # #### ####']"
                aria-label="Whatsapp"
                aria-describedby="contact-means-icon-email"
                v-model="form[2].value"
              />
            </div>
            <validation-provider
              v-slot="{ classes }"
              name="Linkedin"
              :rules="{ regex: '^(http|https)://' }"
              slim
            >
              <div class="input-group mb-3 col-12">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="contact-means-icon-email">
                    <i class="fa-brands fa-linkedin"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control form-control-sm"
                  :class="classes"
                  placeholder="https://"
                  name="linkedin"
                  aria-label="Linkedin"
                  aria-describedby="contact-means-icon-email"
                  v-model="form[3].value"
                />
                <div class="invalid-feedback col-12">
                  Formato de URL inválida.
                </div>
              </div>
            </validation-provider>
            <div class="col-12 d-flex justify-content-center">
              <button type="submit" class="btn btn-primary btn-custom-green">
                Salvar
              </button>
            </div>
          </div>
        </form>
      </validation-observer>
    </section>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      form: [
        {
          id: null,
          code: "facebook",
          value: "",
        },
        {
          id: null,
          code: "email",
          value: "",
        },
        {
          id: null,
          code: "whatsapp",
          value: "",
        },
        {
          id: null,
          code: "linkedin",
          value: "",
        },
      ],
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      `/contact-means/educators/${this.$auth.user.id}`
    );
    if (data.length) {
      this.form = data;
    }
  },
  methods: {
    async save() {
      try {
        if (this.form[0].id) {
          const { data } = await this.$axios.post("/contact-means/educators", {
            means: this.form,
          });

          return this.showSuccessMessage("Formas de contato salvo.");
        }
        const { data } = await this.$axios.post("/contact-means/educators", {
          means: this.form,
        });

        return this.showSuccessMessage("Formas de contato salvo.");
      } catch ({ response }) {
        this.catchReponseError(response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-means-profile {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  margin-top: 2%;
}
</style>