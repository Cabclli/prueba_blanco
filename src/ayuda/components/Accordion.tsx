import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack, Typography } from "@mui/material";
import styles from "./Accordion.module.css";

const AccordionUsage = () => {
  return (
    <Stack className={styles.container}>
      <Stack className={styles.accordionContainer}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Precio
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionTitle}>
              ¿El precio que figura en la web es el precio final?
            </Typography>
            <br />
            <Typography className={styles.accordionText}>
              Todos los precios en la web incluyen el IVA, y se encuentran
              expresados en pesos argentinos.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Cómo armar tu PC
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionTitle}>
              ¿El precio que figura en la web es el precio final?
            </Typography>
            <Typography className={styles.accordionText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              exercitationem nobis quo non nesciunt laudantium? Ea error
              repellendus doloribus molestiae, sint, quae aspernatur cupiditate
              velit fuga assumenda, quis nisi. Laboriosam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Condición de garantía
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionTitle}>
              ¿El precio que figura en la web es el precio final?
            </Typography>
            <Typography className={styles.accordionText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              suscipit blanditiis dolore deserunt illum perspiciatis cupiditate
              ratione quaerat, id necessitatibus exercitationem! Mollitia illum
              voluptates harum reprehenderit exercitationem soluta, temporibus
              cum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            Envíos
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionTitle}>
              ¿El precio que figura en la web es el precio final?
            </Typography>
            <Typography className={styles.accordionText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              suscipit blanditiis dolore deserunt illum perspiciatis cupiditate
              ratione quaerat, id necessitatibus exercitationem! Mollitia illum
              voluptates harum reprehenderit exercitationem soluta, temporibus
              cum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            Métodos de compra
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionTitle}>
              ¿El precio que figura en la web es el precio final?
            </Typography>
            <Typography className={styles.accordionText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              suscipit blanditiis dolore deserunt illum perspiciatis cupiditate
              ratione quaerat, id necessitatibus exercitationem! Mollitia illum
              voluptates harum reprehenderit exercitationem soluta, temporibus
              cum!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            ¿Quiénes somos?
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.accordionTitle}>
              ¿El precio que figura en la web es el precio final?
            </Typography>
            <Typography className={styles.accordionText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              suscipit blanditiis dolore deserunt illum perspiciatis cupiditate
              ratione quaerat, id necessitatibus exercitationem! Mollitia illum
              voluptates harum reprehenderit exercitationem soluta, temporibus
              cum!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Stack>
  );
};

export default AccordionUsage;
