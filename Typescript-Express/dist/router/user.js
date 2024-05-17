"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controlers/users");
const router = (0, express_1.Router)();
router.get('/', users_1.users);
router.get('/:id', users_1.usersById);
exports.default = router;
