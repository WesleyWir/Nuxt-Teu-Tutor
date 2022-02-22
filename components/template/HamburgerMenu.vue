<template>
    <nav role="navigation" id="hamburger-menu">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#">
                        <li>Sobre</li>
                    </a>
                    <a href="#">
                        <li>Ajuda</li>
                    </a>
                    <li class="accordion" id="sou-estudante-accordion">
                        <a class="nav-accordion" data-bs-toggle="collapse" data-bs-target="#sub-sou-estudante" aria-expanded="true" aria-controls="sub-sou-estudante">
                            Sou Estudante
                            <i class="caret fas fa-angle-down"></i>
                        </a>
                        <ul id="sub-sou-estudante" class="accordion-collapse collapse sub-menu-collapse" data-bs-parent="#sou-estudante-accordion">
                            <li>
                                <a href="#">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Criar Conta
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="accordion" id="sou-educador-accordion">
                        <a class="nav-accordion" data-bs-toggle="collapse" data-bs-target="#sub-sou-educador" aria-expanded="true" aria-controls="sub-sou-educador">
                            Sou Educador
                            <i class="caret fas fa-angle-down"></i>
                        </a>
                        <ul id="sub-sou-educador" class="accordion-collapse collapse sub-menu-collapse" data-bs-parent="#sou-educador-accordion">
                            <li>
                                <a href="#">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Criar Conta
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<style lang="scss">
@import "~/assets/scss/components/hamburger-menu.scss";
</style>