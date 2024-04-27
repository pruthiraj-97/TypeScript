"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUser = void 0;
function getUser(req, res) {
    return res.send("user");
}
exports.getUser = getUser;
// request type can be set by generic          body query                                       Response type
function getUserById(req, res) {
    // console.log(req.body.email,req.body.password,req.body.username)
    // console.log(req.query.loginAfterCreate)
    //console.log(req.params.id)
    console.log(req.customfield);
    return res.send({
        id: "dd mherbfer",
        email: "nvjrehr",
        username: "ldjnvrjeh"
    });
}
exports.getUserById = getUserById;
