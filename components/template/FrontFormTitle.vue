<template>
  <section
    class="d-flex justify-content-center mt-3 mb-1"
    id="im-title"
  >
    <h1 class="h1 fw-bold">
      <i :class="['fa-solid', icon]"></i>
      {{ title }}
    </h1>
  </section>
</template>

<script>
export default{
    props: ['title', 'icon']
}
</script>