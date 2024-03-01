import { Request , Response } from "express";
import MOVIEMODEL from "../models/movies";

export const updateMovies = async (req: Request, res: Response) => {
    
  const { id } = req.params;
  const { title, director, genre, duration, synopsis, year, countryOrigin, screeningRoom, schedule } = req.body;

  // Validación de datos
  if (!title && !genre && !duration && !screeningRoom && !schedule) {
    return res.status(400).json({ error: 'No se ha especificado ningún campo para actualizar' });
  }

  try {
    const movie = await MOVIEMODEL.findByPk(id);

    if (!movie) {
      return res.status(404).json({ error: 'Película no encontrada' });
    }

    // Actualiza solo los campos especificados
    const updatedFields: any = {};
    if (title) updatedFields.title = title;
    if (director) updatedFields.director = director;
    if (genre) updatedFields.genre = genre;
    if (duration) updatedFields.duration = duration;
    if (synopsis) updatedFields.synopsis = synopsis;
    if (year) updatedFields.year = year;
    if (countryOrigin) updatedFields.countryOrigin = countryOrigin;
    if (screeningRoom) updatedFields.screeningRoom = screeningRoom;
    if (schedule) updatedFields.schedule = schedule;

    const newMovie = await movie?.update(updatedFields,   { where: { id: id }, returning: true });

    return res.status(200).json(newMovie);
   
  } catch (error: Error | any) {
    return res.status(500).json({ error: 'Error al actualizar la película' });
  }
};

export default updateMovies;
