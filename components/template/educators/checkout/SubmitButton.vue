<template>
  <div class="col-12 d-flex justify-content-center mt-3">
    <div class="col-12 d-flex justify-content-center">
      <button type="button" class="btn btn-primary btn-custom-green" @click="createClass()">
        Confirmar Aula
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async createClass(){
      await this.$store.dispatch("studentCalendar/createClass");
      return this.showSuccessMessage("Aula(s) marcadas com sucesso!", "top");
      
    }
  }
};
</script>

<style>
</style>