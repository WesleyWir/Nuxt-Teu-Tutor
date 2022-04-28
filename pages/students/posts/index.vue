<template>
  <section class="container">
    <TemplateStudentsPostListSearch />
    <div class="row">
      <div class="fixed col-4 d-none d-md-block">
        <TemplateStudentsPostListFiltersDesktop />
      </div>
      <div class="col-md-8 col-sm-12">
        <TemplateStudentsPostList
          v-on:paginate="paginate()"
          :showPaginationBtn="showPaginationBtn"
        >
          <TemplateStudentsPostListEmpty v-if="!posts.length" />
          <TemplateStudentsPostListItem
            v-else
            v-for="post in posts"
            :key="post.id"
            :post="post"
            :showInternalBtns="false"
            :showAvatar="true"
            v-on:fetchPosts="$fetch"
            v-on:paginate="paginate()"
          />
        </TemplateStudentsPostList>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      pagination_meta: [],
      hiddenQueries: {
        limit: 2,
        page: 1,
      },
      queries: {},
      showPaginationBtn: true,
    };
  },
  async fetch() {
    this.resetPostsAndHiddenQueries();
    const { data } = await this.$axios.get(`/posts/students/`, {
      params: { ...this.hiddenQueries, ...this.$route.query },
    });
    this.posts = data.data;
    this.pagination_meta = data.meta;
  },
  watch: {
    posts() {
      if (this.hiddenQueries.page >= this.pagination_meta.last_page) {
        this.showPaginationBtn = false;
      }
    },
    "$route.query": "$fetch",
  },
  methods: {
    async paginate() {
      await this.increasePage();
      const { data } = await this.$axios.get(`/posts/students/`, {
        params: { ...this.hiddenQueries, ...this.$route.query },
      });
      for (const post of data.data) {
        this.posts.push(post);
      }
      this.pagination_meta = data.meta;
    },
    async increasePage(){
      this.hiddenQueries.page++;
    },
    resetPostsAndHiddenQueries() {
      this.hiddenQueries.page = 1;
      this.posts = [];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>