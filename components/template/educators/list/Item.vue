<template>
  <div class="educators-list-item">
    <div class="educators-list-item-img">
      <img
        class="img-fluid"
        src="/imgs/user/default-profile.png"
        alt="Imagem Educador"
      />
    </div>

    <div class="educators-list-item-info">
      <div class="educators-list-item-info-subj-name-rating">
        <div class="educators-list-item-info-subj-name">
          <a
            href="./educators-list.php?materia=materia"
            class="educators-list-item-info-subj"
            >Matéria</a
          >
          <a
            href="./educator-single.php"
            class="h2 educators-list-item-info-name"
            >Nome do Educador</a
          >
        </div>

        <div class="educators-list-item-info-rating">
          <span class="educators-list-item-info-rating-rate">5</span>
          <i class="fas fa-star educators-list-item-info-rating-star"></i>
        </div>
      </div>
      <div class="educators-list-item-lec-info">
        <span class="educators-list-item-lec-info-value">R$ 20 /h</span>
        <span class="educators-list-item-lec-info-address">
          Rua localização X, Guarapuava, PR
        </span>
      </div>

      <div class="educators-list-item-single-btn">
        <a href="./educator-single.php" class="btn">Ver Perfil</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['educator']
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/components/educators/list/item.scss";
</style>