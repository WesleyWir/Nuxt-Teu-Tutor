<template>
  <section class="container">
    <TemplateStudentsPostListSearch
      v-on:eventSearch="executeEventSearch($event)"
    />
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
            v-bind:key="post.id"
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
      queries: {
        limit: 2,
        page: 1,
      },
      showPaginationBtn: true,
    };
  },
  async fetch() {
    const { data } = await this.$axios.get(`/posts/students/`, {
      params: this.queries,
    });
    for (const post of data.data) {
      this.posts.push(post);
    }
    this.pagination_meta = data.meta;
  },
  watch: {
    posts() {
      if (this.queries.page >= this.pagination_meta.last_page) {
        this.showPaginationBtn = false;
      }
    },
    "$route.query": "$fetch",
  },
  created(){
    this.queries = { ...this.queries, ...this.$route.query }; 
  },
  methods: {
    paginate() {
      this.queries.page++;
      this.updateQueries()
    },
    executeEventSearch(search) {
      this.queries.search = search;
      this.resetPostsAndQueries()
      this.updateQueries()
    },
    updateQueries() {
      this.$router.replace({
        path: this.$route.path,
        query: this.queries,
      });
    },
    resetPostsAndQueries(){
      this.queries.page = 1
      this.posts = []
    }
  },
};
</script>

<style lang="scss" scoped>
</style>