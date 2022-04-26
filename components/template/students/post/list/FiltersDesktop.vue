<template>
  <div id="filters">
    <div class="container">
      <div class="row p-3">
        <div class="col-12">
          <label for="subject">Subject:</label>
          <select class="form-select" name="subject" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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