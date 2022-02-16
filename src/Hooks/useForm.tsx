import React, { useState } from 'react'

const useForm = (formParams: object ): [object, Function] => {
    const [formState, setFormState] = useState(formParams)
    const setter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    const resetForm =() => {
        const formFields = Object.keys(formParams)
        let resetObject = {}
        for(let i = 0; i < formFields.length; i++) {
            resetObject[formFields[i]] = ""
        }
        setFormState(resetObject)
    }
    return [formState, setter, resetForm]
}

export default useForm
