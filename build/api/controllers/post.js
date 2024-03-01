"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movies_1 = __importDefault(require("../../api/models/movies"));
const createMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, director, genre, duration, synopsis, year, countryOrigin, screeningRoom, schedule } = req.body;
    if (!title || !genre || !duration || !screeningRoom || !schedule) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }
    try {
        const movie = yield movies_1.default.create({
            title,
            director,
            genre,
            duration,
            synopsis,
            year,
            countryOrigin,
            screeningRoom,
            schedule,
        });
        return res.status(201).json(movie);
    }
    catch (error) {
        return res.status(400).json({ error: 'Datos de ingreso invalidos' });
    }
});
exports.default = createMovie;
