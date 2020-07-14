import React from 'react'
import {useField} from 'formik';

const TextareaInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name} className={props.labelclass}>{label}</label>
            <textarea className={props.class} {...field} {...props}/>
            {meta.touched && meta.error ? (
            <div className={props.errorclass}>{meta.error}</div>
            ) : null}
        </>
    )
}

export default TextareaInput;
