import { Sequelize } from "sequelize";
import { weatherModel } from "../../../service/database.js";


    /*const getUsersIp = async()=>{

        const users = await weatherModel.findAll();
        console.log(users);
        return users;
    }


    const getuserIp = async(ip) =>{

        const user = userIpModel.findOne({where : { ip : ip}})
    }*/


    const createWeather =  async(datos) => {

        const newWeather = new weatherModel.build(datos)
        console.log(newWeather);
        return newWeather;

    }


    /*const updateUserIp = async(ip,newIp)=>{

        const update = userIpModel.update({ip : newIp},{where: {ip:ip}});
        console.log(update);
        return update;

    }


    const deleteUserIp = async(ip) =>{

        const del = userIpModel.destroy({where : { ip: ip}});
        console.log(del);
        return del;

    }*/

    
module.exports.weatherService = {
    /*getUsersIp,
    getuserIp,*/
    createUserIp/*,
    updateUserIp,
    deleteUserIp*/

}