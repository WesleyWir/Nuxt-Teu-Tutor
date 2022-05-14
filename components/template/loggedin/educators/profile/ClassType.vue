<template>
  <div id="class-type" class="d-flex justify-content-center row">
    <section
      id="class-type-title"
      class="d-flex justify-content-center fw-bold h2"
    >
      <h2>Tipo de Aula</h2>
    </section>
    <div class="col-12 d-flex justify-content-center">
      <div class="form-check m-4" v-for="(type, i) in types" :key="i">
        <input
          class="form-check-input"
          @change="emitCheckbox($event)"
          type="checkbox"
          :value="type.value"
          :id="`type_${type.value}`"
          :name="`type_${type.value}`"
          v-model="type.selected"
        />
        <label class="form-check-label" :for="`type_${type.value}`">
          {{ type.label }}
        </label>
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center">
      <TemplateLoggedinEducatorsProfileAddress v-if="types[0].selected" />
    </div>

    <div class="col-12 d-flex justify-content-center mt-3">
      <div class="col-12 d-flex justify-content-center">
        <button type="submit" class="btn btn-primary btn-custom-green">
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [
        {
          label: "Presencial",
          value: "in_person",
          selected: false,
        },
        {
          label: "Online",
          value: "online",
          selected: false,
        },
      ],
    };
  },
  methods: {
    emitCheckbox(event) {
      console.log(event.target.checked);
      console.log(event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
#class-type {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  margin-top: 2%;
}
</style>