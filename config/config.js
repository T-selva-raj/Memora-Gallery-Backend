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
CONFIG.Jwt_expiry = 180;

CONFIG.DRIVE_CREDENTIALS = {
    type: "service_account",
    project_id: "city-images-393604",
    private_key_id: "49cb46a0af3e307ea36be7b213ce00591fce08ab",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCpIwO1iLtDmsdA\n7ljS+6ibZSEri5LEzMAJ5jApRIbVVVttSbv5KErAFFkTqjOaCMc/7O7RNFIgeXeS\nB5pDyu8mKEDJGep0Y89EMkC9JwEiNzwtGjZvk7fNVdYBbTwlyfcPGPvVhgok+7az\nJt+6eRuFSLAJYE5XiNsZ49NvGIKAT5rLWIcSNIntrm41/QfEvVvLSep4ynHuCHQh\nK4nr3ElIs5mLaHpd1fASkyuQzgmvCHale+xetFv9XsCDoOxk9FdmPmiK675WEYom\nJ3ieqNGGCnO/RgeI9ZsHJS2N8TLqes6/Ns7FLyGNqgLh+ccQJSit/SIeaRV8u2aR\nDnWYNJ69AgMBAAECggEAJADSlM12w1TKrl0uJjcwtGdqEKlkxCSrik/oF5jBNN83\nF4P3EfoMM2gBcCiuVE8jDs4CJiFDjCsfE0QwB9dGYfJ2m/g6yqzGXYdu9XS8joqA\ncj9esBCbMwffBq24fHjJ8PpJ/TFLroSwZuFTBZArFgubgVtxQbvdm9y90KvAd8xh\ni6CcB62pfY/3KQ5TPwAqazobUrp4hKXRUZse3InvW1EngbaNS/Rt2l/0l2/RgZ+U\niVNdn+wWaZdTzg0ckmZP/mPpM9w7Z2AM+aRnsV71A7oaBxh1p98W0SV01sT9Zb3m\noQ0upfptWs8wvcWq0B93dQL5iNWRZi+fSkMbFaBw8QKBgQDXkDK7ku0DnMFho8rm\nGyUxL8hLqF97z0Z3Umyytm7vEblYVGO7MuIiim+A78z6dnk1VceHspoipI9lwXZF\nzlAr6J6FBB1wDG/IqXtmTdPwtVvNG/cSsrmxjxZRKk3RDd6+Z64M1u9twLqFTyYH\nsIfL2vwisKyRolkdYtrxmn2uhQKBgQDI3VF1D4L1i0zOv123wVUfvvDcWxsyLfIm\nN5VjI2Rq5mZe2oMZf5vTDxV9xdqR85+9fdcA3gV2ncRh/abPAWOKgaLLryafVMDO\nyaMCZpVcFPjKtin0/JwcjX7mlocOGKEC/iSKkF/+SADB68iIpY2Iov2l30BVEEUi\n6ZTCGoPw2QKBgHliUa8eRSjLlHmO6io5DvBrn7Y60cm+Jkf6ugrIgB9PM7dxjddU\nB9K7cZ6BakN/gzFtZDYddH4dfEIodplIXAzdqKXuc0UtO6UbCsnI+ZeKCG+vV6nH\nypkZoc+Cqt8VmGBPscq5HYoIBQAcWaXq2g0I+wHtyr8XVGcfy3pRLIShAoGASWeH\n8y2eADnN8ehBSXvfreBLiVvKDoZ37bt2Xmp6sg5M7vEP4+uceH8UrYf2nkvX3pn0\nTp7UhEqXj+/wW8n4JI/HfIQfqy5/35IUfjYa8zG+0eXMY3lFW7Hh5EaySFZ70Oor\nVG/6hKSvki6mdDl8Baj65Pk3O17cxStzb5PdD9ECgYA4p08+vXqyF5uIuj1EDWzW\ntrNV8h6rs2e+Tm4aWiP9quXuhM/xWOSw8gF5jhq88HYHTlIYqFQGISPmrtjs9nGM\nXqLeYAC5u8n0RBoZCoeHnNMxphKaXen40xrtVtGbZTVGW0zlDgZY4J6Q5OXZXeJH\nxvojPD7pGt+VKRS1fG3ZNg==\n-----END PRIVATE KEY-----\n",
    client_email: "gallery-app@city-images-393604.iam.gserviceaccount.com",
    client_id: "117381459202157963505",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/gallery-app%40city-images-393604.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
};
CONFIG.folder = '1w_3vpkf4l7A5IYyYoA08KYxPkPmmwSb0';
