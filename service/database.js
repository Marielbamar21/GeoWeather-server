import { Sequelize } from "sequelize";
import { config } from "../config/index.js";
import { dataUserIp } from "../src/components/user/dataUserIp.js"
import { dataWeather } from "../src/components/weather/dataWeather.js";

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

const UserIp = db.define('userIp', dataUserIp);
const Weather = db.define('weather', dataWeather);


//Relationships between models
UserIp.belongsToMany( Weather, { through: 'userWeather'});
Weather.belongsToMany(UserIp, { through: 'userWeather'} );

//Synchronizing all models at once
export const syncModels = async () => {
    try {
      await db.sync({ alter: true })
    } catch (error) {
      console.log(error)
    }
  }


//Export models
export const userIpModel = UserIp;
export const weatherModel = Weather;





