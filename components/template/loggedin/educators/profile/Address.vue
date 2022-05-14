<template>
  <div id="address-educator">
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
              <div class="form-group col-md-8">
                <label for="country">País</label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  placeholder="País"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="region">Estado</label>
                <select id="region" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="city">Cidade</label>
                <select id="city" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-8">
                <label for="neighborhood">Bairro</label>
                <input
                  type="text"
                  class="form-control"
                  id="neighborhood"
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
export default {};
</script>