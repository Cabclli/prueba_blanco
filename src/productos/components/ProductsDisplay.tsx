import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import {
  Button,
  Stack,
  Typography,
  MenuItem,
  Select,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./ProductDisplay.module.css";

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

const ComponentList: React.FC = () => {
  const [components, setComponents] = useState<ComponentData[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("Destacados"); // Valor predeterminado

  useEffect(() => {
    const fetchComponents = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setComponents(data);
    };

    fetchComponents();
  }, []);

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    setSortOrder(event.target.value);
  };

  const sortedComponents = [...components].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price;
    } else if (sortOrder === "desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const router = useRouter();
  const handleVolverClick = () => {
    router.push("/");
  };

  return (
    <div>
      <Stack className={styles.title}>
        <Stack className={styles.destacados}>
          <Button className={styles.backButton} onClick={handleVolverClick}>
            <ArrowBackIosIcon className={styles.ArrowBackIosIcon} />
          </Button>
          <Typography variant="h4">Destacados</Typography>
        </Stack>
        <Stack>
          <FormControl
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderBottom: "2px solid #285b99",
              height: "45px",
              width: "400px",
              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <Select
              value={sortOrder}
              onChange={handleSortChange}
              sx={{
                display: "flex",
                alignItems: "baseline",
                width: "100%",
                padding: "0px",
              }}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                  },
                },
              }}
            >
              <MenuItem value="Destacados">Destacados</MenuItem>
              <MenuItem value="asc">De menor a mayor</MenuItem>
              <MenuItem value="desc">De mayor a menor</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <Stack className={styles.filters}>aaa</Stack>
        <div className={styles.productGrid}>
          {sortedComponents.map((component) => (
            <ProductCard
              key={component.id}
              component={{
                name: component.name,
                price: component.price,
                id: component.id,
              }}
            />
          ))}
        </div>
      </Stack>
    </div>
  );
};

export default ComponentList;
