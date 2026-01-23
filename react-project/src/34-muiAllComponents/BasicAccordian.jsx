import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordian() {
  return (
    <>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Section 1</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography>
          This is the content inside section 1.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>Profile Info</Typography>
  </AccordionSummary>
  <AccordionDetails>
    User details go here.
  </AccordionDetails>
</Accordion>

<Accordion>
  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
    <Typography>Settings</Typography>
  </AccordionSummary>
  <AccordionDetails>
    Settings content goes here.
  </AccordionDetails>
</Accordion>

    </>
  );
}
