import { userModel } from "../../../service/database.js";


    const getUsers = async()=>{

        const users = await userModel.findAll();
        console.log(users);
        return users;
    }


    const getUser = async(id) =>{

        const user = await userModel.findOne({where : { userId : id}})
        return user;
    }


    const createUser =  async(id) => {

        const newUser = await userModel.create({ userId: id })
        return newUser;

    }


    export  const UserService = {
        getUsers,
        getUser,
        createUser
    };