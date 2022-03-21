<template>
  <main class="container" id="student-forgot-password">
    <section
      class="d-flex justify-content-center mt-3 mb-1"
      id="im-student-title"
    >
      <h1 class="h1 font-weight-bold">
        <i class="fas fa-graduation-cap"></i>
        Sou Estudante
      </h1>
    </section>

    <section id="content-section">
      <section class="row">
        <section id="form">
          <div
            class="col-12 mb-3 mt-3 d-flex justify-content-center"
            id="form-title"
          >
            <h2 class="h2 text-uppercase">
              <strong>Recupere sua senha.</strong>
            </h2>
          </div>

          <div
            class="col-12 mb-5 d-flex justify-content-center"
            id="form-description"
          >
            <p id="form-description-text">
              Informe seu e-mail e lhe enviaremos instruções para recuperar sua
              senha.
            </p>
          </div>

          <div
            class="d-flex justify-content-center"
            id="student-forgot-password-form-fields"
          >
            <form id="student-forgot-password-form-fields-form">
              <div class="form-group col-md-12 mb-4">
                <label class="mb-3" for="email">Seu Email</label>
                <a class="float-end" href="./student-login.php">Login</a>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  id="email"
                  required
                />
              </div>

              <div id="submit-btn" class="mt-3 d-flex justify-content-center">
                <button type="submit" class="btn btn-primary btn-custom-green">
                  Recuperar
                </button>
              </div>
            </form>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>