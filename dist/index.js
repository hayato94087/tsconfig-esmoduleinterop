"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const snakecase_keys_1 = __importDefault(require("snakecase-keys"));
const user = { userName: 'micheal', emailAddress: 'taro@gmail.com' };
const userSnakeCase = (0, snakecase_keys_1.default)(user);
console.log(userSnakeCase);
//# sourceMappingURL=index.js.map