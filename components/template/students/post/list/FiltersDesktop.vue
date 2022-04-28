<template>
  <div id="filters">
    <div class="container">
      <div class="row p-3">
        <div class="col-12">
          <label for="subject">Subject:</label>
          <select class="form-select" name="subject" aria-label="Default select example" v-on:change="updateFilterInQuery($event)">
            <option v-for="subj in subjects" :value="subj.id" :key="subj.id">{{ subj.subject }}</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      subjects: []
    }
  },
  async fetch(){
    try{
      const { data } = await this.$axios.get("/subjects");
      this.subjects = data
    }catch({ response }){
      console.error(response);
    }
  },
  methods: {
    updateFilterInQuery(){
      this.$router.push({ query: { ...this.$route.query, search: this.search }})
    }
  }
};
</script>

<style lang="scss" scoped>
#filters {
  background-color: gray;
  width: 100%;
  height: 100%;
  max-width: 100%;
  border: solid gray 5px;
  border-radius: 10px;
}
</style>