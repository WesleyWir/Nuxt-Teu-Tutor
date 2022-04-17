<template>
  <section class="container">
    <TemplateStudentsPostList>
      <TemplateStudentsPostListEmpty v-if="!posts.length" />
      <TemplateStudentsPostListItem
        v-else
        v-for="post in posts"
        v-bind:key="post.id"
        :post="post"
        :showInternalBtns="true"
        :showAvatar="false"
        v-on:fetchPosts="$fetch"
      />
    </TemplateStudentsPostList>
    <div class="fixed-bottom d-flex justify-content-end">
      <NuxtLink to="/students/in/posts/create" class="btn btn-success rounded-pill m-5">
        <i class="fa-solid fa-circle-plus"></i>
        <span class="fw-bold">Criar Post</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  layout: "internal",
  middleware: "auth",
  auth: "local_student",
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      `/posts/students/student/${this.$auth.user.id}?limit=1&page=2`
    );
    this.posts = data;
  },
  methods: {
    executeFetchPosts() {
      console.log("fetch post event");
      this.$fetch();
    },
  },
};
</script>

// <style lang="scss" scoped>
//   #posts-list {
//     .post-item {
//       width: 75%;
//       padding: 3%;
//       border-radius: 2ch;
//       border: 1px solid hsl(0 0% 83%);
//       .post-title {
//         font-size: 2rem;
//       }
//       .post-author {
//         .post-author-avatar {
//           margin: 10px 0;
//           margin-right: 20px;
//           width: 5%;
//           border-radius: 50%;
//         }
//       }
//       .post-content {
//         text-align: justify;
//         overflow: hidden;
//         display: -webkit-box;
//         -webkit-line-clamp: 3;
//         -webkit-box-orient: vertical;
//       }
//       .post-subject {
//         .post-subject-badge {
//           background-color: $dark-green-font-color;
//         }
//       }
//     }
//   }
// }
// #posts {
//   @include media-between(xs, md) {
//     #posts-list {
//       .post-item {
//         width: 100%;
//         .post-title {
//           font-size: 1.5rem;
//         }
//       }
//     }
//   }

//
</style>