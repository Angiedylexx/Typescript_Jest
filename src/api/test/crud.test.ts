import { describe, it, expect } from '@jest/globals';
import supertest from "supertest";
import {server} from "../../index";

const api = supertest("http://127.0.0.1:3000/");

it("Deberia retornar un 200 OK response", async () => {

  const response = await api
    .get("")
    .expect(200)
  expect(response.text).toBe("Status:OK");
});

describe('API de creacion de películas', () => { 

  it('Debe crear de forma exitosa la película ', async () => {

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
    }

    const response = await api
      .post("api/v1/movies")
      .send(movie)
      .expect(201)
    expect(response.body.title).toEqual(movie.title) 
    expect(response.body.year).toEqual(movie.year) 

  });

  it('Deberia lanzar un error (400) y el mensaje Datos incompletos' , async () => {
    
    const movie = {
      "director": "Mel Gibson",
      "genre": "Drama, Guerra",
      "duration": "02:19:00",
      "synopsis": "Un joven pacifista se une al ejército durante la Segunda Guerra Mundial como médico de combate.",
      "year": 2016,
      "countryOrigin": "Estados Unidos",
      "screeningRoom": "Sala 4",
      "schedule": "16:30:00"
    }

    const response = await api
      .post("api/v1/movies")
      .send(movie)
      .expect(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Datos incompletos")
  });

  it('Deberia lanzar un error con status 400 por datos de ingreso invalidos ' , async () => {
    
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
    
    const response = await api
      .post("api/v1/movies")
      .send(movie)
      .expect(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Datos de ingreso invalidos")
  });

})

describe('API de actualización de películas', () => { 

  it('Debe actualizar de forma exitosa la película ', async () => {

    const movie = {
      title: "Test Movie",
      director: "Test Director"
    };

    const response = await api
      .patch("api/v1/movies/30")
      .send(movie)
      .expect(200)
    expect(response.body.title).toBe(movie.title) 
    expect(response.body.director).toBe(movie.director) 
    expect(response.body.year).not.toBeNull()

  });

  it('Deberia lanzar un error (400) y el mensaje Datos incompletos' , async () => {
    
    const movie = {
    };
    
    const response = await api
      .patch("api/v1/movies/30")
      .send(movie)
      .expect(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe('No se ha especificado ningún campo para actualizar')  
  });

  it('Deberia lanzar un error (404) y el mensaje Película no encontrada' , async () => {
    
    const movie = {
      title: "Test Movie",
      director: "Test Director"
    };
    
    const response = await api
      .patch("api/v1/movies/999")
      .send(movie)
      .expect(404)
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe('Película no encontrada')  
  
  });
 
  it('Deberia lanzar un error 500' , async () => {
    
    const movie = {
      title: "Test Movie",
      director: "Test Director"
    };
    
    const response = await api
      .patch("api/v2/movies/1")
      .send(movie)
      .expect(404)
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe('Película no encontrada')  
  
  });
  
  it("Deberia retornar un 500 error por invalidación de datos", async () => {
    const response = await api
      .patch("/api/v1/movies/29") 
      .send({
        title: 123, 
        director: true, 
        genre: [],
      })
    expect(response.text).toContain("Error al actualizar la película");  

  })


describe('API de visualización de películas', () => {

  it("Debería devolver una lista de películas con paginación", async () => {

    const response = await api
      .get("api/v1/movies")
      .expect(200)
      
    expect(response.body).toHaveProperty("movies")
    expect(response.body).toHaveProperty("pagination")

    const currentPage = response.body.pagination.split("/")[0]

    expect(currentPage).toEqual("1")

  });

  it("Debería devolver un error 404 para un número de página inexistente", async () => {

    const response = await api
      .get("api/v1/movies?pageRequired=1000") 
      .expect(404)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("No se encuentra la página.")

  });

  it("Debería devolver un error 500 para una pagina sin formato", async () => {

    const response = await api
      .get("api/v1/movies?pageRequired=aaa") 
      .expect(500)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Error desconocido")

  });

});

describe('API de eliminación de películas', () => {

  it("Debería eliminar la movie del id y devolver su titulo", async () => {

    const response = await api
      .delete("api/v1/movies/56")
      .expect(200)
    expect(response.body).toHaveProperty("movie")
    expect(response.body).toHaveProperty("message") 
    expect(response.body.message).toBe("Película eliminada correctamente")

  });

  it("Debería devolver un error con el mensaje ID de película inválido", async () => {

    const response = await api
      .delete("api/v1/movies/abc123")
      .expect(400)
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("ID de película inválido")
  });

});

afterAll(() => {
  server.close()
})

})
