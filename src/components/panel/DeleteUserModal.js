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

const DeleteUserModal = ({modal, setModal, user, callListAllUsersFn}) => {

    const callDeleteUserFn = ({user}) => {
        const uid = user.uid;
        const deleteUser = firebase.functions().httpsCallable('deleteUser');
        deleteUser({uid})
            .then(() => callListAllUsersFn())
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
                <p className="modal-title">{`Czy chcesz usunąć usera ${user.uid}?`}</p>
                <button className="modal__btn" onClick={() => callDeleteUserFn({user})}>Potwierdź</button>
            </motion.div>
        </motion.div>)}
        </>
    )
}

export default DeleteUserModal;
