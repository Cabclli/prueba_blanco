import React from "react";
import { Container, Stack } from "@mui/material";
import Carousel from "./components/carrusel";
import CardScroll from "./components/card/cardScroll";

const slides = [
  { image: "https://via.placeholder.com/600x300?text=Image+1", url: "/planes" },
  { image: "https://via.placeholder.com/600x300?text=Image+2", url: "/planes" },
  { image: "https://via.placeholder.com/600x300?text=Image+3", url: "/planes" },
];

const Home = () => {
  return (
    <>
      <Container>
        <Stack alignItems="center">
          <Carousel slides={slides} />
          <CardScroll />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
