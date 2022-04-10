<template>
  <main class="container" id="student-profile">
    <TemplateLoggedinStudentsProfileImageProfile />
    <TemplateLoggedinStudentsProfileEditForm />
    <TemplateLoggedinStudentsProfilePosts />
  </main>
</template>

<script>
export default {
  middleware: 'auth'
};
</script>

<style lang="scss" scoped>
#students-profile{
    height: 100%
}
</style>