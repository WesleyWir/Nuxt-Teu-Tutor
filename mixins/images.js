export default {
    getImageFromBackend(imagePath, defaultImage = '') {
        if (!(imagePath)) {
            return defaultImage;
        }

        return `${process.env.serverImagesHost}${imagePath}`;
    }
}