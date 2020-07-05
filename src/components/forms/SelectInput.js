import React, {useState} from 'react';
import {Field, useField} from 'formik';

const SelectInput = ({options, values, ...props}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => setIsOpen(prevOpen => !prevOpen);
    const [field, meta] = useField(props);
    return (
        <div className={isOpen ? "select-wrapper select-arrow-up" : "select-wrapper select-arrow-down"}>
            <div className="pseudo-select">{values.bags ? values.bags : '\u2014 wybierz \u2014'}</div>
            <Field as="select" {...field} {...props} onClick={handleMenu}>
                {options.map(option => <option key={option}>{option}</option>)}
            </Field>
        </div>
    )
}

export default SelectInput
