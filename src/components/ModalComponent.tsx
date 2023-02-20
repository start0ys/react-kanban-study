import React from 'react';
import { Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

interface ModalComponentProps {
  open: boolean;
  handleClose: () => void;
  modalContent: JSX.Element;
  width: string;
  height: string;
  message: string;
}

const useStyles = makeStyles((theme) => ({
  paper: ({ styleMap }: any) => ({
    position: 'absolute',
    width: styleMap?.width ? styleMap.width : '400px',
    height: styleMap?.height ? styleMap.height : 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    overflow: 'scroll'
  })
}));

const ModalComponent = ({ open, handleClose, modalContent, width, height, message }:ModalComponentProps) => {
  const styleMap = {width: width, height: ''};
  if(!!height) styleMap.height = height;
  const classes = useStyles({ styleMap });



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
            <CloseIcon onClick={handleClose} className="modal-close" />
            {!!message ? (
              <>
                <p>{message}</p>
                <Button onClick={handleClose} variant="contained" color="primary">
                  Close
                </Button>
              </>
            ) : modalContent}
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
