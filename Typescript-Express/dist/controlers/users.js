"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersById = exports.users = void 0;
function users(req, res) {
    res.json({
        message: "users"
    });
}
exports.users = users;
function usersById(req, res) {
    res.json({
        message: "usersById"
    });
}
exports.usersById = usersById;
