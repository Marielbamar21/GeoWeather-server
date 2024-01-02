import { Sequelize } from "sequelize";
import { config } from "../config/index.js";
import { dataUser } from "../src/components/user/dataUser.js"
import { dataWeather } from "../src/components/weather/dataWeather.js";
import {dataUserWeather} from "../src/components/userWeather/dataUserWeather.js"

export const db = new Sequelize(
  config.bd_name, //bdName
  config.bd_user, //dbUsername
  config.bd_key, //dbPassword
  {
      host: config.bd_host,
      dialect: 'postgres',
      dialectOptions: {
          useUTC: false, // for reading from database
          ssl: {
            require: true,
            rejectUnauthorized: true
          }
      },
      pool: {
                  max: 5,
                  min: 0,
                  acquire: 30000,
                  idle: 10000
      },
      logging: false,
      timezone: '-04:00' // for writing to database
  });

/* Local conection

export const db = new Sequelize(
    config.bd_name, //bdName
    config.bd_user, //dbUsername
    config.bd_key, //dbPassword
    {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            useUTC: false, // for reading from database
        },
        pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
        },
        logging: false,
        timezone: '-04:00' // for writing to database
    }
);

*/
//Tables in DB

const User = db.define('user', dataUser);
const Weather = db.define('weather', dataWeather);
const UserWeather = db.define('userWeather', dataUserWeather);



//Relationships between models
User.belongsToMany( Weather, { through: 'userWeather'});
Weather.belongsToMany(User, { through: 'userWeather'} );

//Synchronizing all models at once
export const syncModels = async () => {
    try {
      await db.sync({ alter: true })
    } catch (error) {
      console.log(error)
    }
  }


//Export models
export const userModel = User;
export const weatherModel = Weather;
export const userWeatherModel= UserWeather;





