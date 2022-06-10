<template>
  <div id="ratings">
    <div class="title">
      <h2 class="h2 fw-bold">Avaliações</h2>
    </div>
    <div class="items">
      <div class="item mb-3 row d-flex flex-row">
        <div class="avatar col-4 d-flex justify-content-center">
          <img
            src="/imgs/user/default-profile.png"
            class="rounded-circle img-thumbnail w-50"
            alt=""
          />
        </div>
        <div class="comments col-6">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            iusto labore sapiente placeat ullam tempore. Sit voluptatem fugit
            illo fugiat laborum ea quae numquam quas quibusdam saepe, alias
            ullam cum.
          </p>
          <div class="rate">
            <h2 class="h2 fw-bold">5</h2>
            <i class="fas fa-star fa-2x rating-star"></i>
          </div>
        </div>
      </div>

      <div class="item mb-3 row d-flex flex-row-reverse">
        <div class="avatar col-4 d-flex justify-content-center">
          <img
            src="/imgs/user/default-profile.png"
            class="rounded-circle img-thumbnail w-50"
            alt=""
          />
        </div>
        <div class="comments col-6">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            iusto labore sapiente placeat ullam tempore. Sit voluptatem fugit
            illo fugiat laborum ea quae numquam quas quibusdam saepe, alias
            ullam cum.
          </p>
          <div class="rate">
            <h2 class="h2 fw-bold">5</h2>
            <i class="fas fa-star fa-2x rating-star"></i>
          </div>
        </div>
      </div>

      <div class="item mb-3 row d-flex flex-row">
        <div class="avatar col-4 d-flex justify-content-center">
          <img
            src="/imgs/user/default-profile.png"
            class="rounded-circle img-thumbnail w-50"
            alt=""
          />
        </div>
        <div class="comments col-6">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            iusto labore sapiente placeat ullam tempore. Sit voluptatem fugit
            illo fugiat laborum ea quae numquam quas quibusdam saepe, alias
            ullam cum.
          </p>
          <div class="rate">
            <h2 class="h2 fw-bold">5</h2>
            <i class="fas fa-star fa-2x rating-star"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#ratings {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .items {
    padding: 2% 16%;
    .item {
      background-color: whitesmoke;
      border: solid 30px whitesmoke;
      border-radius: 20px;
      .comments {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
      }
      .rate {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        .rating-star {
          color: $star-rate-color;
        }
      }
    }
  }
}
</style>