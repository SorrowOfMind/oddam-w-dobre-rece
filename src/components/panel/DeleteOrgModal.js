import React from 'react';
import { motion } from 'framer-motion';
import firebase from '../../firebase/config';

const backdropVariant = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
}

const modalVariant = {
    hidden: {
        x: '-100vw',
        y: '-50%',
        opacity: 0
    },
    visible: {
        x: '-50%',
        y: '-50%',
        opacity: 1,
        transition: {delay: 0.1},
    }
}

type ModalProps = {
    modal: boolean,
    setModal: Function,
    id: string,
    collection: Array<Object>
}

const DeleteOrgModal = ({modal, setModal, id, collection}: ModalProps) => {

    const callDeleteOrgFn = ({id, collection}) => {
        const deleteOrg = firebase.functions().httpsCallable('deleteOrg');
        deleteOrg({id, collection})
            .then(() => setModal(false))
            .catch(err => console.log('err', JSON.stringify(err)))
    }
  
    const closeByBackdrop = e => {
        e.stopPropagation();
        if (e.target.id !== '') {
            setModal(false);
        }
    }

    const closeByX = e => {
        e.stopPropagation();
        setModal(false);
    }

    return (
        <>
        {modal && 
        (<motion.div 
        className="backdrop"
        variant={backdropVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={closeByBackdrop}
        id="backdrop"
        >
            <motion.div 
            className="modal"
            variants={modalVariant}
            >
                <span className="modal-close" onClick={closeByX}>x</span>
                <p className="modal-title">Czy chesz usunąć organizację?</p>
                <button className="modal__btn" onClick={() => callDeleteOrgFn({id, collection})}>Potwierdź</button>
            </motion.div>
        </motion.div>)}
        </>
    )
}

export default DeleteOrgModal;
