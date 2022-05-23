<template>
  <div id="profile-description" class="container">
    <UiProfileTitle title="Descreva Sua Aula" />
    <vue-editor
      id="editor"
      v-model="content"
      useCustomImageHandler
      @image-added="handleWysiwygImage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
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