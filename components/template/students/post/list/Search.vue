<template>
  <div id="search" class="row w-100 mb-4">
    <div class="col-12">
      <form @submit.stop.prevent="onSubmitSearch()">
        <div class="input-group d-flex justify-content-center">
          <div class="form-outline w-50 me-2">
            <input
              type="search"
              id="search-input"
              class="form-control input-lg"
              placeholder="Buscar por posts..."
              v-model="search"
            />
          </div>
          <button type="submit" class="btn" id="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  created() {
    if (this.$route.query.search) {
      this.search = this.$route.query.search;
    }
  },
  methods: {
    onSubmitSearch() {
      this.$router.push({
        query: { ...this.$route.query, search: this.search || undefined },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#search {
  .input-group {
    #search-input {
      border: solid 2px #fff;
      border-radius: 10px;
    }

    #search-btn {
      border: solid 2px #fff;
      border-radius: 10px;
      background-color: #fff;

      &:hover {
        background-color: darken(#fff, 20);
      }
    }
  }
}
</style>