import express  from 'express';
import cors from 'cors'; 
import { routes } from './src/routes/routes.js'
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false })) // imagenes que vengan desde formularios
app.use(express.json()) // tener objetos json
app.use(cookieParser());
app.use('/GeoWeather',routes);



export default app;