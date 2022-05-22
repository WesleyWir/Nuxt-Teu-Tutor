import toasts from '~/mixins/toasts.js'
import images from '~/mixins/images.js'
import wysiwyg from '~/mixins/wysiwyg.js'

export default {
    methods:{
        ...toasts, 
        ...images,
        ...wysiwyg
    }
}