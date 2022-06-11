<template>
  <div id="profile-description" class="container">
    <UiProfileTitle title="Descreva Sua Aula" />
    <vue-editor
      id="editor"
      v-model="educator.description"
      useCustomImageHandler
      @image-added="handleWysiwygImage"
    />
    <div class="buttons mt-3">
      <button type="button" @click="onEditSubmit()" class="btn btn-success">
        <strong>Atualizar</strong>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      educator: {
        description: ''
      }
    };
  },
  async fetch() {
    await this.$auth.fetchUser()
    this.educator = structuredClone(this.$auth.user);
  },
  methods: {
    async onEditSubmit() {
      try {
        await this.$axios.patch(
          `/educators/${this.$auth.user.id}`,
          this.educator
        );
        this.showSuccessMessage("Perfil Atualizado!");
      } catch ({ response }) {
        await this.catchReponseError(response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#profile-description {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  margin-top: 2%;
}
</style>