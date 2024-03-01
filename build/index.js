"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./config/index");
const get_1 = require("./api/controllers/get");
const routers_1 = __importDefault(require("./api/routers/routers"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json()); // transformar de res a json
exports.app.use((0, cors_1.default)());
exports.app.get("/", get_1.serverRead);
exports.app.use("/api/v1", routers_1.default);
exports.server = exports.app.listen(index_1.port, () => {
    console.log(`Servidor corriendo en el puerto ${index_1.port}`);
});
