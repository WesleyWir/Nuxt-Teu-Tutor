<template>
  <nav role="navigation" id="hamburger-menu">
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li class="accordion" id="user-loggedin-accordion">
          <a
            class="nav-accordion"
            data-bs-toggle="collapse"
            data-bs-target="#sub-sou-estudante"
            aria-expanded="true"
            aria-controls="sub-sou-estudante"
            v-on:click="navAccordionsCollapse()"
          >
            <div id="rounded-profile-image">
              <img
                src="/imgs/user/default-profile.png"
                alt="Profile Image"
                class="img"
              />
            </div>
            <div id="angle-down-profile">
              <i class="caret fas fa-xl" :class="[angle_profile_icon]"></i>
            </div>
          </a>
          <ul
            id="sub-sou-estudante"
            class="accordion-collapse collapse sub-menu-collapse"
            data-bs-parent="#sou-estudante-accordion"
          >
            <li>
              <NuxtLink to="/students/in/profile/" > Meu Perfil </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/students/in/classes/"> Minhas Aulas </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/students/in/posts/create"> Criar Post </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/students/in/posts/"> Meus Posts </NuxtLink>
            </li>
          </ul>
        </li>
        <hr style="color: #000" />
        <a href="#">
          <li>Sobre</li>
        </a>
        <a href="#">
          <li>Ajuda</li>
        </a>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      angle_profile_icon: "fa-angle-down",
    };
  },
  methods: {
    navAccordionsCollapse() {
      if (this.angle_profile_icon === "fa-angle-down") {
        return this.angle_profile_icon = "fa-angle-up";
      }

      return this.angle_profile_icon = "fa-angle-down";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/loggedin/students/hamburger-menu.scss";
</style>