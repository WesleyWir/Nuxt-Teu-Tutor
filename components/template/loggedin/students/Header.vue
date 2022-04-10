<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <NuxtLink class="logo" to="/">
            <img
              srcset="/imgs/logo.png, /imgs/logo-2x.png 2x"
              src="/imgs/logo-2x.png"
              alt="TeuTutor"
            />
          </NuxtLink>
        </div>

        <div
          class="col-6 hidden-sm d-flex justify-content-end"
          id="user-loggedin-dropdowns"
        >
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="caret fas fa-angle-down fa-xl md-2"></i>
                      <div id="rounded-profile-image">
                        <img
                          src="/imgs/user/default-profile.png"
                          alt="Profile Image"
                          class="img"
                        />
                      </div>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-loggedin-custom-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li><a class="dropdown-item" href="#">Meu Perfil</a></li>
                      <li>
                        <a class="dropdown-item" href="#">Minhas Aulas</a>
                      </li>
                      <li><a class="dropdown-item" href="#">Criar Post</a></li>
                      <li><a class="dropdown-item" href="#">Meus Posts</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <TemplateLoggedinStudentsHamburgerMenu />
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~/assets/scss/components/loggedin/students/header.scss";
</style>