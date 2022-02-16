import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react"
import React from "react"
import useForm from "../Hooks/useForm"

import { loginForm } from "../Types/Form"
import { baseUrl } from "../settings"
import { TokenContext } from "../App"
import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"



function validateEmail(email: string) 
{
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const StandardSignIn = () => {

    // @ts-ignore
    const { token , setToken } = useContext(TokenContext)
    let navigate = useNavigate()

    const loginRequest = (e: any, loginDetails: loginForm) => {
        e.preventDefault()
        const url = baseUrl + '/auth/login/';
        var data;
        if(validateEmail(loginDetails.usernameOrEmail)) {
            data = {"email": loginDetails.usernameOrEmail, "password": loginDetails.password}
        }
        else {
            data = {"username": loginDetails.usernameOrEmail, "password": loginDetails.password}
        }

        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })
        .then(response => response.json())
        .then(data => {
            if(!data.hasOwnProperty('key'))
            {
                throw new Error('Invalid Username/Email or Password');
            }
            setToken(data.key)
            alert('Logged In Successfully')
            navigate(-1)
        })
        .catch(err => alert(err))
    }

    const [form, setForm ] = useForm({"usernameOrEmail": "", "password": ""}) as [loginForm, Function]

    return (
        <>
        <Flex height={"100%"} marginY={"auto"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <FormControl id="user-login-form" width="80%" height={"100%"} as="form">
                <Flex direction="column" justifyContent={"center"} alignItems={"center"}>
                    <Input margin={"15px"} placeholder="Username/Email" value={form.usernameOrEmail} name="usernameOrEmail" 
                    onChange={(e) => setForm(e)} id="username-email"></Input>

                    <Input margin={"15px"} placeholder="password" value={form.password} name="password" type="password"
                    onChange={(e) => setForm(e)} id="login-password" autoComplete="on"></Input>
                </Flex>
                <Box textAlign="center" marginTop={"20px"} display={"flex"} justifyContent={"space-evenly"}>
                    <Button type="submit" onClick={(e) => loginRequest(e, form)}>Login</Button>
                </Box>
            </FormControl>   
        </Flex>
        </>     
    )
}

export default StandardSignIn
