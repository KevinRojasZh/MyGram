import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario
        try {
            // Enviar datos al endpoint del backend
            const response = await axios.post('http://127.0.0.1:8000/api/user/register/', formData);
            console.log('Usuario registrado:', response.data); // Mostrar la respuesta en consola
        } catch (error) {
            console.error('Error al registrar usuario:', error.response.data); // Mostrar errores en consola
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                value={formData.username} 
                onChange={handleChange} 
            />
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange} 
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
