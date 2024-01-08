import {  DataTypes  } from "sequelize";
export const dataUser = {
        id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        userId: {
                type: DataTypes.STRING,
                allowNull: false,
                
            },
        status:{
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }

};
