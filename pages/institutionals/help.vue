<template>
  <main id="help-page">
    <section
      class="
        container
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
      id="content-section"
    >
      <div id="help-title" class="p-2 mb-5">
        <h2 class="h2 fw-bold">Sobre o TeuTutor</h2>
      </div>
      <div class="col-12" id="help-accordion">
        <div class="accordion col-12" id="accordionHelp">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Como se cadastrar sendo um estudante?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionHelp"
            >
              <div class="accordion-body">
                Entre em <NuxtLink to="/students/signup/">Cadastrar-se</NuxtLink>. E
                preencha seus dados.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Como se cadastrar sendo um educador?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionHelp"
            >
              <div class="accordion-body">
                Entre em <NuxtLink to="/educators/signup/">Cadastrar-se</NuxtLink>. E
                preencha seus dados.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Como contratar um educador?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionHelp"
            >
              <div class="accordion-body">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis, veritatis quod incidunt mollitia impedit, nesciunt
                saepe excepturi voluptatibus repellat pariatur quam officia.
                Culpa hic ipsum, exercitationem soluta quis eius doloribus.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/institutionals/help.scss";
</style>