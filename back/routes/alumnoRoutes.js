const express = require('express');
const router = express.Router();
const { getAlumnos, getAlumnoById, createAlumno, updateAlumno, deleteAlumno, upload } = require('../controllers/alumnoController');


router.get('/', getAlumnos);
router.post('/', upload.single('foto'), createAlumno); // Aceptar fotos
router.put('/:id', upload.single('foto'), updateAlumno);
router.get('/:id', getAlumnoById);
router.post('/', createAlumno);
router.put('/:id', updateAlumno);
router.delete('/:id', deleteAlumno);


module.exports = router;
