<template>
  <div>
    <li v-for="link in links" :key="link.id" >
      <NuxtLink :to="link.path" class="dropdown-item">{{ link.text }}</NuxtLink>
    </li>
    <li>
      <a v-on:click="logout" class="dropdown-item"><i class="fas fa-sign-out"></i> Sair </a>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: []
    };
  },
  created(){
    switch (this.$auth.$state.strategy) {
      case 'local_student':
        this.links = [
          {id: 0, text: 'Meu Perfil', path: '/students/in/profile/'},
          {id: 1, text: 'Minhas Aulas', path: '/students/in/classes/'},
          {id: 2, text: 'Criar Post', path: '/students/in/posts/create/'},
          {id: 3, text: 'Meus Posts', path: '/students/in/posts/'},
        ]
        break;
      case 'local_educator':
        this.links = [
          {id: 0, text: 'Meu Perfil', path: '/educators/in/profile/'},
          {id: 1, text: 'Minhas Aulas', path: '/educators/in/classes/'},
          {id: 2, text: 'Meios de Pagamento', path: '/students/in/payments/'},
          {id: 3, text: 'Meu Calendário', path: '/students/in/calendary/'},
        ]
        break;
    }
  },
  methods: {
    async logout() {
      this.$auth.logout(this.$auth.$state.strategy);
      return await this.$router.go("/auth/success-logout");
      //   return this.$router.push()
    },
  },
};
</script>

<style>
</style>