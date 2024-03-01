"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../controllers/post"));
const get_1 = require("../controllers/get");
const delete_1 = __importDefault(require("../controllers/delete"));
const patch_1 = __importDefault(require("../controllers/patch"));
const moviesRouter = express_1.default.Router();
moviesRouter.post("/movies", post_1.default);
moviesRouter.get("/movies", get_1.getMovies);
moviesRouter.delete("/movies/:id", delete_1.default);
moviesRouter.patch("/movies/:id", patch_1.default);
exports.default = moviesRouter;
