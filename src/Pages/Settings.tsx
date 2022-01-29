import React, { useContext, useEffect, useState } from 'react'
import { Box, FormControl, Input, Select, Flex, Heading, Button } from '@chakra-ui/react'

import { TokenContext } from '../App'
import { useNavigate } from 'react-router-dom'
import useForm from '../Hooks/useForm'
import { baseUrl } from '../settings'
import { settingForm } from '../Types/Form'
import { UserContext } from '../App'



const Settings = () => {

    // @ts-ignore
    const {token, setToken} = useContext(TokenContext)
    const navigate = useNavigate()
    const initialFormData = {
        "image_url": "",
        "bio": "",
        "doj": "",
        "first": "",
        "last": "",
        "dob": null,
        "gender": ""
    }
    const {user, setUser} = useContext(UserContext)
    const [form, setForm] = useState(initialFormData) as [settingForm, Function]
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if(token === "") {
            alert('You need to be logged in')
            navigate('/login')
        }
        setLoading(true)

        fetch(`${baseUrl}/auth/user/`, {
            method: "GET",
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            setForm({...form, ...data})
            setLoading(false)
        })
    }, [])

        const uploadImage = (files: FileList | null) => {
        if(files !== null) {
            const file = files![0]
            const formData = new FormData()
            formData.append("file", file)
            formData.append("upload_preset", "tweeter")

            const url = "https://api.cloudinary.com/v1_1/blankc/image/upload"

            fetch(url, {
                method: "POST",
                body: formData
            })
            .then(res => res.json())
            .then(data => {
                setForm({...form, "image_url": data.url})
            })
            .catch(err => console.log(JSON.stringify(err)))
        }
    }


    const handleSettingSubmit = () => {
        fetch(`${baseUrl}/auth/user/`, {
            method: "PATCH",
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(() => {
            alert('Success in changing data')
            navigate(-1)
        })
        .catch(err => alert(JSON.stringify(err)))
    } 

    if(loading) {
        return <p>Loading...</p>
    }


    return (
        <Flex height={"100vh"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Box width={"80%"} boxSizing='border-box'>

                <Heading textAlign={"center"}>{user.username}'s Settings</Heading>
                <FormControl maxWidth={"100vw"} boxSizing='border-box'>
                <Input type={"file"} onChange={(e) => uploadImage(e.target.files)}></Input>
                {/* <FormLabel>Email Address</FormLabel> */}

                <Input type="bio" placeholder="Enter an awesome Bio" 
                name="bio" value={form.bio} marginY="15px"
                onChange={(e) => {setForm({...form, [e.target.name]: e.target.value})}}></Input>

                {/* <FormLabel>Username</FormLabel> */}
                <Input placeholder="Enter your first name here" 
                name="first" value={form.first} marginY="15px"
                onChange={(e) => {setForm({...form, [e.target.name]: e.target.value})}}></Input>

                {/* <FormLabel>Password</FormLabel> */}
                <Input placeholder="Enter your last name here" marginY="15px"
                name="last" value={form.last}
                onChange={(e) => {setForm({...form, [e.target.name]: e.target.value})}}></Input>

                {/* gender Field select */}
                <Select name="gender" id="gender" value={form.gender} onChange={(e) =>  {setForm({...form, [e.target.name]: e.target.value})} }>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="N">Prefer Not to say</option>
                </Select>

                <Box textAlign="center" marginTop={"20px"} display={"flex"} justifyContent={"space-evenly"}>
                    <Button onClick={() => handleSettingSubmit()}>Submit</Button>
                </Box>
            
            </FormControl>
            </Box>
        </Flex>
    )
}

export default Settings
