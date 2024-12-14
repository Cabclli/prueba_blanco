import React from "react";
import { Typography, Button } from "@mui/material";
import styles from "../carrito.module.css";

interface CartTotalProps {
  total: number;
}

const CartTotal: React.FC<CartTotalProps> = ({ total }) => {
  return (
    <>
      <Typography className={styles.total} variant="h5">
        Total: USD${total.toFixed(2)}
      </Typography>
      <Button className={styles.button}>Proceder al Pago</Button>
    </>
  );
};

export default CartTotal;
