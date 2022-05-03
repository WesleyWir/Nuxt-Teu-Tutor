<template>
  <main id="educators-list">
    <section class="container" id="search-section">
      <div class="input-group d-flex justify-content-center">
        <form
          class="col-12"
          id="search-form"
          method="GET"
          action="./educators-list.php"
        >
          <div id="search-form-i-b" class="col-6 mb-3">
            <!-- Start Button trigger city select -->
            <div
              id="search-form-i-b-icon-map"
              title="Escolher professores próximo a uma localização"
            >
              <a type="button" id="search-form-i-b-icon-map-a">
                <i class="fas fa-map-marker-alt fa-lg"></i>
              </a>
            </div>
            <!-- End Button trigger modal -->
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

          <!-- START SELECT LOCALIZATION -->
          <div
            id="search-form-select-localization"
            class="col-xs-12 col-sm-2 mb-3"
            style="display: none"
          >
            <div class="search-form-select-localization-item">
              <select
                class="form-select"
                id="search-form-select-localization-item-region"
                aria-label="Default select example"
              >
                <option selected value="">Estado</option>
              </select>
            </div>

            <div class="search-form-select-localization-item">
              <select
                class="form-select"
                id="search-form-select-localization-item-city"
                aria-label="Default select example"
                disabled
              >
                <option selected value="">Cidade</option>
              </select>
            </div>
          </div>
          <!-- END SELECT LOCALIZATION -->

          <div id="search-form-select" class="col-xs-12 col-sm-2">
            <div class="search-form-select-item">
              <select class="form-select" aria-label="Default select example">
                <option selected value="educadores">Educadores</option>
                <option value="estudantes">Estudantes</option>
              </select>
            </div>

            <div class="search-form-select-item">
              <select class="form-select" aria-label="Default select example">
                <option selected value="educadores">Filtros</option>
                <option value="estudantes">Filtro 1</option>
              </select>
            </div>

            <div class="search-form-select-item">
              <select class="form-select" aria-label="Default select example">
                <option selected value="educadores">Ordem</option>
                <option value="estudantes">Ordem 1</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="container" id="educators-list-section">
      <div id="educators-list-section-main">
        <div class="educators-list-item">
          <div class="educators-list-item-img">
            <img
              class="img-fluid"
              src="/imgs/user/default-profile.png"
              alt="Imagem Educador"
            />
          </div>

          <div class="educators-list-item-info">
            <div class="educators-list-item-info-subj-name-rating">
              <div class="educators-list-item-info-subj-name">
                <a
                  href="./educators-list.php?materia=materia"
                  class="educators-list-item-info-subj"
                  >Matéria</a
                >
                <a
                  href="./educator-single.php"
                  class="h2 educators-list-item-info-name"
                  >Nome do Educador</a
                >
              </div>

              <div class="educators-list-item-info-rating">
                <span class="educators-list-item-info-rating-rate">5</span>
                <i class="fas fa-star educators-list-item-info-rating-star"></i>
              </div>
            </div>

            <p class="educators-list-item-info-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum est perferendis sequi quas rem sapiente optio inventore
              alias molestiae placeat. Vel eum tenetur odit consectetur libero
              facilis sed blanditiis explicabo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum est perferendis sequi
              quas rem sapiente optio inventore alias molestiae placeat. Vel eum
              tenetur odit consectetur libero facilis sed blanditiis explicabo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum est perferendis sequi quas rem sapiente optio inventore
              alias molestiae placeat. Vel eum tenetur odit consectetur libero
              facilis sed blanditiis explicabo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum est perferendis sequi
              quas rem sapiente optio inventore alias molestiae placeat. Vel eum
              tenetur odit consectetur libero facilis sed blanditiis explicabo.
            </p>

            <div class="educators-list-item-lec-info">
              <span class="educators-list-item-lec-info-value">R$ 20 /h</span>
              <span class="educators-list-item-lec-info-address">
                Rua localização X, Guarapuava, PR
              </span>
            </div>

            <div class="educators-list-item-single-btn">
              <a href="./educator-single.php" class="btn">Ver Perfil</a>
            </div>
          </div>
        </div>

        <div class="educators-list-item">
          <div class="educators-list-item-img">
            <img
              class="img-fluid"
              src="/imgs/user/default-profile.png"
              alt="Imagem Educador"
            />
          </div>

          <div class="educators-list-item-info">
            <div class="educators-list-item-info-subj-name-rating">
              <div class="educators-list-item-info-subj-name">
                <a
                  href="./educators-list.php?materia=materia"
                  class="educators-list-item-info-subj"
                  >Matéria</a
                >
                <a
                  href="./educator-single.php"
                  class="h2 educators-list-item-info-name"
                  >Nome do Educador</a
                >
              </div>

              <div class="educators-list-item-info-rating">
                <span class="educators-list-item-info-rating-rate">5</span>
                <i class="fas fa-star educators-list-item-info-rating-star"></i>
              </div>
            </div>

            <p class="educators-list-item-info-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum est perferendis sequi quas rem sapiente optio inventore
              alias molestiae placeat. Vel eum tenetur odit consectetur libero
              facilis sed blanditiis explicabo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum est perferendis sequi
              quas rem sapiente optio inventore alias molestiae placeat. Vel eum
              tenetur odit consectetur libero facilis sed blanditiis explicabo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum est perferendis sequi quas rem sapiente optio inventore
              alias molestiae placeat. Vel eum tenetur odit consectetur libero
              facilis sed blanditiis explicabo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum est perferendis sequi
              quas rem sapiente optio inventore alias molestiae placeat. Vel eum
              tenetur odit consectetur libero facilis sed blanditiis explicabo.
            </p>

            <div class="educators-list-item-lec-info">
              <span class="educators-list-item-lec-info-value">R$ 20 /h</span>
              <span class="educators-list-item-lec-info-address">
                Rua localização X, Guarapuava, PR
              </span>
            </div>

            <div class="educators-list-item-single-btn">
              <a href="./educator-single.php" class="btn">Ver Perfil</a>
            </div>
          </div>
        </div>

        <div class="educators-list-item">
          <div class="educators-list-item-img">
            <img
              class="img-fluid"
              src="/imgs/user/default-profile.png"
              alt="Imagem Educador"
            />
          </div>

          <div class="educators-list-item-info">
            <div class="educators-list-item-info-subj-name-rating">
              <div class="educators-list-item-info-subj-name">
                <a
                  href="./educators-list.php?materia=materia"
                  class="educators-list-item-info-subj"
                  >Matéria</a
                >
                <a
                  href="./educator-single.php"
                  class="h2 educators-list-item-info-name"
                  >Nome do Educador</a
                >
              </div>

              <div class="educators-list-item-info-rating">
                <span class="educators-list-item-info-rating-rate">5</span>
                <i class="fas fa-star educators-list-item-info-rating-star"></i>
              </div>
            </div>

            <p class="educators-list-item-info-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum est perferendis sequi quas rem sapiente optio inventore
              alias molestiae placeat. Vel eum tenetur odit consectetur libero
              facilis sed blanditiis explicabo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum est perferendis sequi
              quas rem sapiente optio inventore alias molestiae placeat. Vel eum
              tenetur odit consectetur libero facilis sed blanditiis explicabo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum est perferendis sequi quas rem sapiente optio inventore
              alias molestiae placeat. Vel eum tenetur odit consectetur libero
              facilis sed blanditiis explicabo. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum est perferendis sequi
              quas rem sapiente optio inventore alias molestiae placeat. Vel eum
              tenetur odit consectetur libero facilis sed blanditiis explicabo.
            </p>

            <div class="educators-list-item-lec-info">
              <span class="educators-list-item-lec-info-value">R$ 20 /h</span>
              <span class="educators-list-item-lec-info-address">
                Rua localização X, Guarapuava, PR
              </span>
            </div>

            <div class="educators-list-item-single-btn">
              <a href="./educator-single.php" class="btn">Ver Perfil</a>
            </div>
          </div>
        </div>

        <div class="see-more mt-3 mb-3">
          <button href="" class="btn" id="see-more-btn">Ver Mais</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>