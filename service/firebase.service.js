
const admin = require('firebase-admin');




admin.initializeApp({
    credential: admin.credential.cert(CONFIG.FIREBASE),
    storageBucket: CONFIG.STORAGE_BUCKET
});
const bucket = admin.storage().bucket();


const uploadImageToFireBase = async (files,data) => {
    try {
        let success = 0, err = [];
        const folderName = data?.folderName ? data.folderName : "default";
        for (let file of files) {
            const filename = Date.now() + file.originalname;
            const fileUpload = bucket.file(`${folderName}/` + filename);

            const stream = fileUpload.createWriteStream({
                metadata: {
                    contentType: file.mimetype,
                },
            });
            stream.end(file.buffer);
            stream.on('finish', () => {
                success += 1;
            });
            stream.on('error', (error) => {
                console.error(error);
                err.push[filename];
            });
        }
        if (success == 0) return true;
        if (err > 0) throw new Error ( "Some images Not saved !");
    } catch (error) {
        console.error(error);
        throw new Error( "Error", "Internal Server Error");
    }
}


module.exports = { bucket, uploadImageToFireBase };

