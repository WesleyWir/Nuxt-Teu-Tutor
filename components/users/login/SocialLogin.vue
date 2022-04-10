<template>
  <div
    class="
      col-12
      mb-5
      d-flex
      flex-nowrap
      align-content-start
      justify-content-center
      align-items-stretch
    "
    id="social-login-login"
  >
    <div id="google-login">
      <NuxtLink
        to="#login-google"
        class="btn btn-lg"
        id="google-login-btn"
      >
        <i class="fab fa-google"></i>
        <strong>Google</strong>
      </NuxtLink>
    </div>

    <div id="facebook-login">
      <NuxtLink
        to="#login-facebook"
        class="btn btn-lg"
        id="facebook-login-btn"
      >
        <i class="fab fa-facebook"></i>
        <strong>Facebook</strong>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#social-login-login {
  #google-login {
    margin-right: 3%;

    #google-login-btn {
      color: #fff;
      background-color: $btn-google-bg-color;

      &:hover {
        background-color: darken($btn-google-bg-color, 4%);
      }
    }
  }

  #facebook-login {
    #facebook-login-btn {
      color: #fff;
      background-color: $btn-facebook-bg-color;

      &:hover {
        background-color: darken($btn-facebook-bg-color, 4%);
      }
    }
  }
}
</style>