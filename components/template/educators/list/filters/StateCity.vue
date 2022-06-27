<template>
  <div id="search-form-select-localization" class="col-xs-12 col-sm-2 mb-3">
    <div class="search-form-select-localization-item">
      <select
        class="form-select"
        id="search-form-select-localization-item-region"
        v-model="addressState"
      >
        <option selected>Selecione o estado</option>
        <option v-for="(state, i) in states" :key="i" :value="state.initials">
          {{ state.name }}
        </option>
      </select>
    </div>

    <div class="search-form-select-localization-item">
      <input
        type="text"
        class="form-control"
        id="city"
        list="cities"
        @change="updateFilterInQuery($event)"
        placeholder="Cidade"
      />
      <datalist id="cities">
        <option :true-value="city" v-for="(city, i) in cities" :key="i">
          {{ city }}
        </option>
      </datalist>
    </div>
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
    addressState: {
      get() {
        return this.$store.state.classType.address.state;
      },
      set(state) {
        this.$store.commit("classType/setState", state);
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
    updateFilterInQuery(event) {
      const value = event.target.value;

      this.$router.push({
        query: {
          ...this.$route.query,
          ...{
            city: value || undefined,
          },
        },
      });
    },
  },
};
</script>

<style>
</style>