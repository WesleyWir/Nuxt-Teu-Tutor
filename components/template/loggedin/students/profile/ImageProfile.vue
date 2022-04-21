<template>
  <section id="profile-image">
    <div id="div-profile-image">
      <label for="profile-input">
        <img :src="avatar" alt="Profile Image" class="img-thumbnail" />
        <div class="overlay">
          <div class="content">
            <div class="icon"><i class="fas fa-camera"></i></div>
            <div class="text">
              <span><strong>Alterar Imagem</strong></span>
            </div>
          </div>
        </div>
      </label>
      <input
        id="profile-input"
        type="file"
        v-on:change="onFileUpload($event)"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      avatar: "/imgs/user/default-profile.png",
    };
  },
  async fetch() {
    this.avatar = await this.getImageFromBackend(
      this.$auth.user.avatar,
      "/imgs/user/default-profile.png"
    );
  },
  methods: {
    async onFileUpload(event) {
      var formData = new FormData();
      formData.append("avatar", event.target.files[0]);
      try {
        const { data } = await this.$axios.post("/avatar/students/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        this.showSuccessMessage("Imagem enviada com sucesso!", "top");
        await this.$auth.fetchUser();
        this.$fetch();
      } catch ({ response }) {
        await this.catchReponseError(response);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#profile-image {
  display: flex;
  justify-content: center;
  #div-profile-image {
    min-height: 100%;
    width: 15%;
    position: relative;
    display: inline-block;
    input {
      display: none;
    }

    img {
      width: 100%;
      height: 200px;
      display: block;
      border-radius: 5%;
      width: 190px;
      height: 190px;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
    }
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: auto;
      width: 100%;
      opacity: 0;
      transition: 0.5s ease;
      background-color: rgb(0, 0, 0, 0.5);
      border-radius: 5%;

      .content {
        font-size: 24px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        .text {
          text-align: center;
        }
      }
    }
    &:hover {
      label {
        .overlay {
          opacity: 1;
        }
      }
    }
  }
}

@include media-between(xs, md) {
  // Phones, Large Phones and Tablets
  #profile-image {
    #div-profile-image {
      width: 50%;

      .overlay {
        .content {
          font-size: 18px;
        }
      }
    }
  }
}
</style>