"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUser = void 0;
function getUser(req, res) {
    return res.send("user");
}
exports.getUser = getUser;
function getUserById(req, res) {
    return res.send("user/id");
}
exports.getUserById = getUserById;
