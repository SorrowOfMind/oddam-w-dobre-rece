import React from 'react'
import {useField} from 'formik';

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name} className={props.labelClass}>{label}</label>
            <input className={props.class} {...field} {...props}/>
            {meta.touched && meta.error ? (
            <div className={props.errorClass} >{meta.error}</div>
            ) : null}
        </>
    )
}

export default TextInput;
