"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../../config/db"));
class Movie extends sequelize_1.Model {
}
const MOVIEMODEL = Movie.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    director: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    genre: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    duration: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
    synopsis: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    countryOrigin: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true,
    },
    screeningRoom: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    schedule: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: false,
    },
}, {
    tableName: 'movies',
    sequelize: db_1.default //Instancia de conexión
});
exports.default = MOVIEMODEL;
