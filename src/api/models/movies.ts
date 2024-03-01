import { DataTypes, Model} from "sequelize";
import sequelize from "../../config/db";

class Movie extends Model {
    public id!: number; 
    public title!: string;
    public director?: string | null; 
    public genre!: string;
    public duration!: Date;
    public synopsis?: string | null; 
    public year!: number;
    public countryOrigin?: string | null; 
    public screeningRoom!: string;
    public schedule!: Date;
}
const MOVIEMODEL = Movie.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    director: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    genre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    countryOrigin: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    screeningRoom: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    schedule: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    },
    {
      tableName: 'movies',
      sequelize //Instancia de conexión
    },
);

export default MOVIEMODEL;