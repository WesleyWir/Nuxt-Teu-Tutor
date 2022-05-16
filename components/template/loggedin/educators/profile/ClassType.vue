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
    <div
      class="col-12 d-flex justify-content-center"
      v-if="$store.state.classType.in_person"
    >
      <TemplateLoggedinEducatorsProfileAddress />
    </div>
    <div
      class="col-12 d-flex justify-content-center"
      v-if="$store.state.classType.online"
    >
      <TemplateLoggedinEducatorsProfileOnlineClassType />
    </div>

    <div class="col-12 d-flex justify-content-center mt-3">
      <div class="col-12 d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-primary btn-custom-green"
          @click="saveClassType()"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    types: (state) => {
      return [
        {
          label: "Presencial",
          value: "in_person",
          selected: state.classType.in_person,
        },
        {
          label: "Online",
          value: "online",
          selected: state.classType.online,
        },
      ]
    }
  }),
  async fetch() {
    await this.$store.dispatch("classType/loadClassType");
  },
  methods: {
    async emitCheckbox(event) {
      const value = event.target.value;
      const checked = event.target.checked;
      switch (value) {
        case "in_person":
          await this.$store.commit("classType/setClassTypeInPerson", checked);
          break;
        case "online":
          await this.$store.commit("classType/setClassTypeOnline", checked);
          break;
        default:
          break;
      }
    },
    async saveClassType() {
      await this.$store.dispatch("classType/saveClassType");
      this.showSuccessMessage('Tipo de aula salvo.')
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