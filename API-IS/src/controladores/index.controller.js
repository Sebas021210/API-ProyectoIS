const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'IS',
    password: 'Sebas101202',
    port: '5432'
});

const getUsuarios = async (req, res) => {
    const consulta = `
        SELECT * FROM usuarios
    `;
    
    try{
        const response = await pool.query(consulta);
        const usuarios = response.rows;

        console.log(usuarios);
        res.status(200).json(usuarios);
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
}

const getEstudiantes = async (req, res) => {
    const consulta = `
        SELECT * FROM estudiantes
    `;

    try{
        const response = await pool.query(consulta);
        const estudiantes = response.rows;

        console.log(estudiantes);
        res.status(200).json(estudiantes);
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
}

const getAdmins_Delvas = async (req, res) => {
    const consulta = `
        SELECT * FROM admins_delvas
    `;
    try{
        const response = await pool.query(consulta);
        const admins_delvas = response.rows;

        console.log(admins_delvas);
        res.status(200).json(admins_delvas);
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
}

const getAdminsBeca = async (req, res) => {
    const consulta = `
        SELECT * FROM admins_beca
    `;
    try{
        const response = await pool.query(consulta);
        const admins_beca = response.rows;

        console.log(admins_beca);
        res.status(200).json(admins_beca);
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
}

const getActividades = async (req, res) => {
    const consulta = `
        SELECT * FROM actividades
    `;
    try{
        const response = await pool.query(consulta);
        const actividades = response.rows;

        console.log(actividades);
        res.status(200).json(actividades);
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
}

const getCharlas = async (req, res) => {
    const consulta = `
        SELECT * FROM charlas
    `;
    try{
        const response = await pool.query(consulta);
        const charlas = response.rows;

        console.log(charlas);
        res.status(200).json(charlas);
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
}

const getHistorial_Estudiantes = async (req, res) => {
    const consulta = `
        SELECT h.carne, e.nombres, e.apellidos, h.charlas_delva, h.act_charlas_delva, h.fal_charlas_delva FROM historial_estudiantes h
        JOIN estudiantes e ON h.carne = e.carne
        ORDER BY h.fal_charlas_delva ASC
    `;
    try{
        const response = await pool.query(consulta);
        const historial_estudiantes = response.rows;

        console.log(historial_estudiantes);
        res.status(200).json(historial_estudiantes);
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
}

const getHistorial_Estudiantes_Beca = async (req, res) => {
    const consulta = `
        SELECT hC.carne, e.nombres, e.apellidos, hC.max_horas_beca, hC.act_horas_beca, hC.fal_horas_beca FROM historial_estudiantes_beca hC
        JOIN estudiantes e ON hC.carne = e.carne
        ORDER BY hC.fal_horas_beca DESC
    `;
    try{
        const response = await pool.query(consulta);
        const historial_estudiantes_beca = response.rows;

        console.log(historial_estudiantes_beca);
        res.status(200).json(historial_estudiantes_beca);
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
}

const nuevaCharla = async (req, res) => {
    const { nombre_charla, descripcion, fecha, hora, formato, comentarios } = req.body;
    const consulta = `
        INSERT INTO charlas (nombre_charla, descripcion, fecha, hora, formato, comentarios)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;
    try{
        const response = await pool.query(consulta, [nombre_charla, descripcion, fecha, hora, formato, comentarios]);
        console.log(response);

        res.status(200).json({
            message: 'Charla agregada correctamente',
            body: {
                charla: {nombre_charla, descripcion, fecha, hora, formato, comentarios}
            }
        });
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
};

const nuevaActividad = async (req, res) => {
    const { nombre_actividad, descripcion, fecha, hora, cupo_estudiantes, turnos } = req.body;
    const consulta = `
        INSERT INTO actividades (nombre_actividad, descripcion, fecha, hora, cupo_estudiantes, turnos)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;
    try{
        const response = await pool.query(consulta, [nombre_actividad, descripcion, fecha, hora, cupo_estudiantes, turnos]);
        console.log(response);

        res.status(200).json({
            message: 'Actividad agregada correctamente',
            body: {
                actividad: {nombre_actividad, descripcion, fecha, hora, cupo_estudiantes, turnos}
            }
        });
    }catch(error){
        console.log(error);
        res.status(500).json('Error en el servidor');
    }
};

module.exports = {getUsuarios, getEstudiantes, getAdminsBeca, getAdmins_Delvas, getCharlas, getActividades, getHistorial_Estudiantes, getHistorial_Estudiantes_Beca, nuevaCharla, nuevaActividad};
