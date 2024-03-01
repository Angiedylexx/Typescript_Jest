import { Request , Response } from "express";
import MOVIEMODEL from "../../api/models/movies"; 

const createMovie = async (req:Request, res:Response) => {
    const { title, director, genre, duration, synopsis, year, countryOrigin, screeningRoom, schedule } = req.body;
  
    if (!title || !genre || !duration || !screeningRoom || !schedule) {
      return res.status(400).json({ error: 'Datos incompletos' });
    }

    try {
      const movie = await MOVIEMODEL.create({
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
      
    } catch (error: Error | any ) {
      return res.status(400).json({ error: 'Datos de ingreso invalidos' })
    }
}

export default createMovie;