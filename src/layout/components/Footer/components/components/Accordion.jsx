import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Link from '@mui/material/Link';

const AccordionComponent = ({ title, content, link }) => {
  return (
    <Accordion sx={{ bgcolor: 'transparent', boxShadow: 0, color: '#fff' }}>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        {link ? (
          <Link href={link.href} color={"#fff"}>
            {link.text}
          </Link>
        ) : (
          content
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
