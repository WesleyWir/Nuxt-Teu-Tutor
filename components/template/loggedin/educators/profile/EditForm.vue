<template>
  <section id="profile-info">
    <UiProfileTitle title="Informações da Conta"/>
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
                v-model="educator.name"
                aria-describedby="name"
                :disabled="!isEdit"
                :class="classes"
              />
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
          </div>
          <div class="row">
            <div class="form-group col-6">
              <validation-provider
                v-slot="{ errors, classes }"
                name="Matéria"
                :rules="{ required: true }"
                slim
              >
                <label for="name">Matéria Principal</label>
                <select
                  class="form-select"
                  :disabled="!isEdit"
                  :class="classes"
                  v-model="educator.subject_id"
                  name="type"
                  aria-label="Default select example"
                >
                  <option 
                  :selected="sub.id == educator.subject_id" 
                  :value="sub.id" 
                  :key="sub.id" 
                  v-for="sub in subjects"
                  >{{ sub.subject }}</option>
                </select>
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
            </div>

            <div class="form-group col-6">
              <validation-provider
                v-slot="{ errors, classes }"
                name="Preço Médio"
                :rules="{ required: true }"
                slim
              >
                <label for="name">Valor Médio da hora de aula:</label>
                <input
                  type="text"
                  class="form-control"
                  v-mask="['###.###.###']"
                  id="average_price"
                  name="average_price"
                  v-model="educator.average_price"
                  aria-describedby="name"
                  :disabled="!isEdit"
                  :class="classes"
                />
                <div class="invalid-feedback">
                  {{ errors[0] }}
                </div>
              </validation-provider>
            </div>
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
                v-model="educator.password"
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
                v-model="educator.old_password"
                :disabled="!isEdit"
              />
              <div class="invalid-feedback">
                {{ errors[0] }}
              </div>
            </validation-provider>
            <small id="password-help" class="form-text text-muted"
              >Esse campo é obrigatório, apenas se a senha for ser
              alterada</small
            >
          </div>
          <div class="form-group">
            <validation-provider
              v-slot="{ errors, classes }"
              name="Confirme sua Senha"
              :rules="{
                required_if: 'Nova Senha',
                min: 8,
                confirmed: 'Nova Senha',
              }"
              slim
            >
              <label for="password">Confirme a nova senha</label>
              <input
                type="password"
                name="confirm_password"
                class="form-control"
                :class="classes"
                id="password_confirm"
                v-model="educator.confirm_password"
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
import { mask } from "vue-the-mask";

export default {
  directives: { mask },
  data() {
    return {
      isEdit: false,
      educator: {},
      subjects: {}
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        `/educators/${this.$auth.user.id}/edit`
      );
      this.educator = data;

      const response = await this.$axios.get('/subjects/');
      this.subjects = response.data;
    } catch ({ response }) {
      await this.catchReponseError(response);
    }
  },
  methods: {
    async onEditSubmit() {
      try {
        await this.$axios.patch(
          `/educators/${this.educator.id}`,
          this.educator
        );
        this.showSuccessMessage("Perfil Atualizado!");
      } catch ({ response }) {
        await this.catchReponseError(response);
      }

      this.isEdit = !this.isEdit;
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