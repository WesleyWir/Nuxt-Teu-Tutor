export default {
    async handleWysiwygImage(file, Editor, cursorLocation, resetUploader) {
        var formData = new FormData();
        formData.append("file", file);
        try {
            const { data } = await this.$axios.post('/editor/', formData)
            const url = this.getImageFromBackend(data)
            Editor.insertEmbed(cursorLocation, 'image', url);
            resetUploader();
        } catch ({ response }) {
            await this.catchReponseError(response)
        }
    }
}