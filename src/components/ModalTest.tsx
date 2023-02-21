import { useState } from "react";
import { Button } from '@material-ui/core';
import CustomModal from './Modal/CustomModal';
import CustomAlert from './Modal/CustomAlert';
import Kanban from './Kanban';



const ModalTest = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const [openAlert, setOpenAlert] = useState(false);
    const handleOpenAlert = () => setOpenAlert(true);
    const handleCloseAlert = () => setOpenAlert(false);


    return (
        <div className="container">
            <Button onClick={handleOpenModal} variant="contained" color="primary">
                칸반 모달
            </Button>
            <Button onClick={handleOpenAlert} variant="contained" color="primary">
                경고 모달
            </Button>
            <CustomAlert open={openAlert} onClose={handleCloseAlert} message='경고창 테스트'/>
            <CustomModal open={openModal} onClose={handleCloseModal} width='80%'>
                <Kanban/>
            </CustomModal>
        </div>
    )
}

export default ModalTest;

