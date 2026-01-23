import { useState } from "react";
import {
  Stepper, Step, StepLabel,
  Button, Box, Typography
} from "@mui/material";

const steps = ["Account", "Details", "Confirm"];

export default function BasicStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box sx={{ width: 400 }}>
      <Stepper activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 3 }}>
        <Typography>Step Content: {steps[activeStep]}</Typography>

        <Box sx={{ mt: 2 }}>
          <Button
            disabled={activeStep === 0}
            onClick={() => setActiveStep(s => s - 1)}
          >
            Back
          </Button>

          <Button
            variant="contained"
            onClick={() => setActiveStep(s => s + 1)}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
