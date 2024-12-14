import { useRouter } from 'next/router'; // Añadir al inicio

import React, { useState } from "react";
import { Stack } from "@mui/material";
import LoginForm from "./components/LoginForm"; // Asegúrate de que la ruta sea correcta

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el email
    return regex.test(email) && email.length >= 5;
  };

  const validatePassword = (password: string): boolean => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= 8 && hasUpperCase && hasNumber;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Validaciones
    if (!validateEmail(email)) {
      setError("Por favor, introduce un correo electrónico válido.");
      return;
    }
    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
      return;
    }
    
    setError(""); // Limpiar el error si todo es válido

    // Simular el inicio de sesión exitoso
    // Aquí deberías llamar a tu API de autenticación
    // En este caso, simplemente se simula el éxito
    const fakeUserEmail = "test@example.com"; // Simulamos un email de usuario
    const fakeUserPassword = "Password1"; // Simulamos una contraseña de usuario

    if (email === fakeUserEmail && password === fakeUserPassword) {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]"); // Obtener el carrito
      // Aquí podrías manejar el carrito como desees
      console.log("Inicio de sesión exitoso. Carrito:", cart);

      // Redirigir al usuario o realizar alguna acción después del inicio de sesión
      // Por ejemplo, podrías usar el router de Next.js para redirigir
      // router.push('/home'); // Asegúrate de importar useRouter si lo usas
    } else {
      setError("Correo o contraseña incorrectos."); // Manejo de error si las credenciales no son válidas
    }
  };

  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LoginForm
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        handleSubmit={handleSubmit}
      />
    </Stack>
  );
};

export default Login;
