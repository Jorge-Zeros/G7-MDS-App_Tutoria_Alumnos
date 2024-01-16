"use strict";
exports.__esModule = true;
// User.ts
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var userSchema = new mongoose_1["default"].Schema({
    nombre: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        match: /^[a-zA-Z0-9._%+-]+@unsaac\.edu\.pe$/,
        required: true,
        unique: true
    },
    rol: {
        type: String,
        "enum": ["estudiante", "profesor", "admin"],
        required: true
    },
    password: {
        type: String,
        required: true,
        maxLength: 20,
        minLength: 8
    }
});
var User = mongoose_1["default"].model("User", userSchema);
exports["default"] = User;
