import toasts from '~/mixins/toasts.js'
import images from '~/mixins/images.js'

export default {
    methods:{
        ...toasts, 
        ...images
    }
}