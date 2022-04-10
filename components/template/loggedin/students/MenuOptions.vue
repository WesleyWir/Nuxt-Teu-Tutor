<template>
  <div>
    <li>
      <NuxtLink to="/students/in/profile/" class="dropdown-item">
        Meu Perfil
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/students/in/classes/" class="dropdown-item">
        Minhas Aulas
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/students/in/posts/create" class="dropdown-item">
        Criar Post
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/students/in/posts/" class="dropdown-item">
        Meus Posts
      </NuxtLink>
    </li>
    <li>
      <a v-on:click="logout" class="dropdown-item"><i class="fas fa-sign-out"></i> Sair </a>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    async logout() {
      this.$auth.logout();
      return await this.$router.go("/auth/success-logout");
      //   return this.$router.push()
    },
  },
};
</script>

<style>
</style>