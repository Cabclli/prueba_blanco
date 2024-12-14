import { useRouter } from 'next/router'; // Añadir al inicio
import React, { useState } from "react";
import { Stack } from "@mui/material";
import RegisterForm from "./components/RegisterForm"; // Asegúrate de que la ruta sea correcta

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter(); // Utiliza useRouter para redireccionar después del registro

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    if (!name || !lastname) {
      setError("Por favor, completa tu nombre y apellido.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Por favor, introduce un correo electrónico válido.");
      return;
    }
    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un número.");
      return;
    }

    setError(""); // Limpiar el error si todo es válido

    // Aquí deberías realizar el registro con tu API
    // Por ejemplo, enviar los datos del usuario a tu servidor

    // Simulamos un registro exitoso
    console.log("Registro exitoso:", { name, lastname, email });

    // Redirigir al usuario después del registro
    router.push('/home'); // Redirige a la página de inicio u otra página
  };

  return (
    <Stack
      sx={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RegisterForm
        name={name}
        lastname={lastname}
        email={email}
        password={password}
        setName={setName}
        setLastname={setLastname}
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        handleSubmit={handleSubmit}
      />
    </Stack>
  );
};

export default Register;
