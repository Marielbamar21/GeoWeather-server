import express from 'express';
import cors from 'cors'; 
import { routes } from './src/routes/routes.js';
import cookieParser from 'cookie-parser';

const app = express();

// Configurar cors
app.use(cors({
  credentials: true,
  origin: ['http://127.0.0.1:5500', 'https://7tbx6r3z-5500.use2.devtunnels.ms']
}));

// Agregar cookie parser
app.use(cookieParser());

// Configurar rutas
app.use('/GeoWeather', routes);

export default app;