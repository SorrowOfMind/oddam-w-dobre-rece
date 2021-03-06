import React, {useState} from 'react';
import {Field, useField} from 'formik';

type SelectInputProps = {
    options: Array<number> | Array<string>,
    name: string,
    values: Object,
    errorclass: string,
    className: string
}

const SelectInput = ({options, values, ...props}: SelectInputProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => setIsOpen(prevOpen => !prevOpen);
    const [field, meta] = useField(props);
    
    return (
        <div className={isOpen ? "select-wrapper select-arrow-up" : "select-wrapper select-arrow-down"}>
            <div className="pseudo-select">{values[props.name] ? values[props.name] : '\u2014 wybierz \u2014'}</div>
            <Field as="select" {...field} {...props} onClick={handleMenu} >
                {options.map(option => <option key={option}>{option}</option>)}
            </Field>
            {meta.touched && meta.error ? (
            <div className={props.errorclass}>{meta.error}</div>
            ) : null}
        </div>
    )
}

export default SelectInput
