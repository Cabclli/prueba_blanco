import { ShoppingCart } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import styles from './ProductCard.module.css';
import router, { useRouter } from "next/router";

interface ProductCardProps {
  component: {
    id: number;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ component }) => {
  const formattedPrice = `USD$ ${component.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();

    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const updatedCart = currentCart.map((item: any) => {
      if (item.id === component.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    const productExists = updatedCart.some((item: any) => item.id === component.id);

    const finalCart = productExists ? updatedCart : [...updatedCart, { ...component, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(finalCart));

    window.dispatchEvent(new StorageEvent("storage", { key: "cart", newValue: JSON.stringify(finalCart) }));
  };

  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/detalle/${component.id}`);
  };

  return (
    <Card className={styles.productCard} onClick={handleProductClick}>
      <CardMedia
        component="img"
        image="https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png"
        alt={component.name}
        className={styles.cardImage}
      />
      <Stack className={styles.component}>
        {component.name}
      </Stack>
      <CardContent className={styles.buySection}>
        <Typography variant="h5" fontWeight="bold">
          {formattedPrice}
        </Typography>
        <Button
          onClick={handleAddToCart}
          className={styles.cartButton}
        >
          <ShoppingCart />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;