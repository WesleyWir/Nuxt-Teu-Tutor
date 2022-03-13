<template>
    <header id='header'>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2">
                    <NuxtLink class="logo" to="/">
                        <img srcset="/imgs/logo.png, /imgs/logo-2x.png 2x" src="/imgs/logo-2x.png" alt="TeuTutor" />
                    </NuxtLink>
                </div>

                <div class="col-8 hidden-sm d-md-flex justify-content-center" id="institutional-links">
                    <nav class="navbar navbar-expand-lg">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <NuxtLink class="nav-link" to="/about/">Sobre</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink class="nav-link" to="/help/">Ajuda</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    </nav>
                </div>

                <div class="col-2 hidden-sm d-flex justify-content-end" id="user-dropdowns">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sou Estudante
                                        </a>
                                        <ul class="dropdown-menu dropdown-custom-menu" aria-labelledby="navbarDropdown">
                                            <li><NuxtLink class="dropdown-item" to="/student/login/">Login</NuxtLink></li>
                                            <li><NuxtLink class="dropdown-item" to="/student/signup/">Criar Conta</NuxtLink></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sou Educador
                                        </a>
                                        <ul class="dropdown-menu dropdown-custom-menu" aria-labelledby="navbarDropdown">
                                            <li><NuxtLink class="dropdown-item" to="/educator/login/">Login</NuxtLink></li>
                                            <li><NuxtLink class="dropdown-item" to="/educator/signup/">Criar Conta</NuxtLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <TemplateHamburgerMenu />
    </header>
</template>

<style lang="scss">
@import "~/assets/scss/components/header.scss";
</style>