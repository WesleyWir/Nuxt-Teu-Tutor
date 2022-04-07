<template>
  <main
    class="container d-flex mb-1 align-items-center flex-column"
    id="student-forgot-password"
  >
    <TemplateFrontFormImTitle>
      <i class="fa-solid fa-graduation-cap"></i>
      Sou Estudante
    </TemplateFrontFormImTitle>

    <UsersResetPasswordForm route="/students" />
  </main>
</template>

<script>
export default {
  validate({ query }) {
    if (!query.token) {
      return false;
    }
    return true;
  },
};
</script>