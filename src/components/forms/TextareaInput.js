import React from 'react'
import {useField} from 'formik';

type TextareaInputProps = {
    label: string,
    labelclass: string,
    name: string,
    className: string,
    placeholder?: string,
    errorclass?: string,
    cols?: string,
    row?: string
}

const TextareaInput = ({label, ...props}: TextareaInputProps) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name} className={props.labelclass}>{label}</label>
            <textarea className={props.className} {...field} {...props}/>
            {meta.touched && meta.error ? (
            <div className={props.errorclass}>{meta.error}</div>
            ) : null}
        </>
    )
}

export default TextareaInput;
