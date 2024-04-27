"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controller/users");
const router = express_1.default.Router();
router.get('/getuser', users_1.getUser);
router.get('/getuser/:id', users_1.getUserById);
exports.default = router;
