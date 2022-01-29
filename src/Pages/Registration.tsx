import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input, Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import useForm from '../Hooks/useForm'
import { registrationForm } from '../Types/Form'
import { TokenContext } from '../App'
import { useNavigate } from 'react-router-dom'

import {baseUrl} from "../settings"
import { Flex, Box } from '@chakra-ui/react'

const Registration = () => {

    // @ts-ignore
    const { token, setToken } = useContext(TokenContext)
    const navigate = useNavigate()

    const registrationValidation = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(form.password1 !== form.password2) {
            alert('Password and confirm password arent same');
            return
        }

        console.log(JSON.stringify(form))
        fetch(`${baseUrl}/auth/registration/`, {
            method: "POST",
            body: JSON.stringify(form),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            if('non_field_errors' in data) {
                alert(JSON.stringify(data['non_field_errors']))
            }
            else {
                setToken(data.key)
                alert('Logged In and Registered')
                navigate(-1)
            }
        })
    }

    const [form, setForm] = 
    useForm({'username': "",'email': ""  , 'password1': "", "password2": ""}) as [registrationForm, Function]

    return (
        <Flex height={"100vh"} alignItems={"center"}>
        <FormControl>
            {/* <FormLabel>Email Address</FormLabel> */}
            <Input type="email" placeholder="Enter a valid Email Address" 
            name="email" value={form.email} margin="15px"
            onChange={(e) => setForm(e)}></Input>

            {/* <FormLabel>Username</FormLabel> */}
            <Input placeholder="Enter your username" 
            name="username" value={form.username} margin="15px"
            onChange={(e) => setForm(e)}></Input>

            {/* <FormLabel>Password</FormLabel> */}
            <Input type="password" placeholder="Enter your password" margin="15px"
            name="password1" value={form.password1}
            onChange={(e) => setForm(e)}></Input>

            {/* <FormLabel>Confirm Password</FormLabel> */}
            <Input type="password" placeholder="Re-enter your password" 
            name="password2" value={form.password2} margin="15px"
            onChange={(e) => setForm(e)}></Input>

            <Box textAlign="center" marginTop={"20px"} display={"flex"} justifyContent={"space-evenly"}>
                <Button onClick={(e) => registrationValidation(e)}>Submit</Button>
            </Box>
           
        </FormControl>
        </Flex>
    )
}

export default Registration;
