import { Request , Response } from "express";
import MOVIEMODEL from "../../api/models/movies";

const deleteMovies = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {

    // Validación de ID
    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ error: 'ID de película inválido' });
    }

    const movie = await MOVIEMODEL.findByPk(id);

    if (!movie) {
      return res.status(404).send('Película no encontrada');
    }

    await movie.destroy();

    return res.status(200).json({ message: 'Película eliminada correctamente',
    movie: movie.title });

  } catch (error: Error | any) {
    return res.status(500).json({ error: 'Error al eliminar la película' });
  }
};

export default deleteMovies;