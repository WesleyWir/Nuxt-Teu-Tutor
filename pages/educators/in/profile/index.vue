<template>
    <TemplateLoggedinEducatorsProfileImageProfile />
</template>

<script>
export default {
  layout: "internal",
  middleware: ['auth', 'educator_strategy'],
  auth: 'local_educator',
}
</script>

<style>

</style>