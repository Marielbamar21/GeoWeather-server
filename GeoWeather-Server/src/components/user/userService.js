import { Sequelize } from "sequelize";
import { userIpModel } from "../../../service/database.js";


    const getUsers = async()=>{

        const users = await userIpModel.findAll();
        console.log(users);
        return users;
    }


    const getUser = async(ip) =>{

        const user = userIpModel.findOne({where : { ip : ip}})
        return user;
    }


    const createUser =  async(ip) => {

        const newUser = new userIpModel.build({ ip: ip })
        console.log(newUser);
        return newUser;

    }


    const UserIpService = {
        getUsers,
        getUser,
        createUser
      };
      
      export default UserIpService;