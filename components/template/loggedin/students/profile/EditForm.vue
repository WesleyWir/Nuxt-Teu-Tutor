<template>
  <section id="profile-info">
    <div id="profile-info-form">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Nome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="name"
            placeholder="Nome"
            disabled
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div class="buttons mt-3">
          <button type="submit" class="btn btn-primary">Editar</button>
          <button type="submit" class="btn btn-success">Salvar</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#profile-info {
  //   position: relative;
  //   top: -20px;
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;

  #profile-info-form {
    form {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-evenly;
      margin: 0 auto;
      width: 50%;
    }
  }
}
</style>