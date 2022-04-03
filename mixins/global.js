export default {
    methods: {
        swalToast(args = {}) {
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
            this.$swal.fire(params)
        },
        showMultipleErrors(errors = []) {
            if (!(errors.length)) {
                return;
            }
            const message = document.createElement('ul')

            for (const error of errors) {
                let liMessage = document.createElement('li')
                liMessage.innerText = error.message
                message.appendChild(liMessage)
            }

            return this.swalToast({
                icon: "error",
                title: "Erro",
                html: message,
            })
        }
    }
}
