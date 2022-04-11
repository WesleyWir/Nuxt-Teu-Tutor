<template>
  <section id="posts-info">
    <div id="post-info-title" class="d-flex justify-content-center">
      <h2 class="h2"><strong>Posts</strong></h2>
    </div>
    <div id="posts">
      <div class="card text-center" v-for="post in posts" :key="post.id">
        <div class="card-header">{{ post.title }}</div>
        <div class="card-body">
          <h5 class="card-title" v-if="post.subject">
            <strong>Matéria: </strong>{{ post.subject.subject }}
          </h5>
          <p class="card-text">
            {{ post.content.replace(/<[^>]*>?/gm, "") }}
          </p>
          <NuxtLink
            :to="`/students/in/posts/${post.id}/edit/`"
            class="btn btn-primary"
            >Editar</NuxtLink
          >
          <button
            type="button"
            class="btn btn-danger"
            v-on:click="deletePost(post.id)"
          >
            Excluir
          </button>
        </div>
        <div class="card-footer text-muted">Criado em: {{post.created_at | format_mysql_date_and_hour}}</div>
      </div>
    </div>
    <div class="d-flex justify-content-around mt-3">
      <div id="see-all-posts">
        <NuxtLink to="/students/in/posts/" class="btn btn-primary fw-bold"
          ><u>Ver Todos</u></NuxtLink
        >
      </div>
      <div id="create-new-post">
        <NuxtLink to="/students/in/posts/create" class="btn btn-success fw-bold"
          ><i class="fa-solid fa-circle-plus"></i> Criar Post</NuxtLink
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        `/posts/students/student/${this.$auth.user.id}`
      );
      this.posts = data;
    } catch ({ response }) {
      console.error(response);
    }
  },
  methods: {
    deletePost(postId) {
      console.log(postId);
    },
  },
};
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