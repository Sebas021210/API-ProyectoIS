const { Router } = require('express');
const router = Router();

const { getUsuarios, getEstudiantes, getAdminsBeca, getAdmins_Delvas, getCharlas, getActividades, getHistorial_Estudiantes, getHistorial_Estudiantes_Beca, nuevaCharla, nuevaActividad } = require('../controladores/index.controller');

//GET
router.get('/usuarios', getUsuarios);
router.get('/estudiantes', getEstudiantes);
router.get('/admins_beca', getAdminsBeca);
router.get('/admins_delvas', getAdmins_Delvas);
router.get('/charlas', getCharlas);
router.get('/actividades', getActividades);
router.get('/historial_estudiantes', getHistorial_Estudiantes);
router.get('/historial_estudiantes_beca', getHistorial_Estudiantes_Beca);

//POST
router.post('/charlas', nuevaCharla);
router.post('/actividades', nuevaActividad);

module.exports = router;