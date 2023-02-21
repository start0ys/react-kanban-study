import React from "react";
import { Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

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



const CustomModal = (props: any) => {
  const styleMap = {width: '', height: ''};
  if(!!props.width) styleMap.width = props.width;
  if(!!props.height) styleMap.height = props.height;
  const classes = useStyles({ styleMap });
  return (
    <>
      <Modal
          open={props.open}
          onClose={props.onClose}>
        <div className={classes.paper}>
            <CloseIcon onClick={props.onClose} className="modal-close" />
            {props.children}
        </div>
      </Modal>
    </>
  );
}

export default CustomModal;
