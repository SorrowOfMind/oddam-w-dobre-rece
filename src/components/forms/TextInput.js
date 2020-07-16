import React from 'react'
import {useField} from 'formik';

type TextInputProps = {
    label: string,
    labelclass: string,
    name: string,
    type: string,
    className: string,
    errorclass?: string,
    placeholder?: string
}

const TextInput = ({label, ...props}: TextInputProps) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name} className={props.labelclass}>{label}</label>
            <input className={props.className} {...field} {...props} />
            {meta.touched && meta.error ? (
            <div className={props.errorclass} >{meta.error}</div>
            ) : null}
        </>
    )
}

export default TextInput;
