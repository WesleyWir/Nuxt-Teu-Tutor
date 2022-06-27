<template>
  <div>
    <section id="footer-book-icon">
      <img src="/imgs/footer/books.svg" alt="book icon" class="img-fluid" />
    </section>
    <footer id="footer">
      <section id="main-footer" class="container">
        <div class="row" id="logo">
          <div class="col-12">
            <img
              src="/imgs/logo-2x.png"
              alt="logo footer"
              width="100px"
              height="100px"
            />
          </div>
        </div>

        <div class="row" id="pages">
          <div class="col-xs-12 col-sm-2 page-item">
            <h3 class="page-type text-uppercase">Institucionais</h3>
            <ul class="mt-1">
              <li><NuxtLink class="list-item" to="/institutionals/about/">Sobre</NuxtLink></li>
              <li><NuxtLink class="list-item" to="/institutionals/help/">Ajuda</NuxtLink></li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-2 page-item">
            <h3 class="page-type text-uppercase">Buscar</h3>
            <ul class="mt-1">
              <li>
                <NuxtLink class="list-item" to="/educator/"
                  >Professores</NuxtLink
                >
              </li>
              <li>
                <NuxtLink class="list-item" to="/students/posts/"
                  >Alunos</NuxtLink
                >
              </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-5" id="inst-text">
            <h3 class="h3">Com dificuldades no seu ensino?</h3>
            <p>Busque um educador pra você :)</p>
          </div>
        </div>
      </section>

      <hr class="my-4" style="width: 100%; color: #fff" />

      <div class="col mb-2" id="copyright">
        <div class="col-12">
          <p class="font-weight-light">Copyright &copy; Wesley Wirmond</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/components/footer.scss";
</style>