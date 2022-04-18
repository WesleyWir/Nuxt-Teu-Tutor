<template>
  <section id="posts-info">
    <div id="post-info-title" class="d-flex justify-content-center">
      <h2 class="h2"><strong>Posts</strong></h2>
    </div>
    <div
      id="posts"
      class="d-flex justify-content-center flex-column align-items-center"
      v-on:scroll="scrollPosts($event)"
    >
      <div class="card text-center w-75" v-for="post in posts" :key="post.id">
        <div class="card-header link-primary">{{ post.title }}</div>
        <div class="card-body">
          <h5 class="card-title" v-if="post.subject">
            <strong>Matéria: </strong>{{ post.subject.subject }}
          </h5>
          <p class="card-text" id="post-content">
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
        <div class="card-footer text-muted">
          Criado em: {{ post.created_at | format_mysql_date_and_hour }}
        </div>
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
      posts_queries: {
        limit: 3,
      },
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
      `/posts/students/student/${this.$auth.user.id}`,
      { params: this.queries }
    );
      this.posts = data;
    } catch ({ response }) {
      catchReponseError(response);
    }
  },
  methods: {
    async deletePost(postId) {
      try {
        this.displayConfirmMessage(
          "Você quer realmente deletar o post?",
          "",
          async () => {
            await this.$axios.delete(`/posts/students/${postId}`);
            this.showSuccessMessage("Post deletado com sucesso!");
            this.$fetch();
          }
        );
      } catch ({ response }) {
        this.catchReponseError(response);
      }
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
  #post-content {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>