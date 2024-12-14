import React from "react";
import { Button, colors, Stack, TextField, Typography } from "@mui/material";

interface RegisterFormProps {
  name: string;
  lastname: string;
  email: string;
  password: string;
  setName: (value: string) => void;
  setLastname: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  error: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  name,
  lastname,
  email,
  password,
  setName,
  setLastname,
  setEmail,
  setPassword,
  error,
  handleSubmit,
}) => {
  return (
    <Stack
      sx={{
        maxWidth: "500px",
        padding: "30px",
        backgroundColor: "#dfdfdf",
        borderRadius: "15px",
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" textAlign="center" marginBottom={2}>
        Regístrate
      </Typography>
      {error && (
        <Typography color="#363636" textAlign="center" marginBottom={2}>
          {error}
        </Typography>
      )}
      
        <Typography >Datos de la cuenta</Typography>
        <br />
        <TextField
          id="email"
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#363636",
              },
              "&:hover fieldset": {
                borderColor: "#363636",
              },
             
              
            },
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            style: { color: "#363636" },
          }}
        />
        <TextField
          id="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#363636",
              },
              "&:hover fieldset": {
                borderColor: "#363636",
              },
              
            },
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            style: { color: "#363636" },
          }}
        />
        <Typography >Datos personales</Typography>
        <br />
        <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Nombre"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#363636",
              },
              "&:hover fieldset": {
                borderColor: "#363636",
              },
             
            },
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputLabelProps={{
            style: { color: "#363636" },
          }}
        />
        <TextField
          id="lastname"
          label="Apellido"
          variant="outlined"
          fullWidth
          sx={{
            marginBottom: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#363636",
              },
              "&:hover fieldset": {
                borderColor: "#363636",
              },
             
             
            },
          }}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          InputLabelProps={{
            style: { color: "#363636" },
          }}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            color: "#000",
            bgcolor: "#007bff",
            "&:hover": { bgcolor: "#0056b3" },
          }}
          fullWidth
          type="submit"
        >
          Registrarse
        </Button>
      </form>
      
    </Stack>
  );
};

export default RegisterForm;
