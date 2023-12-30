import { Sequelize } from "sequelize";
import { userIpModel } from "../../../service/database.js";


    const getUsers = async()=>{

        const users = await userIpModel.findAll();
        console.log(users);
        return users;
    }


    const getUser = async(ip) =>{

        const user = await userIpModel.findOne({where : { userIp : ip}})
        return user;
    }


    const createUser =  async(ip) => {

        const newUser = await userIpModel.create({ userIp: ip })
        return newUser;

    }


    export  const UserService = {
        getUsers,
        getUser,
        createUser
    };