const Alumno = require('../models/alumnoModel');
const multer = require('multer');
const path = require('path');

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Obtener todos los alumnos
const getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los alumnos' });
  }
};

// Obtener un alumno por ID
const getAlumnoById = async (req, res) => {
  const { id } = req.params;
  try {
    const alumno = await Alumno.findById(id);
    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }
    res.status(200).json(alumno);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el alumno', error });
  }
};

// Crear un nuevo alumno con foto
const createAlumno = async (req, res) => {
  try {
    const { nombre, apellido, edad, categoria, categoriaEdad } = req.body;
    const foto = req.file ? req.file.filename : null; // Guardar la foto si existe
    const alumno = new Alumno({ nombre, apellido, edad, categoria, categoriaEdad, foto });
    await alumno.save();
    res.status(201).json(alumno);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el alumno' });
  }
};
// Actualizar un alumno
const updateAlumno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, edad, categoria, categoriaEdad } = req.body;

    const updates = { nombre, apellido, edad, categoria, categoriaEdad };

    // Si se envía una nueva foto, actualizar la URL de la foto
    if (req.file) {
      updates.foto = req.file.filename;
    }

    const updatedAlumno = await Alumno.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedAlumno) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }

    res.json(updatedAlumno);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el alumno' });
  }
};



// Eliminar un alumno
const deleteAlumno = async (req, res) => {
  const { id } = req.params;
  try {
    await Alumno.findByIdAndDelete(id);
    res.status(200).json({ message: 'Alumno eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar alumno', error });
  }
};



module.exports = { getAlumnos, getAlumnoById, createAlumno, updateAlumno, deleteAlumno,  upload, };

