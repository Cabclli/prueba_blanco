import React from "react";
import { Stack, Typography } from "@mui/material";
import CartItem from "./CartItem";
import styles from "../carrito.module.css";

interface CartItemData {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartListProps {
  cart: CartItemData[];
  updateQuantity: (id: number, newQuantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartList: React.FC<CartListProps> = ({
  cart,
  updateQuantity,
  removeFromCart,
}) => {
  return (
    <Stack className={styles.cartList}>
      {cart.length === 0 ? (
        <Typography variant="h6">Tu carrito está vacío.</Typography>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </Stack>
  );
};

export default CartList;
