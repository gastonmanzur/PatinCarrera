import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AlumnoDetail = () => {
  const { id } = useParams(); // Obtener el ID del alumno desde la URL
  const navigate = useNavigate(); // Para redireccionar después de eliminar
  const [alumno, setAlumno] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar el modo de edición
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    categoria: '',
    categoriaEdad: '',
  });
  const [foto, setFoto] = useState(null); // Estado para la nueva foto

  useEffect(() => {
    // Obtener datos del alumno
    axios
      .get(`http://localhost:5000/api/alumnos/${id}`)
      .then((response) => {
        setAlumno(response.data);
        setFormData(response.data); // Prellenar el formulario
      })
      .catch((error) => console.error('Error al cargar el alumno:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (foto) data.append('foto', foto);

    axios
      .put(`http://localhost:5000/api/alumnos/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        alert('Alumno actualizado con éxito');
        setAlumno(response.data); // Actualizar los datos del alumno
        setIsEditing(false); // Salir del modo de edición
      })
      .catch((error) => {
        console.error('Error al actualizar el alumno:', error);
        alert('Error al actualizar el alumno');
      });
  };

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este alumno? Esta acción no se puede deshacer.')) {
      axios
        .delete(`http://localhost:5000/api/alumnos/${id}`)
        .then(() => {
          alert('Alumno eliminado con éxito');
          navigate('/'); // Redirigir a la lista de alumnos después de eliminar
        })
        .catch((error) => {
          console.error('Error al eliminar el alumno:', error);
          alert('Error al eliminar el alumno');
        });
    }
  };

  if (!alumno) {
    return <p>Cargando datos del alumno...</p>;
  }

  return (
    <div>
      <h1>Detalles del Alumno</h1>
      {!isEditing ? (
        <>
          <p><strong>Nombre:</strong> {alumno.nombre}</p>
          <p><strong>Apellido:</strong> {alumno.apellido}</p>
          <p><strong>Edad:</strong> {alumno.edad}</p>
          <p><strong>Categoría:</strong> {alumno.categoria}</p>
          <p><strong>Categoría por Edad:</strong> {alumno.categoriaEdad}</p>
          {alumno.foto && <img src={`http://localhost:5000/uploads/${alumno.foto}`} alt="Foto del alumno" style={{ width: '150px', height: '150px' }} />}
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={handleDelete} style={{ color: 'red', marginLeft: '10px' }}>Eliminar</button>
          <button onClick={() => navigate('/protegida')} style={{ marginLeft: '10px' }}>Volver</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Editar Alumno</h2>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Edad:</label>
            <input
              type="number"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Categoría:</label>
            <input
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Categoría por Edad:</label>
            <input
              type="text"
              name="categoriaEdad"
              value={formData.categoriaEdad}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Foto:</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button type="submit">Guardar Cambios</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
        </form>
      )}
    </div>
  );
};

export default AlumnoDetail;

