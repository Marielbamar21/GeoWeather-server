import express from 'express';
import cors from 'cors'; 
import { routes } from './src/routes/routes.js';
import cookieParser from 'cookie-parser';

const app = express();

// Configurar cors
app.use(cors({
  credentials: true,
  origin: ['http://127.0.0.1:5500', 'https://geo-weather-sooty.vercel.app']
}));

// Agregar cookie parser
app.use(cookieParser());

// Configurar rutas
app.use('/GeoWeather', routes);

export default app;