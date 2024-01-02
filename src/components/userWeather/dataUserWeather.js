import {  DataTypes  } from "sequelize";
export const dataUserWeather = {
        id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true
            },
        weatherId:{
            type: DataTypes.INTEGER,
            allowNull: true
            }

};
