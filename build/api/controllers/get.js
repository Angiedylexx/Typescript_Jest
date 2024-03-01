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
exports.getMovies = exports.serverRead = void 0;
const movies_1 = __importDefault(require("../../api/models/movies"));
//Servidor
const serverRead = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Status Ok consola");
        res.send("Status:OK");
    }
    catch (error) {
        res.status(500).send("Error interno del servidor");
    }
});
exports.serverRead = serverRead;
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pageRequired } = req.query; //según el movimiento del usuario
        const currentPage = parseInt(pageRequired || "1", 10); //pasa poner usar el query recibido pasarlo a numero o considerar 1 si no hay query
        const pageSize = 20; //tamaño de los resultados en la pag, número de movie
        const offset = (currentPage - 1) * pageSize; //dependiendo de la pagina solicitada y considerando que cada una tiene 20 se saltaran estos primeros off
        const movies = yield movies_1.default.findAll({
            offset,
            limit: pageSize,
            order: [['year', 'DESC']],
        });
        const totalMovies = yield movies_1.default.count();
        const totalPages = Math.ceil(totalMovies / pageSize); // redondeando al superior
        if (currentPage > totalPages) {
            return res.status(404).json({ error: 'No se encuentra la página.' });
        }
        if (movies.length === 0) {
            return res.status(404).json({ error: 'No se encuentran películas en la base de datos' });
        }
        return res.status(200).json({
            movies: movies,
            pagination: `${currentPage}/${totalPages} (${totalMovies})`
        });
    }
    catch (error) {
        return res.status(500).json({ error: 'Error desconocido' });
    }
});
exports.getMovies = getMovies;
