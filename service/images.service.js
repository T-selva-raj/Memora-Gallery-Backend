
const Images = require('../models').Images;



const createUserImage = async (images, userId) => {
    try {
        let image;
        for await (let imageData of images) {
            image = await Images.create({
                imageId: imageData?.id,
                userID: userId,
                albumId: imageData?.albumId ? imageData.albumId : null
            });
        };
        if (image) return true;
    } catch (e) {
        throw new Error(e);
    };
}

module.exports.createUserImage = createUserImage;