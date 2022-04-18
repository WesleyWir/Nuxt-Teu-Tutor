<template>
  <section class="container">
    <TemplateStudentsPostList v-on:paginate="paginate()" :showPaginationBtn="showPaginationBtn">
      <TemplateStudentsPostListEmpty v-if="!posts.length" />
      <TemplateStudentsPostListItem
        v-else
        v-for="post in posts"
        v-bind:key="post.id"
        :post="post"
        :showInternalBtns="true"
        :showAvatar="false"
        v-on:fetchPosts="$fetch"
        v-on:paginate="paginate()"
      />
    </TemplateStudentsPostList>
    <div class="fixed-bottom w-25 float-end mx-auto me-3 mb-3">
      <div class="float-end me-3 mb-3">
        <NuxtLink
          to="/students/in/posts/create"
          class="btn btn-success rounded-pill m-5"
        >
          <i class="fa-solid fa-circle-plus"></i>
          <span class="fw-bold">Criar Post</span>
        </NuxtLink>
      </div>
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
      pagination_meta: [],
      queries: {
        limit: 2,
        page: 1,
      },
      showPaginationBtn: true,
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(
      `/posts/students/student/${this.$auth.user.id}`,
      { params: this.queries }
    );
    for (const d of data.data) {
      this.posts.push(d);
    }
    this.pagination_meta = data.meta;
  },
  watch: {
    posts() {
      if(this.queries.page >= this.pagination_meta.last_page){
        this.showPaginationBtn = false;
      }
    }
  },
  methods: {
    executeFetchPosts() {
      this.$fetch();
    },
    paginate() {
      this.queries.page++;
      this.$fetch();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>