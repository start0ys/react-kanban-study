import { useState } from "react";
import { Button } from '@material-ui/core';
import ModalComponent from './ModalComponent';
import Kanban from './Kanban';



const ModalTest = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className="container">
            <h3>TEST</h3>
            <Button onClick={handleOpen} variant="contained" color="primary">
                칸반 모달
            </Button>
            <ModalComponent open={open} handleClose={handleClose} modalContent={<Kanban/>} width='60%' height='70%' message=''/>
        </div>
    )
}

export default ModalTest;

