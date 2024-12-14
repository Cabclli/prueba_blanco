import * as React from "react";
import { Button, ButtonProps, Stack } from "@mui/material";
import styled from "@emotion/styled";
import AccordionComponent from "./components/Accordion";

export default function Footer() {
  const [value, setValue] = React.useState("recents");

  const ColorButton = styled(Button)<ButtonProps>(({}) => ({
    "&:hover": {
      color: "#fff",
      backgroundColor: "#486c99",
    },
  }));

  return (
    <footer>
      <Stack
        sx={{
          bgcolor: "#285b99",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          color: "#fff",
          paddingBottom: 1,
          paddingTop: 1,
        }}
      >
        <ColorButton>
          <AccordionComponent
            title="Contáctanos"
            link={{
              href: "https://www.asrock.com/mb/AMD/A520M-HDV/index.la.asp#BIOS",
              text: "11-3227-8469",
            }}
            content={undefined}
          />
        </ColorButton>

        <ColorButton>
          <AccordionComponent
            title="Contáctanos"
            link={{
              href: "https://www.asrock.com/mb/AMD/A520M-HDV/index.la.asp#BIOS",
              text: "11-3227-8469",
            }}
            content={undefined}
          />
        </ColorButton>

        <ColorButton>
          <AccordionComponent
            title="Contáctanos"
            link={{
              href: "https://www.asrock.com/mb/AMD/A520M-HDV/index.la.asp#BIOS",
              text: "11-3227-8469",
            }}
            content={undefined}
          />
        </ColorButton>

        <ColorButton>
          <AccordionComponent
            title="Contáctanos"
            link={{
              href: "https://www.asrock.com/mb/AMD/A520M-HDV/index.la.asp#BIOS",
              text: "11-3227-8469",
            }}
            content={undefined}
          />
        </ColorButton>
      </Stack>
    </footer>
  );
}
