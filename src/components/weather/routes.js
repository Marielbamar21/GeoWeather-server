import {Router} from 'express';
import {controllerWeather} from './controller.js';
import {validator} from './middleware/validation.js'
const router = Router();

    router.post('/newWeather/:location', validator, controllerWeather.createWeather);


export const weatherRouter = router;

