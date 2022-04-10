<template>
  <main class="container" id="student-profile">
    <section id="profile-image">
      <div id="div-profile-image">
        <label for="profile-input">
          <img
            src="/imgs/user/default-profile.png"
            alt="Profile Image"
            class="img"
          />
          <div class="overlay">
            <div class="content">
              <div class="icon"><i class="fas fa-camera"></i></div>
              <div class="text">
                <span><strong>Alterar Imagem</strong></span>
              </div>
            </div>
          </div>
        </label>
        <input id="profile-input" type="file" />
      </div>
    </section>

    <TemplateLoggedinStudentsProfileEditForm />

    
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#student-profile {
  #profile-image {
    display: flex;
    justify-content: center;
    #div-profile-image {
      width: 10%;
      position: relative;
      display: inline-block;
      input {
        display: none;
      }

      img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 5%;
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
}

@include media-between(xs, md) {
  // Phones, Large Phones and Tablets
  #student-profile {
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
}
</style>