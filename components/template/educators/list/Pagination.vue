<template>
  <div class="pagination-numeric mt-2 mb-2">
    <a title="Anterior" class="pagination-prev" href="#"
      ><i class="fas fa-caret-square-left"></i
    ></a>
    <a :title="`Página ${pagination_meta.current_page-1}`" class="pagination-item" v-if="pagination_meta.current_page-2 >= pagination_meta.first_page" href="#">{{ pagination_meta.current_page-2 }}</a>
    <a :title="`Página ${pagination_meta.current_page-1}`" class="pagination-item" v-if="pagination_meta.current_page-1 >= pagination_meta.first_page" href="#">{{ pagination_meta.current_page-1 }}</a>
    <span class="pagination-dots">...</span>
    <a title="Página 3" class="pagination-item" href="#">{{ pagination_meta.current_page }}</a>
    <span class="pagination-dots">...</span>
    <a :title="`Página ${pagination_meta.current_page+1}`" class="pagination-item" v-if="pagination_meta.current_page+1 <= pagination_meta.last_page" href="#">{{ pagination_meta.current_page+1 }}</a>
    <a :title="`Página ${pagination_meta.current_page+2}`" class="pagination-item" v-if="pagination_meta.current_page+2 <= pagination_meta.last_page" href="#">{{ pagination_meta.current_page+2 }}</a>
    <a title="Próximo" class="pagination-next" href="#"
      ><i class="fas fa-caret-square-right"></i
    ></a>
  </div>
</template>

<script>
export default {
    props: ['pagination_meta'],
    mounted(){
        console.log(this.pagination_meta)
    }
};
</script>

<style lang="scss" scoped>
.pagination-numeric{
    font-size: x-large;
}
</style>