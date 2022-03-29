import React from 'react'
import useTextInput from '../hooks/useTextInput'

export default function CreateBudget() {

    const inputsData = {
        customer: {
            value: '',
            label: 'Cliente',
            maxLength: 100,
            valid: false,
            errorMessages: ['*','El Cliente debe tener al menos 4 caracteres'],
            pattern: /^.{4,}$/
        },
        cif: {
            value: '',
            label: 'CIF',
            maxLength: 9,
            valid: false,
            errorMessages: ['*','El CIF debe comenzar por letra válida y tener 9 caracteres'],
            pattern: /([ABCDEFGHPQS])([0-9]{8})/i
        },
        contact: {
            value: '',
            label: 'Contacto',
            maxLength: 100,
            valid: true,
            errorMessages: ['',''],
            pattern: /.*/i // All credits to Raul :)
        }
    }

    const [customerInput, customerValue, customerValid] = useTextInput(inputsData.customer);  
    const [cifInput, cifValue, cifValid] = useTextInput(inputsData.cif); 
    const [contactInput, contactValue, contactValid] = useTextInput(inputsData.contact);

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log({
            customer: customerValue
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-100">
                    <form onSubmit={handleOnSubmit}>
                        <div className="row">
                            <div className="col-100">
                                {customerInput}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-100">
                                {cifInput}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-100">
                                {contactInput}
                            </div>
                        </div>
                        <div className="row end">
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
