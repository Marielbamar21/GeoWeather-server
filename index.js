import {conectionAPI} from './src/conection.js/API.js';
import express  from 'express';
import cors from 'cors'; 
import { routes } from './src/routes/routes.js'
import { config } from './config/index.js';

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false })) // imagenes que vengan desde formularios
app.use(express.json()) // tener objetos json
app.use('/GeoWeather',routes);

app.listen(config.port, ()=> {console.log(`servidos  escuchando en el puerto ${config.port}`)});