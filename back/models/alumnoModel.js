const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  categoria: { type: String, required: true },
  categoriaEdad: { type: String, required: true },
  foto: { type: String }, // URL de la foto
});

module.exports = mongoose.model('Alumno', alumnoSchema);
