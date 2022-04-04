<template>
  <main class="container" id="auth-not-loggedin">
    <section class="row">
      <div class="col-12 d-flex justify-content-center mb-4">
        <h1 class="h1 fw-bold" id="title">
          Para acessar esse recurso, você precisa de uma conta.
        </h1>
      </div>
      <section class="row cards">
        <div class="col-md-6 col-sm-12">
          <div class="card text-center">
            <img
              src="/imgs/not-loggedin/undraw_exams.svg"
              class="card-img-top"
              alt="Student not loggedin"
            />
            <div class="card-body">
              <h5 class="card-title h2 fw-bold mb-3">
                Faça seu login como estudante
              </h5>
              <NuxtLink to="/students/login/" class="btn btn-custom-green"
                >Login</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <div class="card text-center">
            <img
              src="/imgs/not-loggedin/undraw_professor.svg"
              class="card-img-top"
              alt="Student not loggedin"
            />
            <div class="card-body">
              <h5 class="card-title h2 fw-bold mb-3">
                Faça seu login como educador
              </h5>
              <NuxtLink to="/educators/login/" class="btn btn-custom-green"
                >Login</NuxtLink
              >
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
#auth-not-loggedin {
  #title {
    font-size: 1.5rem;
  }
  .cards {
    padding: 0 10%;
    padding-bottom: 5%;
    .card {
      padding: 6%;
      .card-body {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .btn {
          width: 100%;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>