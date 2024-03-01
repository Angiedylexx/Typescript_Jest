"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.host = exports.port = exports.password = exports.database = exports.user = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.user = process.env.DB_USERNAME || 'postgres';
exports.database = process.env.DB_DATABASE || 'movies';
exports.password = process.env.PASSWORD || '';
exports.port = process.env.PORT || '3000';
exports.host = process.env.DB_HOST || 'localhost';
