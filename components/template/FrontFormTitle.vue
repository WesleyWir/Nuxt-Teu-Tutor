<template>
  <section
    class="d-flex justify-content-center mt-3 mb-1"
    id="im-title"
  >
    <h1 class="h1 font-weight-bold">
      <i class="fa-solid fa-graduation-cap"></i>
      {{ title }}
    </h1>
  </section>
</template>

<script>
export default{
    props: ['title']
}
</script>