<template>
  <section id="post" class="container">
    <div class="row d-flex justify-content-center">
      <div id="post-date" class="col-6">
        <time
          ><strong>{{ post.created_at | format_date_show_month }}</strong></time
        >
      </div>
      <div id="post-author" class="col-6">
        <div id="post-author-name">
          <h2>{{ post.student.name }}</h2>
        </div>
        <div id="post-author-avatar" class="ms-4">
          <img
            :src="
              getImageFromBackend(
                post.student.avatar,
                '/imgs/user/default-profile.png'
              )
            "
            :alt="`Avatar ${post.student.name}`"
            class="rounded-circle"
          />
        </div>
      </div>
      <div id="post-content" class="col-12">
        <div v-html="post.content" class="content"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios, route, error }) {
    try {
      const { data } = await $axios.get(`/posts/students/${route.params.id}/`);
      const post = data;
      console.log(post);
      return { post };
    } catch (error) {
      error();
    }
  },
};
</script>

<style lang="scss" scoped>
#post {
  #post-date {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #post-author {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    #post-author-avatar {
      img {
        width: 6ch;
        object-fit: cover;
        height: 6ch;
      }
    }
  }
  #post-content {
    background-color: $light-gray-background-color;
    border: solid 2px $light-gray-background-color;
    border-radius: 10px;
    padding: 5% 15%;
    .content{
        line-height: 1.6;
        text-align: justify;
    }
  }
}
</style>