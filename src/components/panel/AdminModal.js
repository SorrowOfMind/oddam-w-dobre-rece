import React, { useState } from 'react';
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
}

const AdminModal = ({modal, setModal}: ModalProps) => {
    const [adminEmail, setAdminEmail] = useState('');

    const handleChange = e => setAdminEmail(e.target.value);
    
    const callAddAdminFn = ({email: adminEmail}) => {
        const addAdmin = firebase.functions().httpsCallable('addAdmin');
        addAdmin({email: adminEmail})
            .then(result => console.log('ok', result.data))
            .then(() => setModal(false))
            .then(() => setAdminEmail(''))
            .catch(err => console.log('err', JSON.stringify(err)))
    }

    const onEnter = e => {
        if (e.keyCode === 13) {
            callAddAdminFn({email: adminEmail});
        }
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
        setAdminEmail('');
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
                <p className="modal-title">Nadaj uprawnienia admina:</p>
                <input 
                type="text" 
                className="modal__input" 
                autoFocus
                value={adminEmail}
                onChange={handleChange} 
                onKeyDown={onEnter}/>
                <button className="modal__btn" onClick={() => callAddAdminFn({email: adminEmail})}>Potwierdź</button>
            </motion.div>
        </motion.div>)}
        </>
    )
}

export default AdminModal;
