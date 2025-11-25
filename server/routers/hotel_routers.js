import { Router } from "express";
import {
    delete_cancelacion_reserva,
    get_reservaciones,
    get_restaurantes,
    post_guardar_reservacion
} from "../functions/hotel_functions.js";

export const hotel_routers = Router();

hotel_routers.get("/restaurantes", get_restaurantes);

hotel_routers.get("/reservaciones/:restaurante", get_reservaciones);

hotel_routers.post("/guardar-reservacion", post_guardar_reservacion);

hotel_routers.delete("/cancelar-reservacion", delete_cancelacion_reserva);