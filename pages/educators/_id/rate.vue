<template>
  <main id="create-post" class="container">
    <section id="create-post-title" class="d-flex justify-content-center">
      <div class="title"><h2 class="h2 fw-bold">Avalie a aula de {{ educator.name }}</h2></div>
    </section>
    <section id="create-post-form">
      <div id="profile-info-form">
        <form @submit.stop.prevent="onSubmit()">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="form.rate"
              value='0'
              name="flexRadioDefault"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              0
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="form.rate"
              value='1'
              name="flexRadioDefault"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              1
            </label>
            <i class="fas fa-star fa-xs"></i>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="form.rate"
              value='2'
              name="flexRadioDefault"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              2
            </label>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="form.rate"
              value='3'
              name="flexRadioDefault"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              3
            </label>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="form.rate"
              value='4'
              name="flexRadioDefault"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              4
            </label>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              v-model="form.rate"
              value='5'
              name="flexRadioDefault"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              5
            </label>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
            <i class="fas fa-star fa-xs"></i>
          </div>
          <div class="form-group mt-3">
            <label for="comment-textarea">Comentário</label>
            <textarea
              class="form-control"
              rows="3"
              name="comment-textarea"
              v-model="form.comment"
            ></textarea>
          </div>
          <div class="buttons mt-3">
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="$router.go(-1)"
            >
              <strong>Deletar Avaliação</strong>
            </button>
            <button type="submit" class="btn btn-success">
              <strong>Publicar</strong>
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>


<script>
export default {
  data() {
    return {
      form: {
        rate: 2,
        comment: "",
      },
    };
  },
  async asyncData({ $axios, route }) {
    try {
      const id = route.params.id;
      const { data } = await $axios.get(`/educators/${id}`);
      const educator = data;
      return { educator };
    } catch (error) {
      error();
    }
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get(
        `/ratings/students/has-class/${this.educator.id}`
      );

      if (!data) {
        return await this.$router.push(`/educators/${this.educator.id}/`);
      }
    } catch ({ response }) {
      console.error(response);
    }
  },
  methods: {
    async onSubmit(){
      try {
      const { data } = await this.$axios.post(`/ratings/students/${this.educator.id}`,  this.form);
      await this.showSuccessMessage("Avaliação enviada!", 1500);
      return await this.$router.push(`/educators/${this.educator.id}/`);
    } catch (error) {
      console.error(error)
    }
    }
  }
};
</script>

<style lang="scss" scoped>
#create-post-form {
  border: solid $default-background-color 10px;
  border-radius: 10px;
  background-color: $default-background-color;
  padding: 20px;
  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 50%;

    .buttons {
      display: flex;
      justify-content: space-around;
    }
  }
}

@include media-between(xs, md) {
  #create-post-form {
    form {
      width: 100%;
    }
  }
}
</style>