<template>
  <main class="container" id="educator-profile">
    <TemplateLoggedinEducatorsProfileImageProfile />
    <TemplateLoggedinEducatorsProfileEditForm />
    <TemplateLoggedinEducatorsProfileContactMeans />
    <TemplateLoggedinEducatorsProfileDeleteAccount />
  </main>
</template>

<script>
export default {
  layout: "internal",
  middleware: ["auth", "educator_strategy"],
  auth: "local_educator",
};
</script>

<style>
</style>