<template>
  <div class="post-author d-flex align-items-center">
    <img
      :src="
        getImageFromBackend(student.avatar, '/imgs/user/default-profile.png')
      "
      :alt="'Avatar ' + student.name"
      class="img post-author-avatar rounded-circle"
    />
    <p class="fw-light">{{ student.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["student"],
};
</script>

<style lang="scss" scoped>
.post-author {
  .post-author-avatar {
    margin: 10px 0;
    margin-right: 20px;
    width: 5ch;
    height: 5ch;
    object-fit: cover;
  }
}
</style>