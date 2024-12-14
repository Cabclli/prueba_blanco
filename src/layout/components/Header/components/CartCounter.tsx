import React, { useState, useEffect } from "react";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./CartCounter.module.css";
import { Stack } from "@mui/material";

const CartCounter = () => {
  const [itemCount, setItemCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const count = cart.reduce((acc: number, item: { quantity: number }) => acc + item.quantity, 0);
    setItemCount(count);
  };

  useEffect(() => {
    updateCartCount();

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        updateCartCount();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const cartChangeListener = () => updateCartCount();
    document.addEventListener("cartChange", cartChangeListener);

    return () => {
      document.removeEventListener("cartChange", cartChangeListener);
    };
  }, []);

  return (
    <Stack className={styles.cartButton}>
      <ShoppingCart className={styles.cartIcon} />
      {itemCount > 0 && <span className={styles.cartCounter}>{itemCount}</span>}
    </Stack>
  );
};

export default CartCounter;
