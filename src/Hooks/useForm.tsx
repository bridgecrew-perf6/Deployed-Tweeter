import React, { useState } from 'react'

const useForm = (formParams: object ): [object, Function] => {
    const [formState, setFormState] = useState(formParams)
    const setter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    return [formState, setter]
}

export default useForm
