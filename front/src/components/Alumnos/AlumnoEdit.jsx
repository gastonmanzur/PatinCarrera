// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// const AlumnoEdit = ({ alumno, onClose, onAlumnoUpdated }) => {
//   const [formData, setFormData] = useState({
//     nombre: '',
//     apellido: '',
//     edad: '',
//     categoria: '',
//     categoriaEdad: '',
//   });

//   useEffect(() => {
//     if (alumno) {
//       setFormData({
//         nombre: alumno.nombre,
//         apellido: alumno.apellido,
//         edad: alumno.edad,
//         categoria: alumno.categoria,
//         categoriaEdad: alumno.categoriaEdad,
//       });
//     }
//   }, [alumno]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`http://localhost:5000/api/alumnos/${alumno._id}`, formData)
//       .then((response) => {
//         alert('Alumno actualizado con éxito');
//         onAlumnoUpdated(response.data); // Actualiza el estado de la lista
//         onClose(); // Cierra el formulario
//       })
//       .catch((error) => {
//         console.error(error);
//         alert('Error al actualizar el alumno');
//       });
//   };

//   return (
//     <div>
//       <h2>Editar Alumno</h2>
//       <form onSubmit={handleSubmit} >
//         <div>
//           <label>Nombre:</label>
//           <input
//             type="text"
//             name="nombre"
//             value={formData.nombre}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Apellido:</label>
//           <input
//             type="text"
//             name="apellido"
//             value={formData.apellido}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Edad:</label>
//           <input
//             type="number"
//             name="edad"
//             value={formData.edad}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Categoría:</label>
//           <input
//             type="text"
//             name="categoria"
//             value={formData.categoria}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Categoría por Edad:</label>
//           <input
//             type="text"
//             name="categoriaEdad"
//             value={formData.categoriaEdad}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Guardar Cambios</button>
//         <button type="button" onClick={onClose}>
//           Cancelar
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AlumnoEdit;
