import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  error: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
  error,
  handleSubmit,
}) => {
  return (
    <Stack className={styles.container}>
      <Typography variant="h5" className={styles.title}>
        Ingresa a tu cuenta
      </Typography>
      {error && <Typography className={styles.error}>{error}</Typography>}
      <form onSubmit={handleSubmit}>
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
              "&.Mui-focused fieldset": {
                borderColor: "#363636",
              },
              "& input": {
                color: "#363636",
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
              "&.Mui-focused fieldset": {
                borderColor: "#363636",
              },
              "& input": {
                color: "#363636",
              },
            },
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            style: { color: "#363636" },
          }}
        />
        <Button
          sx={{
            marginTop: "20px",
            color: "#fff",
            bgcolor: "#007bff",
            "&:hover": { bgcolor: "#0056b3" },
          }}
          fullWidth
          type="submit"
        >
          Iniciar Sesión
        </Button>
      </form>
    </Stack>
  );
};

export default LoginForm;
