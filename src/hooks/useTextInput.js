import { useEffect, useState } from "react"

export default function useTextInput(data) {

    const [value, setValue] = useState(data.value);
    const [validation, setValidation] = useState({
        valid: data.valid,
        errorMessage: data.errorMessages[0]
    })

    const handleOnChange = e => setValue(e.target.value);

    useEffect(() => {
        if(value.length === 0 && !validation.valid) {
            setValidation({
                valid: false,
                errorMessage: data.errorMessages[0]
            })
        } else if(!new RegExp(data.pattern).test(value)) {
            setValidation({
                valid: false,
                errorMessage: data.errorMessages[1]
            })
        } else {
            setValidation({
                valid: true,
                errorMessage: ''
            })
        }
    }, [value])

    const input = (
        <>
            <label>
                {data.label}
                <span className="alert">{validation.errorMessage}</span>
            </label>
            <input type="text" 
                   value={value}
                   maxLength={data.maxLength}
                   onChange={handleOnChange}/>
        </>
    )

    return [input, value, validation.valid];
}