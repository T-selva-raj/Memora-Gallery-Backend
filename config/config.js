require('dotenv').config();
CONFIG = {};
CONFIG.port = process.env.PORT;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_password = process.env.DB_PASSWORD;

CONFIG.encryption_key = "Selva@2428";
CONFIG.Jwt_encryption = "selva@2002";
CONFIG.Jwt_expiry = 1800;

// CONFIG.DRIVE_CREDENTIALS = {
//     type: "service_account",
//     project_id: "city-images-393604",
//     private_key_id: "49cb46a0af3e307ea36be7b213ce00591fce08ab",
//     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCpIwO1iLtDmsdA\n7ljS+6ibZSEri5LEzMAJ5jApRIbVVVttSbv5KErAFFkTqjOaCMc/7O7RNFIgeXeS\nB5pDyu8mKEDJGep0Y89EMkC9JwEiNzwtGjZvk7fNVdYBbTwlyfcPGPvVhgok+7az\nJt+6eRuFSLAJYE5XiNsZ49NvGIKAT5rLWIcSNIntrm41/QfEvVvLSep4ynHuCHQh\nK4nr3ElIs5mLaHpd1fASkyuQzgmvCHale+xetFv9XsCDoOxk9FdmPmiK675WEYom\nJ3ieqNGGCnO/RgeI9ZsHJS2N8TLqes6/Ns7FLyGNqgLh+ccQJSit/SIeaRV8u2aR\nDnWYNJ69AgMBAAECggEAJADSlM12w1TKrl0uJjcwtGdqEKlkxCSrik/oF5jBNN83\nF4P3EfoMM2gBcCiuVE8jDs4CJiFDjCsfE0QwB9dGYfJ2m/g6yqzGXYdu9XS8joqA\ncj9esBCbMwffBq24fHjJ8PpJ/TFLroSwZuFTBZArFgubgVtxQbvdm9y90KvAd8xh\ni6CcB62pfY/3KQ5TPwAqazobUrp4hKXRUZse3InvW1EngbaNS/Rt2l/0l2/RgZ+U\niVNdn+wWaZdTzg0ckmZP/mPpM9w7Z2AM+aRnsV71A7oaBxh1p98W0SV01sT9Zb3m\noQ0upfptWs8wvcWq0B93dQL5iNWRZi+fSkMbFaBw8QKBgQDXkDK7ku0DnMFho8rm\nGyUxL8hLqF97z0Z3Umyytm7vEblYVGO7MuIiim+A78z6dnk1VceHspoipI9lwXZF\nzlAr6J6FBB1wDG/IqXtmTdPwtVvNG/cSsrmxjxZRKk3RDd6+Z64M1u9twLqFTyYH\nsIfL2vwisKyRolkdYtrxmn2uhQKBgQDI3VF1D4L1i0zOv123wVUfvvDcWxsyLfIm\nN5VjI2Rq5mZe2oMZf5vTDxV9xdqR85+9fdcA3gV2ncRh/abPAWOKgaLLryafVMDO\nyaMCZpVcFPjKtin0/JwcjX7mlocOGKEC/iSKkF/+SADB68iIpY2Iov2l30BVEEUi\n6ZTCGoPw2QKBgHliUa8eRSjLlHmO6io5DvBrn7Y60cm+Jkf6ugrIgB9PM7dxjddU\nB9K7cZ6BakN/gzFtZDYddH4dfEIodplIXAzdqKXuc0UtO6UbCsnI+ZeKCG+vV6nH\nypkZoc+Cqt8VmGBPscq5HYoIBQAcWaXq2g0I+wHtyr8XVGcfy3pRLIShAoGASWeH\n8y2eADnN8ehBSXvfreBLiVvKDoZ37bt2Xmp6sg5M7vEP4+uceH8UrYf2nkvX3pn0\nTp7UhEqXj+/wW8n4JI/HfIQfqy5/35IUfjYa8zG+0eXMY3lFW7Hh5EaySFZ70Oor\nVG/6hKSvki6mdDl8Baj65Pk3O17cxStzb5PdD9ECgYA4p08+vXqyF5uIuj1EDWzW\ntrNV8h6rs2e+Tm4aWiP9quXuhM/xWOSw8gF5jhq88HYHTlIYqFQGISPmrtjs9nGM\nXqLeYAC5u8n0RBoZCoeHnNMxphKaXen40xrtVtGbZTVGW0zlDgZY4J6Q5OXZXeJH\nxvojPD7pGt+VKRS1fG3ZNg==\n-----END PRIVATE KEY-----\n",
//     client_email: "gallery-app@city-images-393604.iam.gserviceaccount.com",
//     client_id: "117381459202157963505",
//     auth_uri: "https://accounts.google.com/o/oauth2/auth",
//     token_uri: "https://oauth2.googleapis.com/token",
//     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//     client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/gallery-app%40city-images-393604.iam.gserviceaccount.com",
//     universe_domain: "googleapis.com"
// };
// CONFIG.folder = process.env.folder;

CONFIG.FIREBASE = {
    type: "service_account",
    project_id: "simple-da-mapla",
    private_key_id: "4514f787607decadd3548a8749262238ba873c1b",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDLcWOQA+FCrc2u\njb+41ZxjxMfA2gOhQPfzOb8cmaKjMppdnmdG604uRy8nkclD8dMtLLmRL7ztVOU9\nBZ/PzIHJkUprer9ntdR58sMOiBTjPPfVCi8AVpc9Q8+hyuI7ACC3VVP1S1Qf9hmJ\n3Pm+uOOcfdpc6TWgq+JM3fNW/phYeDrgTo+IAZ/J/uXuDGJ4rvcQrfItB3a62d5S\nc4FwHWFkssFWMifKiMRiPucwf8CgBdEjhlfRkOnUkUY0JNvbzWicKwgoJE2RkiH9\nigiDvsFS05dpSwjKBQaFIaCtPKhobvsE/LHH9NERwWgKwNARR/P1kqsgx/93SOiQ\n1eVyUtVrAgMBAAECggEAE1N0g3l1jFGvE0uQkJds4XwPrxNG0FUNTi6zJ/K0T3p+\nzYaUWwP+tki5gwccrnaqJUV1ZK8Qlx8Uc8U1VuvKJy1v0LalY3hoyc407LbNUn+N\nL3tl1vYNgfAPflgj64+UjAtFYYJEEzvcAIuxsdt7ISJCJxyu+ny5j6xvRwQCfDeB\nd4M7laabQ5KAbJM5xG/ii0dUkhE0p5D+feMT23hiCYxK8fTV/SrzsWly795SQz0r\nqt5NR4F/xEzmVxEluZ7EWpZPGo7gGcdqchrKyKyiz27lA9KvgBW1j7J7Puyqvm0B\nHumfWhQNdXkI4mdUc0NskGm+F9jWDiFzoDyvQb3NMQKBgQD5BOVizw3loCChxsVN\nl0uKzn40WaM7kIagyGglb3KsIX4V/G9zjl1JHpNOt9GCVys8ri4w54JgxNBiLLS2\nqE7UnwUIhl3qabeA+Ig38ZL3rgy7+OudxkIXQVCD7CFeXDwZhsjTXWvU1UaIKOSz\nZjfjbDFU3XUxLB3FJfbwTjJ8MwKBgQDRJWl1Yu9Gqd76p6tDcTad0LM/8Ne8NaXL\nHuAuGpAHFKTrrfvH7nEMeMqngiCs1V7sA+Gtz093beQeNyGLw6QptM38ori42bfj\nEH9KWXoBbVTlHSFsTIIMR2uBxQtEG9y2NeyOQgrnF7ZHRH+D+oaQ65b92CBT/XjI\neP1hPfYJ6QKBgAb56CM4gb8pGUDu/KAL2QXuewKkcDo+9kaS1rgVwzSnS4z6IXUv\nS9W8kYvnAmuQXZm5l3mvQqvLV7soXXewh2TVf6KZgRAMHiPy0n4eumtN6PVrJ86n\nuzpDjinj95tZIiXk7MNfHqI7x1oRKzcLag1o/ojOG3ZhMgRP5/cbebaZAoGAHEcf\nrCR1T6uWH3PeHx9GkC3wnnuU37itMvp4uyMSSDLNXaRHf6/IjzQhymY4vsWWsPiR\nYeu+xdoQ1tkDax9Hqe/tTfQ+X5foWgYX/9h7O4gpy1SV+Uua5cgeTAx1Sn8t52EB\nG/bn/HjjR12GlDSiTyPbZXT8Yf7KfuiE8cnr40kCgYBG27tI3U/LfzCsROhUCl59\n/dsdu0v2gcU9Ja88DSABEfNfVe6PiKt3dkWLtzWv0/zedogk3L/w99L2JcQ7yaKy\nr/S5b688KaffJyUarSQsGIsXJHhKTp9CoCs5Y3N47+9QK+iBsdZi650IGyzcg0lE\nknS4wEoQdU4PCp7R/4JC/g==\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-dgm43@simple-da-mapla.iam.gserviceaccount.com",
    client_id: "100826031019471358464",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dgm43%40simple-da-mapla.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
};
CONFIG.STORAGE_BUCKET = "gs://simple-da-mapla.appspot.com";