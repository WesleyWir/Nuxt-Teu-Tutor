<template>
  <main id="main-page">
    <section class="container" id="search-section">
      <div class="input-group d-flex justify-content-center">
        <form
          class="col-12"
          id="search-form"
          method="GET"
          action="./educators-list.php"
        >
          <div id="search-form-i-b" class="col-6 mb-3">
            <input
              class="form-control mr-sm-2 customized-height rounded-0"
              type="search"
              placeholder="Digite aqui o que você procura..."
              aria-label="Search"
            />
            <button
              class="btn my-sm-0 customized-height rounded-0"
              type="submit"
            >
              <i class="fas fa-search"></i>
            </button>
          </div>
          <div id="search-form-select" class="col-xs-12 col-sm-2">
            <select class="form-select" aria-label="Default select example">
              <option selected value="educadores">Educadores</option>
              <option value="estudantes">Estudantes</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
