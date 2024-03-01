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
const globals_1 = require("@jest/globals");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../index");
const api = (0, supertest_1.default)("http://127.0.0.1:3000/");
(0, globals_1.it)("Deberia retornar un 200 OK response", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield api
        .get("")
        .expect(200);
    (0, globals_1.expect)(response.text).toBe("Status:OK");
}));
(0, globals_1.describe)('API de creacion de películas', () => {
    (0, globals_1.it)('Debe crear de forma exitosa la película ', () => __awaiter(void 0, void 0, void 0, function* () {
        const movie = {
            "title": "Angie Test",
            "director": "Lee Unkrich, Adrian Molina",
            "genre": "Animación, Aventura",
            "duration": "01:45:00",
            "synopsis": "Un niño viaja al inframundo para descubrir la verdad sobre su familia.",
            "year": 2017,
            "countryOrigin": "Estados Unidos",
            "screeningRoom": "Sala 4",
            "schedule": "18:00:00"
        };
        const response = yield api
            .post("api/v1/movies")
            .send(movie)
            .expect(201);
        (0, globals_1.expect)(response.body.title).toEqual(movie.title);
        (0, globals_1.expect)(response.body.year).toEqual(movie.year);
    }));
    (0, globals_1.it)('Deberia lanzar un error (400) y el mensaje Datos incompletos', () => __awaiter(void 0, void 0, void 0, function* () {
        const movie = {
            "director": "Mel Gibson",
            "genre": "Drama, Guerra",
            "duration": "02:19:00",
            "synopsis": "Un joven pacifista se une al ejército durante la Segunda Guerra Mundial como médico de combate.",
            "year": 2016,
            "countryOrigin": "Estados Unidos",
            "screeningRoom": "Sala 4",
            "schedule": "16:30:00"
        };
        const response = yield api
            .post("api/v1/movies")
            .send(movie)
            .expect(400);
        (0, globals_1.expect)(response.body).toHaveProperty("error");
        (0, globals_1.expect)(response.body.error).toBe("Datos incompletos");
    }));
    (0, globals_1.it)('Deberia lanzar un error con status 400 por datos de ingreso invalidos ', () => __awaiter(void 0, void 0, void 0, function* () {
        const movie = {
            "title": "Test Movie",
            "director": "Test Director",
            "genre": "Action",
            "duration": "2 horas",
            "synopsis": "Descripcion ingresada",
            "year": "1995",
            "countryOrigin": "Colombia",
            "screeningRoom": "sala 12",
            "schedule": "01:30:00"
        };
        const response = yield api
            .post("api/v1/movies")
            .send(movie)
            .expect(400);
        (0, globals_1.expect)(response.body).toHaveProperty("error");
        (0, globals_1.expect)(response.body.error).toBe("Datos de ingreso invalidos");
    }));
});
(0, globals_1.describe)('API de actualización de películas', () => {
    (0, globals_1.it)('Debe actualizar de forma exitosa la película ', () => __awaiter(void 0, void 0, void 0, function* () {
        const movie = {
            title: "Test Movie",
            director: "Test Director"
        };
        const response = yield api
            .patch("api/v1/movies/30")
            .send(movie)
            .expect(200);
        (0, globals_1.expect)(response.body.title).toBe(movie.title);
        (0, globals_1.expect)(response.body.director).toBe(movie.director);
        (0, globals_1.expect)(response.body.year).not.toBeNull();
    }));
    (0, globals_1.it)('Deberia lanzar un error (400) y el mensaje Datos incompletos', () => __awaiter(void 0, void 0, void 0, function* () {
        const movie = {};
        const response = yield api
            .patch("api/v1/movies/30")
            .send(movie)
            .expect(400);
        (0, globals_1.expect)(response.body).toHaveProperty("error");
        (0, globals_1.expect)(response.body.error).toBe('No se ha especificado ningún campo para actualizar');
    }));
    (0, globals_1.it)('Deberia lanzar un error (404) y el mensaje Película no encontrada', () => __awaiter(void 0, void 0, void 0, function* () {
        const movie = {
            title: "Test Movie",
            director: "Test Director"
        };
        const response = yield api
            .patch("api/v1/movies/999")
            .send(movie)
            .expect(404);
        (0, globals_1.expect)(response.body).toHaveProperty("error");
        (0, globals_1.expect)(response.body.error).toBe('Película no encontrada');
    }));
    (0, globals_1.it)('Deberia lanzar un error 500', () => __awaiter(void 0, void 0, void 0, function* () {
        const movie = {
            title: "Test Movie",
            director: "Test Director"
        };
        const response = yield api
            .patch("api/v2/movies/1")
            .send(movie)
            .expect(404);
        (0, globals_1.expect)(response.body).toHaveProperty("error");
        (0, globals_1.expect)(response.body.error).toBe('Película no encontrada');
    }));
    (0, globals_1.it)("Deberia retornar un 500 error por invalidación de datos", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield api
            .patch("/api/v1/movies/29")
            .send({
            title: 123,
            director: true,
            genre: [],
        });
        (0, globals_1.expect)(response.text).toContain("Error al actualizar la película");
    }));
    (0, globals_1.describe)('API de visualización de películas', () => {
        (0, globals_1.it)("Debería devolver una lista de películas con paginación", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .get("api/v1/movies")
                .expect(200);
            (0, globals_1.expect)(response.body).toHaveProperty("movies");
            (0, globals_1.expect)(response.body).toHaveProperty("pagination");
            const currentPage = response.body.pagination.split("/")[0];
            (0, globals_1.expect)(currentPage).toEqual("1");
        }));
        (0, globals_1.it)("Debería devolver un error 404 para un número de página inexistente", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .get("api/v1/movies?pageRequired=1000")
                .expect(404);
            (0, globals_1.expect)(response.body).toHaveProperty("error");
            (0, globals_1.expect)(response.body.error).toBe("No se encuentra la página.");
        }));
        (0, globals_1.it)("Debería devolver un error 500 para una pagina sin formato", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .get("api/v1/movies?pageRequired=aaa")
                .expect(500);
            (0, globals_1.expect)(response.body).toHaveProperty("error");
            (0, globals_1.expect)(response.body.error).toBe("Error desconocido");
        }));
    });
    (0, globals_1.describe)('API de eliminación de películas', () => {
        (0, globals_1.it)("Debería eliminar la movie del id y devolver su titulo", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .delete("api/v1/movies/56") // cambiar #47-68,83,84,82,74,69,71,72,70,,
                .expect(200);
            (0, globals_1.expect)(response.body).toHaveProperty("movie");
            (0, globals_1.expect)(response.body).toHaveProperty("message");
            (0, globals_1.expect)(response.body.message).toBe("Película eliminada correctamente");
        }));
        (0, globals_1.it)("Debería devolver un error con el mensaje ID de película inválido", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield api
                .delete("api/v1/movies/abc123")
                .expect(400);
            (0, globals_1.expect)(response.body).toHaveProperty("error");
            (0, globals_1.expect)(response.body.error).toBe("ID de película inválido");
        }));
    });
    afterAll(() => {
        index_1.server.close();
    });
});
