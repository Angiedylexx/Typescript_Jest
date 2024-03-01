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
exports.updateMovies = void 0;
const movies_1 = __importDefault(require("../models/movies"));
const updateMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, director, genre, duration, synopsis, year, countryOrigin, screeningRoom, schedule } = req.body;
    // Validación de datos
    if (!title && !genre && !duration && !screeningRoom && !schedule) {
        return res.status(400).json({ error: 'No se ha especificado ningún campo para actualizar' });
    }
    try {
        const movie = yield movies_1.default.findByPk(id);
        if (!movie) {
            return res.status(404).json({ error: 'Película no encontrada' });
        }
        // Actualiza solo los campos especificados
        const updatedFields = {};
        if (title)
            updatedFields.title = title;
        if (director)
            updatedFields.director = director;
        if (genre)
            updatedFields.genre = genre;
        if (duration)
            updatedFields.duration = duration;
        if (synopsis)
            updatedFields.synopsis = synopsis;
        if (year)
            updatedFields.year = year;
        if (countryOrigin)
            updatedFields.countryOrigin = countryOrigin;
        if (screeningRoom)
            updatedFields.screeningRoom = screeningRoom;
        if (schedule)
            updatedFields.schedule = schedule;
        const newMovie = yield (movie === null || movie === void 0 ? void 0 : movie.update(updatedFields, { where: { id: id }, returning: true }));
        return res.status(200).json(newMovie);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al actualizar la película' });
    }
});
exports.updateMovies = updateMovies;
exports.default = exports.updateMovies;
