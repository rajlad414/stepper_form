import React, { useState } from 'react';
import { Stepper, Step, StepLabel} from '@mui/material';
import CONSTANTS from '../const';
import UserInfo from './UserInfo';
import AddressDetails from './AddressDetails';
import ThanksComponent from './ThanksComponent';

function StepperForm() {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>{CONSTANTS.LABELS.STEP1}</StepLabel>
        </Step>
        <Step>
          <StepLabel>{CONSTANTS.LABELS.STEP2}</StepLabel>
        </Step>
        <Step>
          <StepLabel>{CONSTANTS.LABELS.STEP3}</StepLabel>
        </Step>
      </Stepper>
      <div>
        {activeStep === 0 && (
          <div>
            <UserInfo onSubmitForm={handleNext}/>
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <AddressDetails onBackClick={handleBack}  onNextClick={handleNext}/>
          </div>
        )}
        {activeStep === 2 && (
          <div>
            <ThanksComponent />
          </div>
        )}
      </div>
    </div>
  );
}

export default StepperForm;