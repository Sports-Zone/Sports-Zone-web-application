exports.CHECK_EMAIL = "SELECT * FROM user WHERE email =?";
exports.REGISTER_USER = "INSERT INTO user VALUES (NULL, ?)";
exports.DELETE_USER= "UPDATE user SET is_deleted=1 WHERE email =?";

