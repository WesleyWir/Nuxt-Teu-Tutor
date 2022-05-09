<template>
  <main id="create-post" class="container">
    <section id="create-post-title" class="d-flex justify-content-center">
      <div class="title"><h2 class="h2 fw-bold">Crie seu post!!!</h2></div>
    </section>
    <section id="create-post-form">
      <div id="profile-info-form">
        <validation-observer ref="observer" v-slot="{ handleSubmit }" slim>
          <form @submit.stop.prevent="handleSubmit(onSubmit)">
            <div class="form-group" v-if="possible_subjects.length">
              <label for="subject">Selecione o <strong>Assunto</strong></label>
              <select
                class="form-control"
                v-model="form.subject"
                name="subject"
                id="subject"
              >
                <option
                  v-for="sub in possible_subjects"
                  :key="sub.id"
                  :value="sub.id"
                >
                  {{ sub.subject }}
                </option>
              </select>
            </div>
            <div class="form-group mt-3">
              <validation-provider
                v-slot="{ errors, classes }"
                name="Título"
                :rules="{ required: true, min: 8 }"
                slim
              >
                <label for="title">Título</label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  v-model="form.title"
                  :class="classes"
                  id="title"
                  aria-describedby="title"
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
            </div>
            <div class="form-group mt-3">
              <validation-provider
                v-slot="{ errors, classes }"
                name="Conteúdo"
                :rules="{ required: true }"
                slim
              >
                <label for="" :class="classes">Conteúdo</label>
                <client-only>
                  <vue-editor v-model="form.content" />
                </client-only>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
            </div>
            <div class="buttons mt-3">
              <button
                type="button"
                class="btn btn-danger"
                v-on:click="$router.go(-1)"
              >
                <strong>Cancelar</strong>
              </button>
              <button type="submit" class="btn btn-success">
                <strong>Publicar</strong>
              </button>
            </div>
          </form>
        </validation-observer>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'internal',
  middleware: ['auth', 'student_strategy'],
  auth: 'local_student',
  data() {
    return {
      possible_subjects: [],
      form: {
        title: "",
        subject: "",
        content: "",
      },
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get("/subjects");
      this.possible_subjects = data;
    } catch ({ response }) {
      this.catchReponseError(response);
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = await this.$axios.post("/posts/students/", this.form);
        this.showSuccessMessage("Post criado com sucesso");
        this.$router.push("/students/in/posts");
      } catch ({ response }) {
        this.catchReponseError(response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#create-post-form {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 50%;

    .buttons {
      display: flex;
      justify-content: space-around;
    }
  }
}

@include media-between(xs, md) {
  #create-post-form {
    form {
      width: 100%;
    }
  }
}
</style>