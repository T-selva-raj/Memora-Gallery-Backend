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

CONFIG.DRIVE_CREDENTIALS = process.env.CREDENTIALS;
CONFIG.folder = process.env.folder;
