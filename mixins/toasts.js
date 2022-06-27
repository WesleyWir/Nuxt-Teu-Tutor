export default {
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
    async showSuccessMessage(message = '', timer = 1750) {
        await this.swalToast({
            icon: "success",
            title: message,
            timer: timer
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
    async catchReponseError(response) {
        if (response.status === 500) {
            this.swalToast({ icon: 'error', title: 'Houve um erro interno :(' })
            return this.$router.push('/')
        }

        if (response.data.errors) {
            return this.showMultipleErrors(response.data.errors)
        }

        if (response.data.message) {
            return this.swalToast({ icon: 'error', title: response.data.message })
        }
    },
    async displayConfirmMessage(title, text = '', confirmedFn, icon = 'warning') {
        this.$swal.fire({
            title: title,
            text: text,
            icon: icon,
            showCancelButton: true,
            confirmButtonColor: '#198754',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await confirmedFn();
            }
        })
    },
    async fetchToastConfirmPassword(title = 'Confirme sua senha:', apiRoute = '/', afterMessage = '', type = 'POST') {
        return this.$swal.fire({
            title: title,
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Deletar",
            showLoaderOnConfirm: true,
            preConfirm: async (password) => {
                const passObj = {
                    password
                }
                try {
                    switch (type) {
                        case 'POST':
                            await this.$axios.post(apiRoute, { data: passObj })
                            break;
                        case 'DELETE':
                            await this.$axios.delete(apiRoute, { data: passObj })
                            break;
                        case 'PATCH':
                            await this.$axios.patch(apiRoute, { data: passObj })
                            break;
                    }

                } catch ({ response }) {
                    const errorMsg = Array.isArray(response.data.errors) ? response.data.errors[0].message : response.data.message
                    this.$swal.showValidationMessage(`Erro: ${errorMsg}`);
                }
            },
            allowOutsideClick: () => !this.$swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                this.showSuccessMessage(afterMessage);
            }
            return result.isConfirmed;
        })
    }
}
