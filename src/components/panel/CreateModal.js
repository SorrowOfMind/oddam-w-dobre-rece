import React from 'react';
import {Formik} from 'formik';
import { motion } from 'framer-motion';
import firebase from '../../firebase/config';
import TextInput from '../forms/TextInput';
import * as Yup from 'yup';

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
    collection: Array<Object>
}

const CreateModal = ({modal, setModal, collection}: ModalProps) => {

    const callAddOrgFn = ({collection, values, itemsArr}) => {
        const addOrg = firebase.functions().httpsCallable('addOrg');
        addOrg({collection, values, itemsArr})
        .then(() => setModal(false))
        .catch(err => console.log('err', JSON.stringify(err)))
    }

    const closeByBackdrop = e => {
        e.stopPropagation();
        if (e.target.id !== '') setModal(false);
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
                <p className="modal-title">Dodaj organizację</p>
                <Formik
                    initialValues={{name: '', goal: '', items: ''}}
                    validationSchema={Yup.object({
                        name: Yup.string().trim().required('Wymagane'),
                        goal: Yup.string().trim().required('Wymagane'),
                        items: Yup.string().trim().required('Wymagane')
                    })}
                    onSubmit={(values, {resetForm}) => {
                        let itemsArr = values.items.split(',')
                        callAddOrgFn({collection, values, itemsArr});
                        resetForm(values);
                    }}
                >{formik => (
                    <form onSubmit={formik.handleSubmit} className="modal-form">
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Nazwa"
                                labelclass="modal-label"
                                className="modal__input"
                                errorclass="modal__error"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Cel"
                                labelclass="modal-label"
                                errorclass="modal__error"
                                className="modal__input"
                                name="goal"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Zbierane rzeczy (po przecinku)"
                                labelclass="modal-label"
                                errorclass="modal__error"
                                className="modal__input"
                                name="items"
                                type="text"
                            />
                        </div>
                        <button type="submit" className="modal__btn">Potwierdź</button>
                    </form>
                )}
                </Formik>
            </motion.div>
        </motion.div>)}
        </>
    )
}

export default CreateModal;
