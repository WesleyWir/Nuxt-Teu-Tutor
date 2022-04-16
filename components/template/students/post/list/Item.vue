<template>
  <div class="post-item mb-2 row">
    <div class="post-title col-12">
      <NuxtLink :to="`/students/posts/${post.id}`" class="fw-bold"
        >{{ post.title }} |
        {{ post.created_at | format_mysql_date_and_hour }}</NuxtLink
      >
    </div>
    <TemplateStudentsPostListAuthor v-if="showAvatar" />
    <div class="post-content mt-4 col-12" v-html="post.content"></div>
    <div class="post-subject mt-3 col-8">
      <NuxtLink
        :to="{ path: '/students/posts/', query: { subject: post.subject.id } }"
        class="text-decoration-none badge post-subject-badge"
        >{{ post.subject.subject }}</NuxtLink
      >
    </div>
    <TemplateStudentsPostListInternalButtons
      v-if="showInternalBtns"
      :post_id="post.id"
      v-on:delete="deleteEvent()"
    />
  </div>
</template>

<script>
export default {
  props: ["post", "showInternalBtns", "showAvatar"],
  methods: {
    deleteEvent() {
      try {
        this.displayConfirmMessage(
          "Você quer realmente deletar o post?",
          "",
          async () => {
            await this.$axios.delete(`/posts/students/${this.post.id}`);
            this.showSuccessMessage("Post deletado com sucesso!");
            this.emitFetchPosts();
          }
        );
      } catch ({ response }) {
        this.catchReponseError(response);
      }
    },
    emitFetchPosts(){
      this.$emit('fetchPosts')
    }
  },
};
</script>

<style lang="scss" scoped>
.post-item {
  width: 75%;
  padding: 3%;
  border-radius: 2ch;
  border: 1px solid hsl(0 0% 83%);
  .post-title {
    font-size: 2rem;
  }

  .post-content {
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .post-subject {
    .post-subject-badge {
      color: $color-font-white;
      background-color: $dark-green-font-color;
      &:hover {
        background-color: darken($dark-green-font-color, 10);
      }
    }
  }
}
</style>