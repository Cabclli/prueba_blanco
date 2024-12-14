import * as React from "react";
import { Stack, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import SearchInput from "./components/SearchInput.jsx";
import CartCounter from "./components/CartCounter";
import styles from "./Index.module.css";

const Header = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };
  const handleHomeClick = () => {
    router.push("/");
  };
  const handleProductosClick = () => {
    router.push("/productos");
  };
  const handleCarritoClick = () => {
    router.push("/carrito");
  };
  const handleAyudaClick = () => {
    router.push("/ayuda");
  };

  return (
    <>
      <Stack className={styles.headerContainer}>
        <Button onClick={handleHomeClick}>
          <img
            src="https://cdn.worldvectorlogo.com/logos/apotex.svg"
            alt="My Icon"
            className={styles.logo}
          />
        </Button>
        <Stack className={styles.searchCart}>
          <SearchInput />
          <Button onClick={handleCarritoClick} className={styles.cartButton}>
            <CartCounter />
          </Button>
        </Stack>
        <Stack className={styles.login}>
          <Button onClick={handleLoginClick} className={styles.loginButton}>
            <PersonIcon className={styles.loginIcon} />
            Iniciar sesión
          </Button>
        </Stack>
      </Stack>
      <Stack className={styles.navBar}>
        <Button onClick={handleProductosClick} className={styles.navButton}>
          Productos
        </Button>
        <Button className={styles.navButton}>Notebooks</Button>
        <Button className={styles.navButton}>Arma tu PC</Button>
        <Button onClick={handleAyudaClick} className={styles.navButton}>
          Ayuda
        </Button>
      </Stack>
    </>
  );
};

export default Header;
