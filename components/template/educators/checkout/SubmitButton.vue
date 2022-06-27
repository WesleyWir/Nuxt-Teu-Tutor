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
      await this.$store.dispatch("studentCalendar/resetState");
      return this.showSuccessMessage("Aula(s) marcadas com sucesso!", 2000);
      
    }
  }
};
</script>

<style>
</style>