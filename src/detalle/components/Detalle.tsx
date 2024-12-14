import { Button, Card, CardMedia, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./detalle.module.css";
import { ShoppingCart } from "@mui/icons-material";

interface ComponentData {
  id: number;
  name: string;
  category: {
    name: string;
  };
  price: number;
  description: string;
  properties: Record<string, string>;
}

const Detalles: React.FC = () => {
  const [component, setComponent] = useState<ComponentData | null>(null);
  const router = useRouter();
  const { id } = router.query; // Obtén el ID desde la URL

  useEffect(() => {
    if (id) {
      const fetchComponent = async () => {
        try {
          const response = await fetch(`/api/component/${id}`);
          const data = await response.json();
          if (typeof data.properties === "string") {
            data.properties = JSON.parse(data.properties);
          }
          setComponent(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchComponent();
    }
  }, [id]);

  if (!component) {
    return <div className={styles.loading}>Componente no encontrado</div>;
  }

  const formattedPrice = `USD$ ${component.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();

    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const updatedCart = currentCart.map((item: any) => {
      if (item.id === component.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    const productExists = updatedCart.some(
      (item: any) => item.id === component.id
    );

    const finalCart = productExists
      ? updatedCart
      : [...updatedCart, { ...component, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(finalCart));

    window.dispatchEvent(
      new StorageEvent("storage", {
        key: "cart",
        newValue: JSON.stringify(finalCart),
      })
    );
  };

  return (
    <Stack className={styles.container}>
      <Stack className={styles.imageContainer}>
        <CardMedia
          component="img"
          image="https://static.gigabyte.com/StaticFile/Image/Global/1f7a4b7372688a9959a997aa486252e1/Product/25956/Png"
          alt={component.name}
        />
      </Stack>
      <Stack className={styles.detailsContainer}>
        <Stack className={styles.component}>
          <Typography className={styles.name}>{component.name}</Typography>
          <Typography className={styles.category}>
            {component.category.name}
          </Typography>
        </Stack>
        <Stack className={styles.buySection}>
          <Typography className={styles.price}>
            Precio: {formattedPrice}
          </Typography>
          <Button onClick={handleAddToCart} className={styles.cartButton}>
            Agregar al carrito
            <ShoppingCart className={styles.cartIcon} />
          </Button>
        </Stack>
        <Stack className={styles.propertiesContainer}>
          <Typography className={styles.propertiesTitle}>
            Especificaciones:
          </Typography>
          {component.properties && (
            <Stack className={styles.propertiesList}>
              {Object.entries(component.properties).map(([key, value]) => (
                <Typography key={key} className={styles.propertyItem}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
                  {value}
                </Typography>
              ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Detalles;
