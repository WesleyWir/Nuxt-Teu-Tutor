<template>
    <nav role="navigation" id="hamburger-menu">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <NuxtLink to="/about/">
                        <li>Sobre</li>
                    </NuxtLink>
                    <NuxtLink to="/help/">
                        <li>Ajuda</li>
                    </NuxtLink>
                    <li class="accordion" id="sou-estudante-accordion">
                        <a class="nav-accordion" data-bs-toggle="collapse" data-bs-target="#sub-sou-estudante" aria-expanded="true" aria-controls="sub-sou-estudante">
                            Sou Estudante
                            <i class="caret fas fa-angle-down"></i>
                        </a>
                        <ul id="sub-sou-estudante" class="accordion-collapse collapse sub-menu-collapse" data-bs-parent="#sou-estudante-accordion">
                            <li>
                                <NuxtLink to="/student-login/">
                                    Login
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/student-signup/">
                                    Criar Conta
                                </NuxtLink>
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
                                <NuxtLink to="/educator-login/">
                                    Login
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/educator-signup/">
                                    Criar Conta
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("DOMContentLoaded", this.navAccordionsCollapse());
  },
  methods: {
    navAccordionsCollapse(e) {
      const nav_accordions = document.getElementsByClassName("nav-accordion");
      if (nav_accordions)
        Object.entries(nav_accordions).forEach(([key, value]) => {
          value.addEventListener("click", (e) => {
            let icon =
              e.currentTarget.getElementsByClassName("fa-angle-down")[0];

            if (!icon) {
              icon = e.currentTarget.getElementsByClassName("fa-angle-up")[0];
            }

            if (icon.classList.contains("fa-angle-down")) {
              return icon.classList.replace("fa-angle-down", "fa-angle-up");
            }

            return icon.classList.replace("fa-angle-up", "fa-angle-down");
          });
        });
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/components/hamburger-menu.scss";
</style>