import { userModel } from "../../../service/database.js";


    const getUsers = async()=>{

        const users = await userModel.findAll();
        console.log(users);
        return users;
    }


    const getUser = async(id) =>{

        const user = await userModel.findOne({where : { userIp : id}})
        return user;
    }


    const createUser =  async(ip) => {

        const newUser = await userModel.create({ userId: ip })
        return newUser;

    }


    export  const UserService = {
        getUsers,
        getUser,
        createUser
    };