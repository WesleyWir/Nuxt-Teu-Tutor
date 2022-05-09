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
  layout: 'internal',
  middleware: ['auth', 'student_strategy'],
  auth: 'local_student',
};
</script>