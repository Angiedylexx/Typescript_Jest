import express from "express"; 
import createMovie from "../controllers/post";
import { getMovies } from "../controllers/get";
import deleteMovies from "../controllers/delete";
import updateMovies from "../controllers/patch";

const moviesRouter = express.Router();

moviesRouter.post("/movies", createMovie );
moviesRouter.get("/movies", getMovies ); 
moviesRouter.delete("/movies/:id", deleteMovies);
moviesRouter.patch("/movies/:id", updateMovies);

export default moviesRouter;
