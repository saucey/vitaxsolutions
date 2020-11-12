import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { CLOSE_MODAL } from '../store/actions'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '400px',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const AppModal = (props) => {
  
    useEffect(() => {
    }, [])
    
    const isNewModalOpen = useSelector((state) => state.modalOpen);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch()
    
    const modalOpen = (close) => {
      dispatch(CLOSE_MODAL(close))
    }
    
    if (isNewModalOpen) {
      setOpen(true);
      modalOpen(!true);
    }
    
    console.log(isNewModalOpen, 'isNewModalOpen')
    
    const handleClose = () => {
      setOpen(false);
    };
    
    return (
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      >
      <Fade in={open}>
      <div className={classes.paper}>
            {props.children}
      </div>
      </Fade>
      </Modal>
      )
  }