<template>
  <main class="container" id="student-login">
    <TemplateFrontFormImTitle>
      <i class="fa-solid fa-graduation-cap"></i>
      Sou Estudante
    </TemplateFrontFormImTitle>
    <section id="content-section">
      <section class="row">
        <UsersLoginHasAccount route="students" />
        <UsersLoginForm route="students" v-on:onLoginSubmit="onLoginSubmit" />
        <UsersLoginFormFooter />
      </section>
    </section>
  </main>
</template>

<script>
export default {
  middleware: ['student_guest'],
  methods: {
    async onLoginSubmit(form) {
      try {
        await this.$auth.loginWith("local_student", { data: form });
        return await this.$router.go('/students/in/profile');
        // await this.$router.push()
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