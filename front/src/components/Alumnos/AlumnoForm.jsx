import React, { useState } from 'react';
import axios from 'axios';

const AlumnoForm = ({ onAlumnoAdded }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    categoria: '',
    categoriaEdad: '',
  });
  const [foto, setFoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (foto) data.append('foto', foto);

    try {
      const response = await axios.post('http://localhost:5000/api/alumnos', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onAlumnoAdded(response.data);
      setFormData({ nombre: '', apellido: '', edad: '', categoria: '', categoriaEdad: '' });
      setFoto(null);
    } catch (error) {
      console.error('Error al agregar el alumno:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="row g-3 needs-validation">
      <div class="col-md-4">
        <label className="form-control form-control-mod">Nombre</label>
        <input className="form-control" type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>
      <div class="col-md-4">
        <label className="form-control form-control-mod">Apellido</label>
        <input className="form-control" type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
      </div>
      <div class="col-md-4">
        <label className="form-control form-control-mod">Edad</label>
        <input className="form-control" type="number" name="edad" value={formData.edad} onChange={handleChange} required />
      </div>
      <div class="col-md-4">
        <label className="form-control form-control-mod">Categoría</label>
        <input className="form-control" type="text" name="categoria" value={formData.categoria} onChange={handleChange} required />
      </div>
      <div class="col-md-4">
        <label className="form-control form-control-mod ">Categoría por Edad</label>
        <input className="form-control" type="text" name="categoriaEdad" value={formData.categoriaEdad} onChange={handleChange} required />
      </div>
      <div class="col-md-4">
        <label className="form-control form-control-mod">Foto</label>
        <input className="form-control"  type="file" onChange={handleFileChange} />
      </div>
      <button type="submit">Agregar Alumno</button>
    </form>
  );
};

{/* <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form> */}
export default AlumnoForm;

