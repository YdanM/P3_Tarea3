import restaurante from "../database/hotel_db.js";

export const get_restaurantes = (req, res) => {
    return res.send({ datos: Object.keys(restaurante) });
};

export const get_reservaciones = (req, res) => {
    const restaurante_consultado = req.params.restaurante;

    if (Object.keys(restaurante).includes(restaurante_consultado)) {
        return res.send({ datos: restaurante[restaurante_consultado]['horarios'] });
    } else {
        return res.send({ datos: [], error: "No se encontró la consulta" });
    }
};

export const post_guardar_reservacion = (req, res) => {
    const datos = req.body;

    if (restaurante[datos.restaurante]['horarios'][datos.horario].length < restaurante[datos.restaurante]['capacidad']) {
        restaurante[datos.restaurante]['horarios'][datos.horario].push(datos.datos);
        return res.send({ datos: "Reserva guardada con éxito" });
    } else {
        return res.send({ datos: '', error: "No se guardó la información, capacidad llena" });
    }
};

export const delete_cancelacion_reserva = (req, res) => {
    const { nombre_restaurante, horario, indice } = req.body;

    if (
        restaurante[nombre_restaurante] &&
        restaurante[nombre_restaurante]['horarios'][horario] &&
        restaurante[nombre_restaurante]['horarios'][horario][indice]
    ) {
        restaurante[nombre_restaurante]['horarios'][horario].splice(indice, 1);
        return res.send({ datos: 'Reserva cancelada' });
    } else {
        return res.send({ datos: '', error: "No se encontró la reserva para cancelar" });
    }
};
