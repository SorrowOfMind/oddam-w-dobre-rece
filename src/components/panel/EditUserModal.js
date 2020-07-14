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

const EditUserModal = ({modal, setModal, user, callListAllUsersFn}) => {

    const callUpdateUserFn = ({user, values, disName, photo, phone}) => {
        const uid = user.uid;
        const updateUser = firebase.functions().httpsCallable('updateUser');
        updateUser({uid, values, disName, photo, phone})
            .then(() => callListAllUsersFn())
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
    console.log(user);
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
                <p className="modal-title">Edytuj dane użytkownika</p>
                <Formik
                    initialValues={{email: user.email, phoneNumber: (user.phoneNumber ? user.phoneNumber : ''), emailVerified: user.emailVerified, password: '', displayName: (user.displayName ? user.displayName : ''), photoURL: (user.photoURL ? user.photoURL : ''), disabled: user.disabled}}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Email jest niepoprawny')
                            .required('Wymagane'),
                        phoneNumber: Yup.string()
                            .matches(/^\+?[1-9]\d{1,14}$/, 'Numer teleonu w fomacie E.64'),
                        emailVerified: Yup.boolean()
                            .required('Wymagane'),
                        password: Yup.string()
                            .min(6, 'Hasło min. 6 znaków'),
                            // .required('Wymagane'),
                        displayName: Yup.string(),
                        photoURL: Yup.string(),
                        disabled: Yup.boolean()
                            .required('Wymagane')
                    })}
                    onSubmit={(values) => {
                        let disName = values.displayName ? values.displayName : null;
                        let photo = values.photoURL ? values.photoURL : null;
                        let phone = values.phoneNumber ? values.phoneNumber : null;
                        callUpdateUserFn({user, values, disName, photo, phone});
                    }}
                >{formik => (
                    <form onSubmit={formik.handleSubmit} className="modal-form">
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Email"
                                labelclass="modal-label"
                                className="modal__input"
                                errorclass="modal__error"
                                name="email"
                                type="email"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Phone Number (E.64 format)"
                                labelclass="modal-label"
                                className="modal__input"
                                errorclass="modal__error"
                                name="phoneNumber"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Email Verified? (true/false)"
                                labelclass="modal-label"
                                errorclass="modal__error"
                                className="modal__input"
                                name="emailVerified"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Password (unhashed)"
                                labelclass="modal-label"
                                errorclass="modal__error"
                                className="modal__input"
                                name="password"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Display Name"
                                labelclass="modal-label"
                                errorclass="modal__error"
                                className="modal__input"
                                name="displayName"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Photo URL"
                                labelclass="modal-label"
                                errorclass="modal__error"
                                className="modal__input"
                                name="photoURL"
                                type="text"
                            />
                        </div>
                        <div className="modal-input-wrapper">
                            <TextInput 
                                label="Disabled? (true/false)"
                                labelclass="modal-label"
                                errorclass="modal__error"
                                className="modal__input"
                                name="disabled"
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

export default EditUserModal;
