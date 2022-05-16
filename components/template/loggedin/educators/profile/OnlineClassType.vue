<template>
  <div id="class-type" class="d-flex justify-content-center row">
    <section
      id="class-type-title"
      class="d-flex justify-content-center fw-bold h2"
    >
      <h2>Ferramentas Online</h2>
    </section>
    <div class="col-12 d-flex justify-content-center">
      <div class="form-check m-4" v-for="(tool, i) in optionTools" :key="i">
        <input
          class="form-check-input"
          type="checkbox"
          :value="tool.id"
          :id="`tool_${tool.id}`"
          :name="`tool_${tool.id}`"
          @change="changedOnlineToolsSelected($event)"
          :true-value="tool.id"
          :checked="hasCheckedinStore(tool.id)"
        />
        <label class="form-check-label" :for="`tool_${tool.id}`">
          {{ tool.tool }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionTools: [],
    };
  },
  async fetch() {
    const { data } = await this.$axios.get("/online-tools/");
    this.optionTools = data;
  },
  methods: {
    changedOnlineToolsSelected(event){
      const target = event.target
      if(target.checked){
        this.$store.commit('classType/pushClassOnlineTool', target.value) 
      }else{
        this.$store.commit('classType/removeClassOnlineTool', target.value)
      }
    },
    hasCheckedinStore(toolId){
      return Boolean(this.$store.state.classType.onlineTools.includes(toolId))
    }
  }
};
</script>

<style>
</style>