<template>
  <main class="container" id="educator-profile">
    <TemplateLoggedinEducatorsProfileImageProfile />
    <TemplateLoggedinEducatorsProfileEditForm />
    <TemplateLoggedinEducatorsProfileEditDescription />
    <TemplateLoggedinEducatorsProfileContactMeans />
    <TemplateLoggedinEducatorsProfileClassType />
    <TemplateEducatorsCalendar />
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