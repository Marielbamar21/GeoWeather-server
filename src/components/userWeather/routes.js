import {Router} from 'express';
import {controllerUserWeather} from './controller.js';
import {validator} from './middleware/validation.js'
const router = Router();

    router.post('/newWeather/:location', validator, controllerUserWeather.createUserWeather);
    router.get('/weather',controllerUserWeather.getUserWeather)


export const userWeatherRouter = router;

