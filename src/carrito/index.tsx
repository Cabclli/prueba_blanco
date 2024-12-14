import React, { useState, useEffect } from "react";
import { Stack, Button, Typography } from "@mui/material";
import styles from "@/src/carrito/carrito.module.css";
import CartList from "./components/CartList";
import CartTotal from "./components/CartTotal";
import { useRouter } from "next/router";
import { ArrowBackIos } from "@mui/icons-material";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Carrito: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(savedCart);
    };
    loadCart();

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "cart") {
        loadCart();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (id: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  
    const event = new Event("cartChange");
    document.dispatchEvent(event);
  };
  
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  
    const event = new Event("cartChange");
    document.dispatchEvent(event);
  };
  

  const router = useRouter();
  const handleVolverClick = () => {
    router.push("/");
  };

  return (
    <Stack className={styles.container}>
      <Stack className={styles.title}>
        <Button className={styles.backButton} onClick={handleVolverClick}>
          <ArrowBackIos className={styles.ArrowBackIos} />
        </Button>
        <Typography variant="h4">Tu carrito</Typography>
      </Stack>
      <CartList
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      {cart.length > 0 && <CartTotal total={total} />}
    </Stack>
  );
};

export default Carrito;
