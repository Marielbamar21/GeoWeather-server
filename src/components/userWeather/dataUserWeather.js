import {  DataTypes  } from "sequelize";
export const dataUserWeather = {
        id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        userId: {
            type: DataTypes.STRING, 
            allowNull: false,
            references: {
                model: 'users',
                key: 'userId',

            }
            }, 
            location:{
                type: DataTypes.STRING,
                allowNull: false
            },
            humidity:{
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            precipitationProbability:{
                type: DataTypes.FLOAT,
                allowNull: false
            },
            rainIntensity: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            temperature: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            temperatureApparent: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            uvHealthConcern: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            visibility: {
                type: DataTypes.FLOAT,
                allowNull: false
            } ,
            weatherCode: {
                type: DataTypes.INTEGER,
                allowNull: false
            } 
    

};
