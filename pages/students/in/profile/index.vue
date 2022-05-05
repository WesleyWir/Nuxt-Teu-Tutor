<template>
  <main class="container" id="student-profile">
    <TemplateLoggedinStudentsProfileImageProfile />
    <TemplateLoggedinStudentsProfileEditForm />
    <TemplateLoggedinStudentsProfilePosts />
    <TemplateLoggedinStudentsProfileDeleteAccount />
  </main>
</template>

<script>
export default {
  layout: "internal",
  middleware: "auth",
  auth: "local_student",
};
</script>