<template>
  <div class="ms-2">
    <img :src="avatar" alt="Profile Image" class="rounded-circle" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: "/imgs/user/default-profile.png",
    };
  },
  async fetch() {
    this.avatar = await this.getImageFromBackend(
      this.$auth.user.avatar,
      "/imgs/user/default-profile.png"
    );
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 7ch;
  object-fit: cover;
  height: 6ch;
}
</style>