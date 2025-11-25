//Este archivo es como las rutas para que el programa corra

import express from "express";
import morgan from "morgan"

import { hotel_routers } from "./routers/hotel_routers";

const app = express();

app.use(morgan("combined"))

app.use(express.json())

app.use("/hotel", hotel_routers)