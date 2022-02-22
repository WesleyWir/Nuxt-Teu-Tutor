<template>
    <header id='header'>
        <div class="container-fluid">
            <div class="row">
                <div class="col-2">
                    <a href="index.php" class="logo">
                        <img srcset="imgs/logo.png, imgs/logo-2x.png 2x" src="imgs/logo-2x.png" alt="TeuTutor" />
                    </a>
                </div>

                <div class="col-8 hidden-sm d-md-flex justify-content-center" id="institutional-links">
                    <nav class="navbar navbar-expand-lg">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="./about.php">Sobre</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./help.php">Ajuda</a>
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
                                            <li><a class="dropdown-item" href="./student-login.php">Login</a></li>
                                            <li><a class="dropdown-item" href="./student-register.php">Criar Conta</a></li>
                                        </ul>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sou Educador
                                        </a>
                                        <ul class="dropdown-menu dropdown-custom-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="./educator-login.php">Login</a></li>
                                            <li><a class="dropdown-item" href="./educator-register.php">Criar Conta</a></li>
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