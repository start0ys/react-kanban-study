import React from "react";
import { Button } from '@material-ui/core';
import CustomModal from './CustomModal';

interface CustomAlertProps {
    open: boolean;
    onClose: () => void;
    message: string;
}




const CustomAlert = (props: CustomAlertProps) => {
  return (
    <>
      <CustomModal open={props.open} onClose={props.onClose} >
            <p>{props.message}</p>
            <Button onClick={props.onClose} variant="contained" color="primary">
                Close
            </Button>
            
      </CustomModal>
    </>
  );
}

export default CustomAlert;
