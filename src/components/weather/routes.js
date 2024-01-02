import {Router} from 'express';
import {controllerWeather} from './controller.js';
const router = Router();

    router.post('/newWeather/:location/:userId', controllerWeather.createWeather);


export const weatherRouter = router;

