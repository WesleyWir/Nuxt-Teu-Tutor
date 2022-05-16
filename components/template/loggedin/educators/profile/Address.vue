<template>
  <div id="address-educator" class="w-75">
    <section
      id="contact-means-title"
      class="d-flex justify-content-center fw-bold h2"
    >
      <h2>Endereço do Educador</h2>
    </section>
    <section id="address-form">
      <validation-observer ref="observer" v-slot="{ handleSubmit }" slim>
        <form @submit.stop.prevent="handleSubmit(save)">
          <validation-provider
            v-slot="{ classes }"
            name="Facebook"
            :rules="{ regex: '^(http|https)://' }"
            slim
          >
            <div class="row">
              <div class="form-group col-md-12">
                <label for="country">País</label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  v-model="addressCountry"
                  placeholder="País"
                  disabled
                />
              </div>
              <div class="form-group col-md-6">
                <label for="region">Estado</label>
                <select id="region" class="form-control" v-model="addressState">
                  <option selected>Selecione o estado</option>
                  <option
                    v-for="(state, i) in states"
                    :key="i"
                    :value="state.initials"
                  >
                    {{ state.name }}
                  </option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="city">Cidade</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  list="cities"
                  v-model="addressCity"
                  placeholder="Cidade"
                />
                <datalist id="cities">
                  <option :true-value="city" v-for="(city, i) in cities" :key="i">{{ city }}</option>
                </datalist>
              </div>
              <div class="form-group col-md-12">
                <label for="neighborhood">Bairro</label>
                <input
                  type="text"
                  class="form-control"
                  id="neighborhood"
                  v-model="addressNeighborhood"
                  placeholder="Bairro"
                />
              </div>
            </div>
          </validation-provider>
        </form>
      </validation-observer>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: [],
      cities: [],
    };
  },
  async fetch() {
    const response = await fetch("/json/states-cities.json");
    const { states } = await response.json();
    this.states = states;
  },
  computed: {
    citiesComputed: {
      get() {
        return this.cities;
      },
      set(newCities) {
        this.cities = newCities;
      },
    },
    addressCountry: {
      get() {
        return this.$store.state.classType.address.country;
      },
      set(country) {
        this.$store.commit("classType/setCountry", country);
      },
    },
    addressState: {
      get() {
        return this.$store.state.classType.address.state;
      },
      set(state) {
        this.$store.commit("classType/setState", state);
      },
    },
    addressCity: {
      get() {
        return this.$store.state.classType.address.city;
      },
      set(city) {
        this.$store.commit("classType/setCity", city);
      },
    },
    addressNeighborhood: {
      get() {
        return this.$store.state.classType.address.neighborhood;
      },
      set(neighborhood) {
        this.$store.commit("classType/setNeighborhood", neighborhood);
      },
    },
  },
  watch: {
    addressState(newStateInitial) {
      this.loadCities(newStateInitial);
    },
  },
  methods: {
    loadCities(newStateInitial) {
      this.cities = [];
      this.states.map((state) => {
        if (state.initials == newStateInitial) {
          return (this.citiesComputed = state.cities);
        }
      });
    },
  },
};
</script>