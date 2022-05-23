<template>
  <div class="ms-2">
    <img :src="getImageFromBackend(avatar, '/imgs/user/default-profile.png')" alt="Profile Image" class="rounded-circle" />
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: mapState({
    avatar: state => state.auth.user.avatar
  })
};
</script>

<style lang="scss" scoped>
img {
  width: 6ch;
  object-fit: cover;
  height: 6ch;
}
</style>