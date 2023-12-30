import {  DataTypes  } from "sequelize";
export const dataUserIp = {
        id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
        userIp: {
                type: DataTypes.STRING,
                allowNull: false
            },
        status:{
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }

};
