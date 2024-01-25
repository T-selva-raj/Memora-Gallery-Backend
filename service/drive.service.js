// const fs = require('fs');
// const { google } = require('googleapis');

// const apikeys = CONFIG.DRIVE_CREDENTIALS;
// const SCOPE = ['https://www.googleapis.com/auth/drive'];

// const authorize=async()=> {
//     const jwtClient = new google.auth.JWT(
//         apikeys.client_email,
//         null,
//         apikeys.private_key,
//         SCOPE
//     );
//     await jwtClient.authorize();
//     return jwtClient;
// }
// module.exports.authorize = authorize;

// const getDrive = async () => {
//     const authClient = await authorize();
//     return google.drive({
//         version: 'v3',
//         auth: authClient,
//     });
// };
// module.exports.getDrive = getDrive;
