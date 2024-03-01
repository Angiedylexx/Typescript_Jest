import { Request , Response } from "express";
import MOVIEMODEL from "../../api/models/movies";

//Servidor
export const serverRead = async (_req: Request, res: Response) => {
    try {
      console.log("Status Ok consola");
      res.send("Status:OK");
    } catch (error) {
      res.status(500).send("Error interno del servidor");
    }
};

export const getMovies = async (req: Request, res: Response) => {
  try {
  const { pageRequired }:{ pageRequired?: string} = req.query; //según el movimiento del usuario

  const currentPage = parseInt(pageRequired || "1", 10); //pasa poner usar el query recibido pasarlo a numero o considerar 1 si no hay query
  const pageSize = 20; //tamaño de los resultados en la pag, número de movie

  const offset = (currentPage - 1) * pageSize; //dependiendo de la pagina solicitada y considerando que cada una tiene 20 se saltaran estos primeros off

  const movies = await MOVIEMODEL.findAll({
    offset,
    limit: pageSize,
    order: [['year', 'DESC']],
  });

  const totalMovies = await MOVIEMODEL.count();
  const totalPages = Math.ceil(totalMovies / pageSize); // redondeando al superior
  
  if (currentPage > totalPages ) {
    return res.status(404).json({ error: 'No se encuentra la página.' })
  }

  if (movies.length === 0) {
    return res.status(404).json({ error: 'No se encuentran películas en la base de datos' });
  }

  return res.status(200).json({ 
    movies: movies, 
    pagination: `${currentPage}/${totalPages} (${totalMovies})`
  });
  
  } catch (error:Error | any) {
    return res.status(500).json({ error: 'Error desconocido' });
  }
}
