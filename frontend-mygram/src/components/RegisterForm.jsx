import React, { useState } from 'react';
import axios from 'axios';


const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [profilePicture, setProfilePicture] = useState(null);
    const [message, setMessage] = useState(""); // Estado para mensajes al usuario

    // Manejar cambios en los inputs de texto
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Manejar el cambio del archivo de imagen
    const handleFileChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    // Manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("username", formData.username);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("password", formData.password);
        if (profilePicture) {
            formDataToSend.append("profile_picture", profilePicture);
        }

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/users/register/",
                formDataToSend,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            setMessage("Usuario registrado exitosamente.");
            setFormData({ username: "", email: "", password: "" }); // Limpia el formulario
            setProfilePicture(null); // Limpia el archivo seleccionado
        } catch (error) {
            console.error("Error al registrar usuario:", error.response?.data || error.message);
            setMessage("Error al registrar usuario. Verifica los datos e inténtalo de nuevo.");
        }
    };

    return (

        <main className="container-register-form">
        <header className="header-register">
            <h1> MyGram</h1>
            <h3>Regístrate para ver fotos y vídeos de tus amigos.</h3>
        </header>

        <form  className="register-form"onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Profile Picture:</label>
                <input type="file" name="profile_picture" onChange={handleFileChange} />
            </div>
            <button type="submit">Register</button>
            {message && <p>{message}</p>} {/* Mostrar mensajes al usuario */}
        </form>
        </main>
    );
};

export default RegisterForm;

