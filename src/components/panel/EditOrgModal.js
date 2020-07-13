import React from 'react';
import {useSelector} from 'react-redux';
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

const EditOrgModal = ({modal, setModal, id, collection}) => {

    const docRef = useSelector(state => state.firestore.ordered[collection]);
    const doc = docRef.filter(doc => doc.id === id)[0];

    const callUpdateOrgFn = ({id, collection, values, itemsArr}) => {
        const updateOrg = firebase.functions().httpsCallable('updateOrg');
        updateOrg({id, collection, values, itemsArr})
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
                <p className="modal-title">Edytuj dane organizacji</p>
                <Formik
                    initialValues={{name: doc.name, goal: doc.goal, items: doc.items.join(', ')}}
                    validationSchema={Yup.object({
                        name: Yup.string().trim().required('Wymagane'),
                        goal: Yup.string().trim().required('Wymagane'),
                        items: Yup.string().trim().required('Wymagane')
                    })}
                    onSubmit={(values) => {
                        let itemsArr = values.items.split(',')
                        callUpdateOrgFn({id, collection, values, itemsArr});
                    }}
                >{formik => (
                    <form onSubmit={formik.handleSubmit} className="modal-form">
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Nazwa"
                                labelClass="modal-label"
                                className="modal__input"
                                errorClass="modal__error"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Cel"
                                labelClass="modal-label"
                                errorClass="modal__error"
                                className="modal__input"
                                name="goal"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Zbierane rzeczy (po przecinku)"
                                labelClass="modal-label"
                                errorClass="modal__error"
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

export default EditOrgModal;
