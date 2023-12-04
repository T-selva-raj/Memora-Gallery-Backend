const fs = require('fs');
const { getDrive } = require('./drive.service.js');
const { Readable } = require('stream');

const uploadFile = async (fileData, parentId) => {
    
    const drive = await getDrive();
    return new Promise((resolve, reject) => {
        var fileMetaData = {
            name: fileData?.originalname,
            parents: [parentId]
            // parents: ["1B48HbXVUHDaLhuiBRXjAm3mtxaFRWi1B"]
        }
        drive.files.create({
            resource: fileMetaData,
            media: {
                body: Readable.from(Buffer.from(fileData.buffer)),
                mimeType: fileData?.mimetype
            },
            fields: 'id'
        }, function (error, file) {
            if (error) {
                console.log("error.........", error);
                return reject(error);
            }
            resolve(file);
        });
    });
};

module.exports.uploadFile = uploadFile;

// uploadFile().then(file => {
//     console.log('File uploaded:', file);
// }).catch(error => {
//     console.error('Error uploading file:', error);
// });

// { "folderId": "1nDayB2LysjDqaD7Jwim35dkTzGWmBoEZ", "folderName": "user_selva2428@@_1701437136866" }
