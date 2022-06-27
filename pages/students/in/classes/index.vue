<template>
  
</template>

<script>
export default {
  layout: "internal",
  middleware: ["auth", "student_strategy"],
  auth: "local_student"
}
</script>

<style>

</style>