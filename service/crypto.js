const cryptoJS = require('crypto-js');

const encrypt = async(plainText) => {
    let cipher = cryptoJS.AES.encrypt(plainText.toString(), CONFIG.encryption_key).toString();
    return cipher;
}
module.exports.encrypt = encrypt;

const decrypt = async (chipertext) => {
    let bytes = cryptoJS.AES.decrypt(chipertext.toString(), CONFIG.encryption_key);
    let plainText = bytes.toString(cryptoJS.enc.Utf8);
    return plainText;
}
module.exports.decrypt = decrypt;