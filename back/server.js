const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const alumnoRoutes = require('./routes/alumnoRoutes');
const userRoutes = require('./routes/userRoutes');
const session = require('express-session');



require('dotenv').config(); 
const app = express();

// Middleware
app.use(cors()); // Permite solicitudes desde diferentes orígenes//
app.use(express.json()); 

//Configuracion de la sesion 
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


// Rutas
app.use('/api/alumnos', alumnoRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/users', userRoutes);


// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


