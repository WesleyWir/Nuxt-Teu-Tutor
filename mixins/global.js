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
        }
    }
}
