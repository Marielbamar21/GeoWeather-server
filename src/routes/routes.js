import { Router} from 'express'
import { userRouter } from '../components/user/routes.js'
import { userWeatherRouter} from '../components/userWeather/routes.js'
 const router = Router();

    router.use('/user', userRouter );
    router.use('/weather', userWeatherRouter);


export const routes = router;


 