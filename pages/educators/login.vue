<template>
  <main class="container" id="student-login">
    <TemplateFrontFormImTitle>
      <i class="fa-solid fa-chalkboard-teacher"></i>
      Sou Educador
    </TemplateFrontFormImTitle>
    <section id="content-section">
      <section class="row">
        <UsersLoginHasAccount route="educators" />
        <UsersLoginForm route="educators" v-on:onLoginSubmit="onLoginSubmit" />
        <UsersLoginFormFooter />
      </section>
    </section>
  </main>
</template>

<script>
export default {
  middleware: ['student_loggedin'],
  methods: {
    async onLoginSubmit(form) {
      try {
        await this.$auth.loginWith("local_educator", { data: form });
        return await this.$router.go('/educators/in/profile');
      } catch ({ response }) {
        this.catchReponseError(response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/pages/students/login.scss";
</style>