export default {
    methods: {
        async swalToast(args = {}) {
            const defaults = {
                icon: 'info',
                title: '',
                toast: true,
                position: 'bottom',
                grouw: 'fullscreen',
                showConfirmButton: false,
                showCloseButton: true,
                timer: 8000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            }
            const params = {
                ...defaults, ...args
            }
            await this.$swal.fire(params)
        },
        async showSuccessMessage(message = ''){
            await this.swalToast({
                icon: "success",
                title: message,
            })
        },
        async showMultipleErrors(errors = []) {
            if (!(errors.length)) {
                return;
            }

            for (const error of errors) {
                await this.swalToast({
                    icon: "error",
                    title: error.message,
                })
            }
        },
        async catchReponseError(response){
            if(response.status === 500){
                this.swalToast({ icon: 'error', title: 'Houve um erro interno :('})
                return this.$router.push('/')
            }

            if(response.data.errors){
                return this.showMultipleErrors(response.data.errors)
            }

            if(response.data.message){
                return this.swalToast({ icon: 'error', title: response.data.message})
            }
        }
    }
}
