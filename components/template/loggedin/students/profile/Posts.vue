<template>
  <section id="posts-info">
    <div id="post-info-title" class="d-flex justify-content-center">
      <h2 class="h2"><strong>Posts</strong></h2>
    </div>
    <div id="posts">
      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">Editar</a>
          <a href="#" class="btn btn-danger">Excluir</a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>

      <div class="card text-center">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">Editar</a>
          <a href="#" class="btn btn-danger">Excluir</a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-3">
        <button class="btn btn-primary fw-bold"><u>Ver Todos</u></button>
        <NuxtLink to="/students/in/post/create" class="btn btn-success fw-bold"><i class="fa-solid fa-circle-plus"></i> Criar Post</NuxtLink>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#posts-info {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  margin-top: 2%;
}
</style>