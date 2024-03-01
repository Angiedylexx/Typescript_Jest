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
const deleteMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // Validación de ID
        if (!id || isNaN(parseInt(id))) {
            return res.status(400).json({ error: 'ID de película inválido' });
        }
        const movie = yield movies_1.default.findByPk(id);
        if (!movie) {
            return res.status(404).send('Película no encontrada');
        }
        yield movie.destroy();
        return res.status(200).json({ message: 'Película eliminada correctamente',
            movie: movie.title });
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al eliminar la película' });
    }
});
exports.default = deleteMovies;
