<template>
  <div @click="togglePasswordView($event)">
    <font-awesome-icon class="'fa-solid" :icon="iconClass" id="toggle-show-hidden-password"></font-awesome-icon>
  </div>
</template>

<script>
export default {
    props: ['inputName'],
    data(){
        return{
            iconClass: 'fa-eye'
        }
    },
    methods: {
        togglePasswordView(e) {
            let passwordInput = document.getElementsByName(this.inputName)[0];
            if(!passwordInput) return;
            if(passwordInput.getAttribute("type") === "password"){
                passwordInput.setAttribute("type", "text");
                return this.iconClass = "fa-eye-slash";
            }
            passwordInput.setAttribute("type", "password");
            return this.iconClass = "fa-eye";
        },
    },
};
</script>

<style scoped>
#toggle-show-hidden-password {
  pointer-events: all;
  margin-left: 0;
  cursor: pointer;
  position: relative;
  float: right;
  margin-right: 14px;
  margin-top: -25px;
}
</style>