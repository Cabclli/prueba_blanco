import React, { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import styles from "./cardScroll.module.css";
import ProductCard from "@/src/productos/components/ProductCard";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

interface ComponentData {
  id: number;
  name: string;
  category: {
    name: string;
  };
  price: number;
  hrefViewMore: string;
  hrefSelectPlan: string;
}

const CardScroll: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const cardWidth = 300;
  const itemsPerPage = 4;

  useEffect(() => {
    const fetchComponents = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setComponents(data);
    };

    fetchComponents();
  }, []);

  const handleScrollLeft = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleScrollRight = () => {
    const maxPage = Math.ceil(components.length / itemsPerPage) - 1;
    setCurrentPage((prev) => Math.min(prev + 1, maxPage));
  };

  const translateX = -currentPage * (cardWidth * itemsPerPage);

  return (
    <Stack>
      <Stack className={styles.titleContainer}>
        <p>Productos destacados</p>
        <Stack className={styles.buttonsContainer}>
          <Button
            onClick={handleScrollLeft}
            disabled={currentPage === 0}
            className={styles.buttonStyle}
            sx={{ paddingLeft: "18px" }}
          >
            <ArrowBackIos className={styles.arrowIcon} />
          </Button>
          <Button
            onClick={handleScrollRight}
            disabled={
              currentPage >= Math.ceil(components.length / itemsPerPage) - 1
            }
            className={styles.buttonStyle}
            sx={{ marginLeft: "10px" }}
          >
            <ArrowForwardIos className={styles.arrowIcon} />
          </Button>
        </Stack>
      </Stack>
      <Stack className={styles.scrollContainer}>
        <Stack
          direction="row"
          className={styles.cardWrapper}
          style={{ width: `${cardWidth * itemsPerPage}px` }}
        >
          <Stack
            direction="row"
            className={styles.cards}
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {components.map((component) => (
              <Stack
                key={component.id}
                className={styles.cardItem}
                style={{ width: `${cardWidth}px` }}
              >
                <ProductCard
                  component={{
                    name: component.name,
                    price: component.price,
                    id: component.id,
                  }}
                />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CardScroll;
